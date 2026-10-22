export function AuthorAvatar({
  name,
  size = "sm",
}: {
  name: string;
  size?: "sm" | "md";
}) {
  const letters = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  const sizeClass = size === "md" ? "size-10 text-sm" : "size-7 text-[0.65rem]";

  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-full border border-neutral-500 bg-neutral-900 font-medium tracking-wide text-white ${sizeClass}`}
    >
      {letters}
    </span>
  );
}
