"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { ShowcaseImage } from "@/lib/showcase";
import { projects } from "./selectedWorks.data";
import styles from "./SelectedWorks.module.css";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={styles.imageWrap}>
      {failed && (
        <div className={styles.placeholder} aria-hidden="true">
          <span className={styles.placeholderMark}>Nestique Studio</span>
          <span className={styles.placeholderNote}>Image unavailable</span>
        </div>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        className={styles.image}
        data-state={failed ? "error" : "ok"}
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function ProjectGallery({ photos, alt, title }: { photos: string[]; alt: string; title: string }) {
  const [active, setActive] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const current = Math.min(active, photos.length - 1);

  useEffect(() => {
    const strip = thumbnailsRef.current;
    const selected = strip?.children[current] as HTMLElement | undefined;
    if (!strip || !selected) return;
    const left = selected.offsetLeft;
    if (left < strip.scrollLeft) strip.scrollLeft = left;
    else if (left + selected.offsetWidth > strip.scrollLeft + strip.clientWidth) {
      strip.scrollLeft = left + selected.offsetWidth - strip.clientWidth;
    }
  }, [current]);
  const move = (direction: number) => setActive((current + direction + photos.length) % photos.length);

  return (
    <div className={styles.gallery} role="region" aria-label={title + " image gallery"}>
      <div className={styles.galleryStage}>
        <ProjectImage key={photos[current]} src={photos[current]} alt={alt + " - view " + (current + 1)} />
        <div className={styles.galleryControls}>
          <span aria-live="polite" aria-atomic="true">{String(current + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
          <div className={styles.galleryArrows}>
            <button type="button" onClick={() => move(-1)} aria-label={"Previous image of " + title}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <button type="button" onClick={() => move(1)} aria-label={"Next image of " + title}><ArrowIcon /></button>
          </div>
        </div>
      </div>
      <div className={styles.thumbnails} ref={thumbnailsRef} aria-label={"Choose a view of " + title}>
        {photos.map((photo, index) => (
          <button key={photo} type="button" aria-label={"Show " + title + " image " + (index + 1)} aria-pressed={index === current} onClick={() => setActive(index)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt="" loading="lazy" decoding="async" />
          </button>
        ))}
      </div>
    </div>
  );
}

type SelectedWorksProps = {
  /** slug → DB-backed image, from getShowcaseImages(). Optional: when absent
   *  or missing a slug, the card uses the bundled fallback in selectedWorks.data.ts. */
  images?: Record<string, ShowcaseImage>;
  showFooter?: boolean;
};

export default function SelectedWorks({ images, showFooter = true }: SelectedWorksProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Marks that JS is available: reveal styles only apply once this is set,
    // so the section stays fully visible if JS fails or is disabled.
    root.dataset.animate = "true";

    const items = Array.from(root.querySelectorAll<HTMLElement>(`.${styles.project}`));
    if (items.length === 0) return;

    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add(styles.inView));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-labelledby="selected-works-heading">
      <div className={styles.inner} ref={rootRef}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>Selected Works</p>
          <h2 id="selected-works-heading" className={styles.title}>
            Spaces With A Story
          </h2>
          <p className={styles.subtitle}>
            From restaurants that express a culture to homes designed around the people who live in
            them.
          </p>
        </header>

        <div className={styles.projects}>
          {projects.map((p) => {
            const dbImage = images?.[p.slug];
            const src = dbImage?.url ?? p.image;
            const alt = dbImage?.alt ?? p.alt;
            return (
            <article id={p.slug} className={styles.project} key={p.slug}>
              <div className={styles.media}>
                <ProjectGallery photos={[src, ...p.gallery.filter((photo) => photo !== src)]} alt={alt} title={[p.title, p.subtitle].filter(Boolean).join(" ")} />
                <span className={styles.number} aria-hidden="true">
                  {p.number}
                </span>
              </div>

              <div className={styles.body}>
                <p className={styles.category}>{p.category}</p>
                <h3 className={styles.name}>
                  {p.title}
                  {p.subtitle && <span className={styles.nameSub}>{p.subtitle}</span>}
                </h3>
                <p className={styles.location}>{p.location}</p>
                <p className={styles.concept}>{p.concept}</p>
                <p className={styles.description}>{p.description}</p>
                <ul className={styles.scope}>
                  {p.scope.map((s) => (
                    <li className={styles.scopeItem} key={s}>
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className={styles.cta}
                  aria-label={`${p.cta}: ${[p.title, p.subtitle].filter(Boolean).join(" ")}`}
                >
                  {p.cta}
                  <ArrowIcon />
                </Link>
              </div>
            </article>
            );
          })}
        </div>

        {showFooter && <div className={styles.footer}>
          <Link href="/portfolio" className={styles.footerBtn}>
            View All Projects
          </Link>
        </div>}
      </div>
    </section>
  );
}
