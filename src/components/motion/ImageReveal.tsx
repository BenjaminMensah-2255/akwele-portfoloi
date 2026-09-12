"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes: string;
};

export function ImageReveal({
  src,
  alt,
  className,
  imageClassName,
  priority,
  sizes,
}: ImageRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("image-reveal overflow-hidden", className)}
      initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
      whileInView={reduceMotion ? undefined : { clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.08 }}
        whileInView={reduceMotion ? undefined : { scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
        />
      </motion.div>
    </motion.div>
  );
}
