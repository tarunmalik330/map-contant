import {
  VerificationSvg,
  DeepfakesSvg,
  UtilitiesSvg,
  GenerationSvg,
} from "./IconImg";
import boltshiftimg from "../assets/images/png/boltshiftimg.png";
import lightbox from "../assets/images/png/lightboximg.png";
import featherdevimg from "../assets/images/png/featherdevimg.png";
import spheruleimg from "../assets/images/png/spheruleimg.png";
import globalbankimg from "../assets/images/png/globalbank.png";

export const Navdata = [
  {
    link: "Home",
    Path: "#home",
  },
  {
    link: "Why us",
    path: "#whyus",
  },
  {
    link: "Services",
    path: "#services",
  },
  {
    link: "FAQ",
    path: "#faq",
  },
];

export const Carddata = [
  {
    svg: <DeepfakesSvg />,
    heading: "Content Deepfakes",
    content:
      "Seize control and elevate your business with our hyper-realistic AI content creation. Immerse in a blend of artistry and technology that promises unparalleled authenticity",
    width: "lg:w-[526px] md:w-[45%] w-full",
  },
  {
    svg: <VerificationSvg />,
    heading: "AI Verifications",
    content:
      "Streamline your workflow with our AI verification system that boasts a stellar 80% first-time success rate.",
    width: "lg:w-[416px] md:w-[45%] w-full",
  },
  {
    svg: <UtilitiesSvg />,
    heading: "Content Utilities",
    content:
      "Consolidate your resources with our comprehensive content utilities. Access everything you need from a single dashboard.",
    width: "lg:w-[416px] md:w-[45%] w-full",
  },
  {
    svg: <GenerationSvg />,
    heading: "Image Generation",
    content:
      "Transform productivity with our sophisticated automation tools. Let technology work tirelessly behind the scenes, so your creativity never has to pause.",
    width: "lg:w-[526px] md:w-[45%] w-full",
  },
];
export const slidedata = [
  {
    link: "https://paulmbingu.com/",
    Image: boltshiftimg,
  },
  {
    link: "https://getuikit.com/",
    Image: lightbox,
  },
  {
    link: "https://feathermc.com/",
    Image: featherdevimg,
  },
  {
    link: "https://spherule.org/",
    Image: spheruleimg,
  },
  {
    link: "https://www.globalbank.com.pa/en",
    Image: globalbankimg,
  },
  {
    link: "https://feathermc.com/",
    Image: featherdevimg,
  },
];
