import type { IconType } from "react-icons";

export const SelectedPage = {
  Home: "home",
  OurVision: "ourvision",
  Exhibitions: "exhibitions",
  ContactUs: "contactus",
} as const;

export type SelectedPage = (typeof SelectedPage)[keyof typeof SelectedPage];

export interface VisionType {
  icon: IconType;
  title: string;
  description: string;
}

export interface ExhibitionType {
  name: string;
  description?: string;
  image: string;
}
