"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedMetricProps = {
  value: number;
  suffix: string;
  label: string;
  className?: string;
};

export function AnimatedMetric({
  value,
  suffix,
  label,
  className,
}: AnimatedMetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    let frame = 0;
    const frames = 58;
    const start = performance.now();

    const tick = (time: number) => {
      frame = Math.min(1, (time - start) / (frames * 16));
      const eased = 1 - Math.pow(1 - frame, 3);
      setDisplay(value * eased);

      if (frame < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, reduceMotion, value]);

  const visibleValue = reduceMotion ? value : display;
  const formatted =
    value % 1 === 0
      ? Math.round(visibleValue).toString()
      : visibleValue.toFixed(1);

  return (
    <div ref={ref} className={cn("metric", className)}>
      <p className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-none">
        {formatted}
        {suffix}
      </p>
      <p className="mt-4 max-w-36 text-sm uppercase tracking-[0.16em] text-secondary">
        {label}
      </p>
    </div>
  );
}
