import {
  Libre_Baskerville,
  Permanent_Marker,
  DM_Serif_Display,
  Work_Sans,
} from "next/font/google";
const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });
const marker = Permanent_Marker({ subsets: ["latin"], weight: ["400"] });
const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});
const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
});

const customFonts = {
  libre,
  marker,
  dm_serif_display,
  work_sans,
};

export default customFonts;
