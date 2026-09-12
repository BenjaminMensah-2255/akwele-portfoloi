"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 420, damping: 34, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 420, damping: 34, mass: 0.6 });
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const onMove = (event: MouseEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);

      const target = event.target as HTMLElement | null;
      const cursorTarget = target?.closest<HTMLElement>("[data-cursor]");
      const linkTarget = target?.closest<HTMLElement>("a, button");
      setLabel(cursorTarget?.dataset.cursor ?? "");
      setActive(Boolean(cursorTarget || linkTarget));
    };

    const onLeave = () => {
      rawX.set(-100);
      rawY.set(-100);
      setActive(false);
      setLabel("");
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [rawX, rawY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/70 text-[0.62rem] uppercase tracking-[0.16em] text-background mix-blend-difference md:flex"
      style={{ x, y }}
      animate={{
        width: label ? 64 : active ? 26 : 12,
        height: label ? 64 : active ? 26 : 12,
        backgroundColor: label ? "#111111" : "rgba(17, 17, 17, 0)",
      }}
      transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
    >
      {label}
    </motion.div>
  );
}
