import {
  VerificationSvg,
  DeepfakesSvg,
  UtilitiesSvg,
  GenerationSvg,
} from "./IconImg";

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
    width: "w-[526px]",
  },
  {
    svg: <VerificationSvg />,
    heading: "AI Verifications",
    content:
      "Streamline your workflow with our AI verification system that boasts a stellar 80% first-time success rate.",
    width: "w-[416px]",
  },
  {
    svg: <UtilitiesSvg />,
    heading: "Content Utilities",
    content:
      "Consolidate your resources with our comprehensive content utilities. Access everything you need from a single dashboard.",
    width: "w-[416px]",
  },
  {
    svg: <GenerationSvg />,
    heading: "Image Generation",
    content: 
      "Transform productivity with our sophisticated automation tools. Let technology work tirelessly behind the scenes, so your creativity never has to pause.",
    width: "w-[526px]",
  },
];
