"use client";
import { photos } from "@/public/assets/assets";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useCallback, useState } from "react";
import customFonts from "../font";
export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewerOpen, setViewerOpen] = useState(false);

  const openLightBox = useCallback((event, { photo, index }) => {
    setCurrentIndex(index);
    setViewerOpen(true);
  }, []);
  const closeLightBox = () => {
    setCurrentIndex(0);
    setViewerOpen(false);
  };
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
        <Gallery photos={photos} onClick={openLightBox} />
        <ModalGateway>
          {isViewerOpen && (
            <Modal
              onClose={closeLightBox}
              className="flex items-center justify-center"
            >
              <div className="max-w-4xl w-full h-full">
                <Carousel
                  currentIndex={currentIndex}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcset,
                    caption: x.title,
                  }))}
                  className="h-full"
                />
              </div>
            </Modal>
          )}
        </ModalGateway>
      </div>
    </div>
  );
}
