"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  duration = "1s",
  as = "div",
  style,
  className,
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  duration?: string;
  as?: "div" | "li";
  style?: CSSProperties;
  className?: string;
  [dataAttr: `data-${string}`]: unknown;
}) {
  const ref = useRef<HTMLDivElement | HTMLLIElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => setRevealed(true), delay);
            io.unobserve(el);
            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const revealStyle: CSSProperties = {
    opacity: revealed ? 1 : 0,
    transform: revealed ? "none" : "translateY(28px)",
    transition: `opacity ${duration} cubic-bezier(.16,1,.3,1),transform ${duration} cubic-bezier(.16,1,.3,1)`,
    ...style,
  };

  const Tag = as as "div";
  return (
    <Tag ref={ref as never} style={revealStyle} className={className} {...rest}>
      {children}
    </Tag>
  );
}
