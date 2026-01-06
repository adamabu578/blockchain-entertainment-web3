// fonts.ts
import localFont from "next/font/local";

export const polySans = localFont({
  src: [
    {
      path: "./fonts/polysans/PolySansTrial-MedianWide.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/polysans/PolySansTrial-MedianWide.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-polysans",
  display: "swap",
});
