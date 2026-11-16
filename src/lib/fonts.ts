import { Inter, Roboto_Condensed } from "next/font/google";

export const halfdayDisplayBold = Roboto_Condensed({
  variable: "--font-halfday-display-bold",
  subsets: ["latin"],
  weight: "700",
});

export const halfdayDisplayLight = Roboto_Condensed({
  variable: "--font-halfday-display-light",
  subsets: ["latin"],
  weight: "300",
  style: "italic",
});

export const halfdayBody = Inter({
  variable: "--font-halfday-body",
  subsets: ["latin"],
  weight: ["100", "500", "600", "700"],
  style: ["normal", "italic"],
});
