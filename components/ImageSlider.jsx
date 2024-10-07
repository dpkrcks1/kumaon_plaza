"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import assets from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageSlider() {
  const images = [
    { src: assets.image1, alt: "Image 1", width: 1920, height: 980 },
    { src: assets.image2, alt: "Image 2", width: 1920, height: 980 },
    { src: assets.image3, alt: "Image 3", width: 1920, height: 980 },
    { src: assets.image4, alt: "Image 4", width: 1920, height: 980 },
    { src: assets.image5, alt: "Image 5", width: 1920, height: 980 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="relative h-64 sm:h-80 md:h-96 lg:h-[600px] w-full">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50"
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{ duration: 1 }}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            layout="fill"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-50 z-10" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
