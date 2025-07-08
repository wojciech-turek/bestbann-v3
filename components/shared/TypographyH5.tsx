import { cn } from "@/lib/utils";

export function TypographyH5({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h5
      className={cn(
        "scroll-m-20 text-lg text-brown-100 font-medium tracking-tight",
        className
      )}
    >
      {children}
    </h5>
  );
}
