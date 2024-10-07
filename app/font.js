import { Libre_Baskerville, Permanent_Marker } from "next/font/google";
const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });
const marker = Permanent_Marker({ subsets: ["latin"], weight: ["400"] });

const customFonts = {
  libre,
  marker,
};

export default customFonts;
