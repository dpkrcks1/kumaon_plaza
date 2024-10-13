"use client";
import { photos } from "@/public/assets/assets";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
import { useCallback, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import customFonts from "../font";

const slides = photos.map(({ src, width, height }) => ({
  src,
}));

const customAnimation = {
  fade: 300, // 300ms fade animation
  swipe: 400, // 400ms swipe animation
  navigation: 500, // 500ms navigation animation
  easing: {
    fade: "ease-in-out", // Smooth easing for fade
    swipe: "ease-in-out", // Smooth easing for swipe
    navigation: "ease-out", // Fast exit, smooth entry
  },
};

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const handleClick = (index) => {
    console.log("in handle click");
    console.log("index : ", index);
    setCurrentIndex(index);
  };
  const handleClose = () => setCurrentIndex(-1);
  return (
    <div className="pt-2 pb-8 mb-6">
      <div>
        <div className="text-center mt-8">
          <h1
            className={`${customFonts.work_sans.className} text-4xl font-bold text-gray-800 mb-4`}
          >
            Welcome to Our Gallery
          </h1>
          <div className="w-full max-w-none pb-4 px-4">
            <p
              className={`${customFonts.satisfy.className} text-2xl text-gray-600`}
            >
              Explore a collection of stunning visuals that capture the beauty
              of nature, architecture, and the world around us. Scroll through
              to discover breathtaking moments and creative perspectives.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6">
        <Gallery
          images={photos}
          onClick={handleClick}
          enableImageSelection={false}
          rowHeight={250}
          margin={5}
        />
        <Lightbox
          slides={slides}
          open={currentIndex >= 0}
          index={currentIndex}
          close={handleClose}
          imageFit="contain"
          animation={customAnimation}
        />
      </div>
    </div>
  );
}
