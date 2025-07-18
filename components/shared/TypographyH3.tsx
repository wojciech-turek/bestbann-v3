import { cn } from "@/lib/utils";

export function TypographyH3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-medium tracking-tight text-brown-100",
        className
      )}
    >
      {children}
    </h3>
  );
}
