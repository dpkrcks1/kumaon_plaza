import {
  Libre_Baskerville,
  Permanent_Marker,
  DM_Serif_Display,
} from "next/font/google";
const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });
const marker = Permanent_Marker({ subsets: ["latin"], weight: ["400"] });
const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const customFonts = {
  libre,
  marker,
  dm_serif_display,
};

export default customFonts;
