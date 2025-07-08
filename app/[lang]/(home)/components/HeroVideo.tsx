"use client";

import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import { useRef, useState } from "react";

const HeroVideo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute w-full h-full inset-0 bg-orange-100/10 z-80 flex items-center justify-center"
            onClick={handleCollapse}
          />
        )}
      </AnimatePresence>

      <motion.div
        layout
        className={` ${
          isExpanded
            ? "w-[90vw] h-[80vh] z-80 absolute inset-0 m-auto flex items-center justify-center"
            : "w-[488px] h-[288px] cursor-pointer z-20"
        }`}
        onClick={!isExpanded ? handleExpand : undefined}
      >
        <video
          ref={videoRef}
          src="/videos/home/test-vid.mp4"
          poster="/videos/home/placeholders/test-vid-placeholder.jpg"
          loop
          muted
          playsInline
          autoPlay
          className={`rounded-2xl ${
            isExpanded ? "object-contain" : "object-cover"
          }`}
        />
        {isExpanded && (
          <button
            onClick={handleCollapse}
            className="absolute top-12 -right-4 bg-white rounded-full p-2 text-black shadow-lg hover:bg-gray-200 transition-colors z-50 cursor-pointer"
          >
            <XIcon className="w-6 h-6" />
          </button>
        )}
      </motion.div>
    </>
  );
};

export default HeroVideo;
