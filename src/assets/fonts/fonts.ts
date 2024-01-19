import SanFrancisco from "next/font/local";

export const sanFrancisco = SanFrancisco({
  src: [
    {
      path: "./../../../next/font/local/SanFrancisco/SFProText-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../../next/font/local/SanFrancisco/SFProText-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-sanfrancisco",
});
