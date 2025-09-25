"use client";
import { ReactLenis, useLenis } from "lenis/react";

export default function LenisSmoothScroll() {
  useLenis();

  return (
    <>
      <ReactLenis root />
    </>
  );
}
