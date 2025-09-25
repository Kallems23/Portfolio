"use client";

import React, { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type VelocityMarqueeProps = {
  className?: string;
  duration?: number;
  direction?: "left" | "right";
  minScale?: number;
  maxScale?: number;
  pauseOnHover?: boolean;
  children: React.ReactNode;
};

export default function VelocityMarquee({
  className,
  duration = 20,
  direction = "left",
  minScale = 1,
  maxScale = 6,
  pauseOnHover = false,
  children,
}: VelocityMarqueeProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const dirDelta = useMemo(
    () => (direction === "left" ? "+=50%" : "-=50%"),
    [direction]
  );

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    // Save originals to restore
    const origWrapOverflow = wrap.style.overflow;
    const origTrackDisplay = track.style.display;
    const origTrackWhiteSpace = track.style.whiteSpace;
    const origTrackWillChange = track.style.willChange;

    // Pre-styles
    wrap.style.overflow = "hidden";
    track.style.display = "inline-flex";
    track.style.whiteSpace = "nowrap";
    track.style.willChange = "transform";

    // We'll keep refs so cleanup can kill explicitly
    let master: gsap.core.Timeline | null = null;
    let kicker: gsap.core.Tween | null = null;
    let st: ScrollTrigger | null = null;

    const ctx = gsap.context(() => {
      const clamp = gsap.utils.clamp(minScale, maxScale);

      const marquee = (el: HTMLElement, dur: number, delta: string) =>
        gsap.to(el, { x: delta, duration: dur, ease: "none", repeat: -1 });

      master = gsap.timeline({ defaults: { overwrite: "auto" } });
      master.add(marquee(track, duration, dirDelta), 0);

      kicker = gsap.to(master, { duration: 1.5, timeScale: 1, paused: true });

      st = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate(self) {
          const scale = clamp(Math.abs(self.getVelocity() / 200));
          master!.timeScale(scale);
          kicker!.invalidate().restart();
        },
      });

      if (pauseOnHover) {
        wrap.addEventListener("mouseenter", onEnter);
        wrap.addEventListener("mouseleave", onLeave);
      }

      function onEnter() {
        master?.pause();
      }
      function onLeave() {
        master?.play();
      }
    }, wrap);

    return () => {
      // Kill instances yourself (order: kill → revert → restore styles)
      st?.kill();
      kicker?.kill();
      master?.kill();

      ctx.revert();

      // Remove listeners if they were added
      if (pauseOnHover && wrap) {
        wrap.replaceWith(wrap.cloneNode(true) as HTMLElement); // quick way to drop listeners
        // OR: wrap.removeEventListener("mouseenter", onEnter) ... if you hoist handlers outside ctx
      }

      // Restore styles we set manually
      wrap.style.overflow = origWrapOverflow;
      track.style.display = origTrackDisplay;
      track.style.whiteSpace = origTrackWhiteSpace;
      track.style.willChange = origTrackWillChange;
    };
  }, [dirDelta, duration, minScale, maxScale, pauseOnHover]);

  return (
    <div ref={wrapRef} className={className}>
      <div ref={trackRef} className="items__container">
        {children}
        {children}
      </div>
    </div>
  );
}
