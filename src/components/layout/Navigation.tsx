"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const prefix = pathname === "/" ? "" : "/";

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-sm"
      initial={reduceMotion ? false : { opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      <nav
        className="mx-auto flex h-16 max-w-[1800px] items-center justify-between px-4 sm:px-6 lg:px-10"
        aria-label="Primary navigation"
      >
        <Link href="/" className="nav-wordmark" aria-label={`${profile.name} home`}>
          {profile.name}
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          <div className="flex items-center gap-2 text-xs text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.availability}
          </div>
          <div className="flex items-center gap-7 text-sm">
            {links.map((link) => (
            <Link key={link.href} href={`${prefix}${link.href}`} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center md:hidden"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </nav>

      <motion.div
        className="overflow-hidden border-t border-border bg-background md:hidden"
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="space-y-1 px-4 py-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={`${prefix}${link.href}`}
              className="block border-b border-border py-4 font-display text-4xl leading-none"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <p className="pt-5 text-sm text-secondary">{profile.availability}</p>
        </div>
      </motion.div>
    </motion.header>
  );
}
