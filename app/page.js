"use client";
import { DatePicker } from "@/components/DatePicker";
import ImageSlider from "@/components/ImageSlider";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import customFonts from "./font";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import assets from "@/assets/assets";
import Image from "next/image";
export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [isInView1, setIsInView1] = useState(false);
  const [isInView2, setIsInView2] = useState(false);
  const [isInView3, setIsInView3] = useState(false);

  const checkInView = (ref, setInView) => {
    const rect = ref.current.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom >= 0;
    setInView(inView);
  };

  useEffect(() => {
    const handleScroll = () => {
      checkInView(ref1, setIsInView1);
      checkInView(ref2, setIsInView2);
      checkInView(ref3, setIsInView3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/** image slider component */}
      <ImageSlider />

      {/** date pickers for arrival and departure */}
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center  py-2 my-4 ">
        <DatePicker text="Arrival Date" />
        <DatePicker text="Departure Date" />
        <Button variant="outline" className="bg-customBg">
          Book Now{" "}
          <span className="ml-1">
            <FaArrowRight />
          </span>
        </Button>
      </div>

      {/** content for introduction */}
      <div className="flex flex-col py-2 my-4 items-center justify-center gap-3">
        <div
          className={`font-semibold text-sm sm:text-xl tracking-widest uppercase ${customFonts.work_sans.className}`}
        >
          Neque porro quisquam est qui dolorem ipsum quia dolor sit ame
        </div>
        <div className="flex flex-col items-center justify-center bg-[#FCF8F3] mx-10 my-4 w-[500px] sm:w-[800px] shadow-lg p-4">
          <div
            className={`text-sm sm:text-lg ${customFonts.work_sans.className}`}
          >
            This is demo text. content will be added
          </div>
          <p
            className={`p-4 text-sm sm:text-lg ${customFonts.work_sans.className}`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Button
            variant="outline"
            className={`${customFonts.work_sans.className}`}
          >
            Discover <FaArrowRight className="ml-2" />{" "}
          </Button>
        </div>
      </div>

      {/** random images */}
      <div className="my-10 flex flex-col">
        <div className="flex flex-row gap-8 mx-auto justify-center items-center w-full">
          <Image
            src={assets.image1}
            alt="Image 1"
            width={300}
            height={200}
            className="object-cover"
          />
          <Image
            src={assets.image2}
            alt="Image 2"
            width={500}
            height={600}
            className="object-cover"
          />
        </div>
        <div className="flex flex-row gap-8 mx-auto justify-center items-center w-full mt-4">
          <Image
            src={assets.image3}
            alt="Image 1"
            width={600}
            height={350}
            className="object-cover"
          />
          <Image
            src={assets.image4}
            alt="Image 2"
            width={300}
            height={500}
            className="object-cover"
          />
        </div>
      </div>

      {/** animated text on home page */}
      <div className="my-10">
        <motion.div
          ref={ref1}
          className={`flex ml-40 tracking-widest uppercase text-2xl w-full ${customFonts.work_sans.className}`}
          initial={{ x: "-100vw" }}
          animate={isInView1 ? { x: 0 } : {}}
          transition={{ type: "spring", stiffness: 50 }}
        >
          Experience old ways at
        </motion.div>

        <motion.div
          ref={ref2}
          className={`flex justify-center text-5xl my-5 uppercase tracking-widest ${customFonts.dm_serif_display.className}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView2 ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        >
          Kumaon plaza
        </motion.div>

        <motion.div
          ref={ref3}
          className={`flex justify-end tracking-widest pr-60 uppercase text-2xl w-full ${customFonts.work_sans.className}`}
          initial={{ x: "100vw" }}
          animate={isInView3 ? { x: 0 } : {}}
          transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
        >
          oldest in kashipur
        </motion.div>
      </div>
    </>
  );
}
