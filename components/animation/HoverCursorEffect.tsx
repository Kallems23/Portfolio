"use client";

import React, { useRef } from "react";

type HoverCursorEffectProps<T extends React.ElementType> = {
  as?: T; // polymorphic element type
  className?: string;
  children: React.ReactNode;
  emZIndex?: string;
} & React.ComponentPropsWithoutRef<T>;

export default function HoverCursorEffect<T extends React.ElementType = "div">({
  as,
  className,
  children,
  emZIndex = "-1",
  ...rest
}: HoverCursorEffectProps<T>) {
  const Component = as || "div"; // default fallback
  const containerRef = useRef<HTMLElement | null>(null);
  const emRef = useRef<HTMLElement | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !emRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    emRef.current.style.top = `${relY}px`;
    emRef.current.style.left = `${relX}px`;
  };

  return (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={containerRef as any}
      className={className}
      onMouseEnter={handleMove}
      onMouseLeave={handleMove}
      onMouseMove={handleMove}
      {...rest}
    >
      {children}
      <em ref={emRef} style={{ zIndex: emZIndex }} />
    </Component>
  );
}
