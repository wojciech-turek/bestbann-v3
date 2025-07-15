import { cn } from "@/lib/utils";

export function TypographyH2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-[34px] sm:text-[56px] font-medium leading-[34px] sm:leading-14 tracking-tight first:mt-0 text-brown-100 text-center",
        className
      )}
    >
      {children}
    </h2>
  );
}
