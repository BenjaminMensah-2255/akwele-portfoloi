export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}
