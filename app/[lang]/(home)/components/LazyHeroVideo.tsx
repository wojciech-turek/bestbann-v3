"use client";

import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

const HeroVideo = dynamic(() => import("./HeroVideo"), {
  ssr: false,
  loading: () => (
    <div className="w-full sm:w-[488px] h-auto sm:h-[288px] bg-black/50 rounded-2xl flex items-center justify-center">
      <Loader2 className="w-10 h-10 animate-spin text-white" />
    </div>
  ),
});

const LazyHeroVideo = () => {
  return <HeroVideo />;
};

export default LazyHeroVideo;
