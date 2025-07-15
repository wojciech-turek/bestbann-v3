import { cn } from "@/lib/utils";

export function TypographyH1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-4xl xl:text-5xl 2xl:text-6xl xl:leading-13 tracking-tight first:mt-0 text-brown-100 text-center font-medium  2xl:leading-[70px]",
        className
      )}
    >
      {children}
    </h2>
  );
}
