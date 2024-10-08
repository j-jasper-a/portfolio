import expertise, { ExpertiseType } from "./expertise";

export type WorkType = {
  name: string;
  websiteType: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  href: {
    live: string;
    code: string;
  };
  stack: ExpertiseType[];
};

const work: WorkType[] = [
  {
    name: "Grey Stone International",
    websiteType: "Business Landing Page",
    description:
      "A balanced approach between corporate and friendly aesthetics. There's a form integrated to handle user inquiries. It's here to do a job, and it does its job well.",
    image: {
      src: "/assets/images/work/grey-stone-international/preview.webp",
      alt: "A preview of the website",
    },
    href: {
      live: "https://www.greystonedhaka.com/",
      code: "https://github.com/j-jasper-a/grey-stone-international",
    },
    stack: [
      expertise.typescript,
      expertise.nextJs,
      expertise.tailwindCss,
      expertise.framerMotion,
      expertise.formspree,
    ],
  },
  {
    name: "Ukiyo",
    websiteType: "Business Landing Page",
    description:
      "An elegant landing page for a fine dining restaurant. Persistent navigation will make browsing through the menu a breeze. If this restaurant actually existed, I don't think I'd be able to afford it.",
    image: {
      src: "/assets/images/work/ukiyo/preview.webp",
      alt: "A preview of the website",
    },
    href: {
      live: "https://ukiyo.jaspercode.com/",
      code: "https://github.com/j-jasper-a/ukiyo",
    },
    stack: [
      expertise.typescript,
      expertise.nextJs,
      expertise.tailwindCss,
      expertise.framerMotion,
    ],
  },
  {
    name: "Jihan Jasper Al Rashid",
    websiteType: "Portfolio",
    description:
      "A utilitarian but tasteful portfolio. I built my own design system on the foundation of Radix primitives. I mean, you're on this website right now. I hope you like what I've done with the place.",
    image: {
      src: "/assets/images/work/jihan-jasper-al-rashid/preview.webp",
      alt: "A preview of the website",
    },
    href: {
      live: "https://www.jaspercode.com/",
      code: "https://github.com/j-jasper-a/portfolio",
    },
    stack: [
      expertise.typescript,
      expertise.nextJs,
      expertise.tailwindCss,
      expertise.radixUi,
      expertise.framerMotion,
    ],
  },
];

export default work;
