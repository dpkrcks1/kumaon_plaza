import { DatePicker } from "@/components/DatePicker";
import ImageSlider from "@/components/ImageSlider";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

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
    </>
  );
}
