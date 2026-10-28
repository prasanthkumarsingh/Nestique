"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Maximize2, X, ImageOff } from "lucide-react";
import type { PortfolioProject } from "@/lib/portfolio.data";
import styles from "./PortfolioGallery.module.css";

function GalleryPhoto({ url, alt }: { url: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  return failed ? <span className={styles.fallback}><ImageOff aria-hidden="true" /><span>{alt}</span></span> : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={url} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
  );
}

export default function PortfolioGallery({ projects }: { projects: PortfolioProject[] }) {
  const [filter, setFilter] = useState("All projects");
  const [selection, setSelection] = useState({ project: 0, photo: 0 });
  const dialog = useRef<HTMLDialogElement>(null);
  const selectedProject = projects[selection.project];
  const selectedPhoto = selectedProject.photos[selection.photo];
  const move = (direction: number) => setSelection((current) => ({ ...current, photo: (current.photo + direction + selectedProject.photos.length) % selectedProject.photos.length }));
  const open = (project: number, photo: number) => {
    setSelection({ project, photo });
    dialog.current?.showModal();
  };

  return (
    <section className={styles.section} aria-label="Project photographs">
      <div className={styles.toolbar}>
        <div className={styles.filters} aria-label="Filter projects">
          {["All projects", "Residential", "Hospitality"].map((category) => <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}
        </div>
        <span className={styles.collectionCount} aria-live="polite">{projects.filter((p) => filter === "All projects" || p.category === filter).length} projects to explore</span>
      </div>
      <div className={styles.collections}>
        {projects.map((project, projectIndex) => (filter === "All projects" || project.category === filter) && (
          <article id={project.slug} className={styles.collection} key={project.slug}>
            <header className={styles.projectHead}>
              <div className={styles.projectTitle}>
                <span className={styles.projectNumber}>{String(projectIndex + 1).padStart(2, "0")}</span>
                <div><p className={styles.category}>{project.category} / {project.photos.length} images</p><h2>{project.name}</h2><p className={styles.projectSubtitle}>{project.subtitle}</p></div>
              </div>
              <p className={styles.description}>{project.description}</p>
            </header>
            <div className={styles.photoGrid} data-portrait={project.slug === "heritage-apartment"}>
              {project.photos.map((photo, photoIndex) => (
                <figure className={styles.photoCard} key={photo.url}>
                  <button type="button" onClick={() => open(projectIndex, photoIndex)} aria-label={"Enlarge " + project.name + ": " + photo.caption}>
                    <GalleryPhoto url={photo.url} alt={project.name + " - " + photo.caption} />
                    <span className={styles.zoom}><Maximize2 size={17} aria-hidden="true" /></span>
                  </button>
                  <figcaption><span>{photo.caption}</span><span className={styles.photoNumber}>{String(photoIndex + 1).padStart(2, "0")}</span></figcaption>
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>
      <dialog ref={dialog} className={styles.dialog} aria-label={selectedProject.name + " full-size photograph"} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={(event) => { if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } if (event.key === "ArrowRight") { event.preventDefault(); move(1); } }}>
        <button autoFocus type="button" className={styles.close} onClick={() => dialog.current?.close()} aria-label="Close photograph"><X aria-hidden="true" /></button>
        <div className={styles.lightboxPhoto}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={selectedPhoto.url} alt={selectedProject.name + " - " + selectedPhoto.caption} />
        </div>
        <div className={styles.lightboxFooter}>
          <div aria-live="polite"><strong>{selectedProject.name}</strong><p>{selectedPhoto.caption} / {selection.photo + 1} of {selectedProject.photos.length}</p></div>
          <div className={styles.arrows}><button type="button" onClick={() => move(-1)} aria-label="Previous photograph"><ArrowLeft aria-hidden="true" /></button><button type="button" onClick={() => move(1)} aria-label="Next photograph"><ArrowRight aria-hidden="true" /></button></div>
        </div>
      </dialog>
    </section>
  );
}
