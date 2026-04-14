import { cn } from "@/lib/utils";
import Image from "next/image";

const BestQualitySeparator = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "my-8 sm:my-16 flex items-center justify-center gap-4",
        className,
      )}
    >
      <div className="h-px flex-grow bg-brown-10"></div>
      <Image
        src="/deco/best-quality.png"
        alt="Best Quality"
        width={150}
        height={150}
      />
      <div className="h-px flex-grow bg-brown-10"></div>
    </div>
  );
};

export default BestQualitySeparator;
