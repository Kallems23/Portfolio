"use client";
import React, { useEffect, useState } from "react";
import HoverCursorEffect from "../animation/HoverCursorEffect";

export default function ThemeSwitcherButton({
  parentClass = "color loading__fade",
  hasBuyBtn = false,
}) {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [colorScheme, setColorScheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (
        (localStorage.getItem("color-scheme") as "light" | "dark") || "light"
      );
    }
    return "light";
  });
  useEffect(() => {
    setShowSwitcher(true);
  }, []);

  useEffect(() => {
    // Only set if not already set to the same value
    const currentScheme = document.documentElement.getAttribute("color-scheme");
    if (currentScheme !== colorScheme) {
      document.documentElement.setAttribute("color-scheme", colorScheme);
    }
    if (localStorage.getItem("color-scheme") !== colorScheme) {
      localStorage.setItem("color-scheme", colorScheme);
    }
  }, [colorScheme]);

  const handleColorSwitch = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div
      className={parentClass + " " + "fade-in"}
      data-duration="1.2"
      data-delay="300"
    >
      {showSwitcher ? (
        <button
          id="color-switcher"
          className={
            "color-switcher d-flex align-items-center justify-content-center"
          }
          type="button"
          role="switch"
          aria-label="light/dark mode"
          aria-checked={colorScheme === "dark"}
          onClick={handleColorSwitch}
        >
          <em />
          <i
            className={
              colorScheme === "dark"
                ? "ph-bold ph-sun"
                : "ph-bold ph-moon-stars text-white"
            }
          />
        </button>
      ) : (
        ""
      )}
      {hasBuyBtn ? (
        <HoverCursorEffect
          as="a"
          className="btn btn-default-small hover-default-small"
          href="https://themeforest.net/user/ib-themes/portfolio"
          target="_blank"
          emZIndex="0"
        >
          <span className="btn-caption" style={{ zIndex: 1 }}>
            Buy now
          </span>
          <i className="ph ph-shopping-bag" style={{ zIndex: 1 }} />
        </HoverCursorEffect>
      ) : (
        ""
      )}
    </div>
  );
}
