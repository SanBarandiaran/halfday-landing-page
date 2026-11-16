"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export function ShakeOnce({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShaking(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`inline-flex motion-reduce:animate-none ${shaking ? "animate-[shake_0.5s_ease-in-out]" : ""} ${className}`}
    >
      {children}
    </span>
  );
}
