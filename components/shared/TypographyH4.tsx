import { cn } from "@/lib/utils";

export function TypographyH4({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl text-brown-100 font-medium tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}
