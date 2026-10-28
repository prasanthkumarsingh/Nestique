"use client";

import { useState } from "react";
import Image from "next/image";
import { Armchair, House, Building2, DraftingCompass, PaintRoller, Trees, HardHat } from "lucide-react";
import styles from "./ServiceImage.module.css";

const icons = [Armchair, House, Building2, DraftingCompass, PaintRoller, Trees, HardHat];

export default function ServiceImage({ src, title, index, priority = false }: { src: string; title: string; index: number; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  const Icon = icons[index] ?? House;

  return (
    <>
      <div className={styles.fallback} role="img" aria-label={title + " illustration"}>
        <div className={styles.iconFrame}><Icon aria-hidden="true" strokeWidth={1.15} /></div>
      </div>
      {!failed && src && (
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className={styles.photo}
          unoptimized
          priority={priority}
          onError={() => setFailed(true)}
        />
      )}
    </>
  );
}
