"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ImageIcon, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { EmptyState } from "@/components/portal/EmptyState";
import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/types/database";

const SWIPE_THRESHOLD = 50;

export function ImageGallery({
  images,
  signedUrls,
}: {
  images: ProjectImage[];
  signedUrls: Record<string, string>;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);

  if (images.length === 0) {
    return <EmptyState icon={ImageIcon} title="No images uploaded yet" description="Check back soon." />;
  }

  const categories = Array.from(new Set(images.map((img) => img.category || "General")));
  const flatOrder = categories.flatMap((cat) => images.filter((img) => (img.category || "General") === cat));

  function openAt(image: ProjectImage) {
    setLoaded(false);
    setZoomed(false);
    setOpenIndex(flatOrder.findIndex((img) => img.id === image.id));
  }

  function step(delta: number) {
    setLoaded(false);
    setZoomed(false);
    setOpenIndex((prev) => {
      if (prev === null) return prev;
      return (prev + delta + flatOrder.length) % flatOrder.length;
    });
  }

  const activeImage = openIndex !== null ? flatOrder[openIndex] : null;

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD && flatOrder.length > 1) {
      step(delta > 0 ? -1 : 1);
    }
    touchStartX.current = null;
  }

  const label = activeImage
    ? [activeImage.category, activeImage.caption].filter(Boolean).join(" — ")
    : null;

  return (
    <div className="space-y-10">
      {categories.map((category) => {
        const items = images.filter((img) => (img.category || "General") === category);
        return (
          <div key={category}>
            <h3 className="mb-4 text-base font-semibold text-[var(--text)]">{category}</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {items.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => openAt(image)}
                  className="relative aspect-square overflow-hidden rounded-xl border border-black/[0.06] bg-muted shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                >
                  {signedUrls[image.storage_path] && (
                    <Image
                      src={signedUrls[image.storage_path]}
                      alt={image.caption || category}
                      fill
                      sizes="200px"
                      className="object-cover transition-transform hover:scale-105"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        );
      })}

      <Dialog open={activeImage !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent
          showCloseButton={false}
          overlayClassName="bg-black"
          className="top-1/2 left-1/2 flex h-screen w-screen max-w-none -translate-x-1/2 -translate-y-1/2 gap-0 rounded-none border-none bg-transparent p-0 shadow-none sm:h-[90vh] sm:w-[90vw] sm:max-w-[90vw] sm:rounded-2xl"
        >
          <DialogTitle className="sr-only">{label || "Project image"}</DialogTitle>
          {activeImage && (
            <div
              className="relative flex h-full w-full items-center justify-center overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onClick={(e) => {
                if (e.target === e.currentTarget) setOpenIndex(null);
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                className="absolute top-4 right-4 z-20 flex size-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 sm:size-12"
                aria-label="Close"
              >
                <X className="size-5 sm:size-6" />
              </button>

              {flatOrder.length > 1 && (
                <div className="absolute top-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white sm:text-sm">
                  {openIndex! + 1} / {flatOrder.length}
                </div>
              )}

              {!loaded && (
                <Loader2 className="absolute z-10 size-8 animate-spin text-white/70" />
              )}

              <div
                className={cn(
                  "relative h-full w-full transition-transform duration-200",
                  zoomed ? "cursor-zoom-out scale-150" : "cursor-zoom-in"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomed((z) => !z);
                }}
              >
                {signedUrls[activeImage.storage_path] && (
                  <Image
                    key={activeImage.id}
                    src={signedUrls[activeImage.storage_path]}
                    alt={label || "Project image"}
                    fill
                    sizes="90vw"
                    priority
                    className={cn("object-contain transition-opacity duration-200", loaded ? "opacity-100" : "opacity-0")}
                    onLoad={() => setLoaded(true)}
                  />
                )}
              </div>

              {/* Same fill/sizes as the visible image so the browser caches the identical
                  optimized URL ahead of time — arrow/swipe navigation then loads instantly. */}
              {flatOrder.length > 1 &&
                Array.from(
                  new Set(
                    [openIndex! - 1, openIndex! + 1].map((rawIdx) => (rawIdx + flatOrder.length) % flatOrder.length)
                  )
                )
                  .filter((idx) => idx !== openIndex)
                  .map((idx) => {
                    const img = flatOrder[idx];
                    const url = signedUrls[img.storage_path];
                    if (!url) return null;
                    return (
                      <Image
                        key={`preload-${img.id}`}
                        src={url}
                        alt=""
                        fill
                        sizes="90vw"
                        priority
                        className="pointer-events-none absolute inset-0 opacity-0"
                        aria-hidden
                      />
                    );
                  })}

              {flatOrder.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      step(-1);
                    }}
                    className="absolute left-3 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 sm:left-6 sm:size-14"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="size-6 sm:size-7" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      step(1);
                    }}
                    className="absolute right-3 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 sm:right-6 sm:size-14"
                    aria-label="Next image"
                  >
                    <ChevronRight className="size-6 sm:size-7" />
                  </button>
                </>
              )}

              {label && (
                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/70 to-transparent px-6 pt-10 pb-5 text-center">
                  <p className="text-sm font-medium text-white sm:text-base">{label}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
