import SanFrancisco from "next/font/local";
import ProximaNova from "next/font/local";

export const sanFrancisco = SanFrancisco({
  src: [
    {
      path: "./../../../../next/font/local/SanFrancisco/SFProText-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../../../next/font/local/SanFrancisco/SFProText-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-sanfrancisco",
});

export const proximaNova = ProximaNova({
  src: [
    {
      path: "./../../../../next/font/local/ProximaNova/proximanova_light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../../../next/font/local/ProximaNova/proximanova_bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-proximanova",
});
