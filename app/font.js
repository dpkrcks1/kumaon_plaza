import {
  Libre_Baskerville,
  Permanent_Marker,
  DM_Serif_Display,
  Work_Sans,
  Roboto_Slab,
  Satisfy,
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
const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "200", "400", "300", "500", "600", "700", "800", "900"],
});
const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
});

const customFonts = {
  libre,
  marker,
  dm_serif_display,
  work_sans,
  roboto_slab,
  satisfy,
};

export default customFonts;
