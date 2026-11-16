"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealDirection = "up" | "left" | "right";

const hiddenTransform: Record<RevealDirection, string> = {
  up: "translate-y-4",
  left: "-translate-x-12",
  right: "translate-x-12",
};

const visibleTransform: Record<RevealDirection, string> = {
  up: "translate-y-0",
  left: "translate-x-0",
  right: "translate-x-0",
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? `${visibleTransform[direction]} opacity-100` : `${hiddenTransform[direction]} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
}
