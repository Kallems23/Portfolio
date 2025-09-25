"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function InitScroll({
  revealSelector = ".animate-in-up",
  revealSelectorHero = ".hero-animate-in-up",

  promoSelector = ".promo-image",
  headerOffset = 0, // sticky header height if any (px)
}: {
  revealSelector?: string;
  revealSelectorHero?: string;

  promoSelector?: string;
  headerOffset?: number;
}) {
  useEffect(() => {
    let revealTriggers: ScrollTrigger[] = [];
    let revealTriggersHero: ScrollTrigger[] = [];
    let promoTriggers: ScrollTrigger[] = [];

    const killAll = () => {
      revealTriggers.forEach((t) => t.kill());
      revealTriggers = [];
      revealTriggersHero.forEach((t) => t.kill());
      revealTriggersHero = [];
      promoTriggers.forEach((t) => t.kill());
      promoTriggers = [];
    };

    const initReveals = () => {
      // rebuild: kill previous before creating new ones
      revealTriggers.forEach((t) => t.kill());
      revealTriggers = [];

      gsap.utils.toArray<HTMLElement>(revealSelector).forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");

        const tween = gsap.fromTo(
          el,
          { opacity: 0, y: 50, ease: "sine" },
          {
            opacity: 1,
            y: 0,
            delay: delay / 1000,
            overwrite: "auto",
            immediateRender: false,
            scrollTrigger: {
              trigger: el,
              once: true,
              // fire when element enters viewport; adjust for sticky header if needed
              start: `top+=${headerOffset} 100%`,
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
              // markers: true,
            },
          }
        );

        if (tween.scrollTrigger) revealTriggers.push(tween.scrollTrigger);
      });
    };
    const initRevealsHero = () => {
      // rebuild: kill previous before creating new ones
      revealTriggersHero.forEach((t) => t.kill());
      revealTriggersHero = [];

      gsap.utils.toArray<HTMLElement>(revealSelectorHero).forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        const duration = parseFloat(el.dataset.duration || "0.5");

        const tween = gsap.fromTo(
          el,
          { opacity: 0, y: 50, ease: "sine" },
          {
            opacity: 1,
            y: 0,
            delay: delay / 1000,
            overwrite: "auto",
            immediateRender: false,
            duration: duration,
            scrollTrigger: {
              trigger: el,
              once: true,
              // fire when element enters viewport; adjust for sticky header if needed
              start: `top+=${headerOffset} 100%`,
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
              // markers: true,
            },
          }
        );

        if (tween.scrollTrigger) revealTriggersHero.push(tween.scrollTrigger);
      });
    };

    const initPromos = () => {
      // optional: make promo images reveal on scroll too
      promoTriggers.forEach((t) => t.kill());
      promoTriggers = [];

      gsap.utils.toArray<HTMLElement>(promoSelector).forEach((el) => {
        const tween = gsap.fromTo(
          el,
          { x: 30, opacity: 0, ease: "sine", duration: 1 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "sine",
            scrollTrigger: {
              trigger: el,
              start: `top+=${headerOffset} 100%`,
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
              // markers: true,
            },
          }
        );
        if (tween.scrollTrigger) promoTriggers.push(tween.scrollTrigger);
      });
    };

    // 1) Initial builds (after current layout)
    initReveals();
    initRevealsHero();
    initPromos();

    // 2) Body fade-in (on load rather than on scroll)
    gsap.utils.toArray<HTMLElement>(".fade-in").forEach((el) => {
      const delay = parseFloat(el.dataset.delay || "0");
      const duration = parseFloat(el.dataset.duration || "0.5");

      gsap.fromTo(
        el,
        { opacity: 0, ease: "sine" },
        { opacity: 1, ease: "sine", delay: delay / 1000, duration }
      );
    });

    // 3) Rebuild reveals/promos whenever ScrollTrigger refreshes
    const onRefresh = () => {
      initReveals();
      initPromos();
    };
    ScrollTrigger.addEventListener("refresh", onRefresh);

    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);

      killAll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
