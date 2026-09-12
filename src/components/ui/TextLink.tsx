import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TextLinkProps = ComponentProps<typeof Link> & {
  external?: boolean;
};

export function TextLink({
  children,
  className,
  external,
  ...props
}: TextLinkProps) {
  return (
    <Link
      className={cn("text-link group", className)}
      target={external ? "_blank" : props.target}
      rel={external ? "noreferrer" : props.rel}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={1.5}
      />
    </Link>
  );
}
