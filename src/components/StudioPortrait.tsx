"use client";
import { useState } from "react";
import Image from "next/image";
export default function StudioPortrait({ src, name, initials }: { src: string; name: string; initials: string }) {
  const [failed, setFailed] = useState(false);
  return failed ? <span role="img" aria-label={name} style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "#e9dfd0", color: "#9c7956", fontFamily: "Georgia, serif", fontSize: "5rem" }}>{initials}</span> : <Image src={src} alt={name} fill sizes="(max-width: 760px) 100vw, 33vw" style={{ objectFit: "cover", objectPosition: "center 25%" }} unoptimized onError={() => setFailed(true)} />;
}
