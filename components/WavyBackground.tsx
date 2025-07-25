import { cn } from "@/lib/utils";
import { type SVGProps } from "react";

const WavyBackground = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1464"
      height="473"
      viewBox="0 0 1464 473"
      fill="none"
      className={cn(className)}
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <path
        d="M24.5815 174.982C-34.5093 103.308 20.0787 -3.03572 115.733 0.196211L732.903 21.0488L1342.18 0.0777103C1439.07 -3.25711 1497.49 101.448 1442.68 177.568C1415.76 214.952 1415.66 264.866 1443.03 301.952C1497.46 375.699 1439.29 476.818 1344.7 472.889L732.903 447.475L113.67 472.726C20.2293 476.536 -34.3645 373.754 24.2525 304.384C55.9671 266.851 55.8213 212.874 24.5815 174.982Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WavyBackground;
