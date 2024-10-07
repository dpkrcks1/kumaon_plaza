import { DatePicker } from "@/components/DatePicker";
import ImageSlider from "@/components/ImageSlider";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import customFonts from "./font";

export default function Home() {
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
          className={`font-semibold text-sm sm:text-xl ${customFonts.dm_serif_display.className}`}
        >
          Neque porro quisquam est qui dolorem ipsum quia dolor sit ame
        </div>
        <div className="flex flex-col items-center justify-center bg-[#ebebeb] mx-10 my-4 w-[500px] sm:w-[800px] shadow-lg rounded-lg p-4">
          <div className={`text-sm sm:text-lg ${customFonts.libre.className}`}>
            This is demo text. content will be added
          </div>
          <p
            className={`p-4 text-sm sm:text-lg ${customFonts.libre.className}`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Button variant="outline">
            Discover <FaArrowRight className="ml-2" />{" "}
          </Button>
        </div>
      </div>

      {/** carousel for images */}
    </>
  );
}
