export type ExpertiseType = {
  name: string;
  logo: string;
  href: string;
};

type Expertise = {
  [key: string]: ExpertiseType;
};

const expertise: Expertise = {
  html: {
    name: "HTML",
    logo: "/assets/logos/html.svg",
    href: "https://html.spec.whatwg.org/",
  },
  css: {
    name: "CSS",
    logo: "/assets/logos/css.svg",
    href: "https://www.w3.org/TR/CSS/#css",
  },
  javascript: {
    name: "JavaScript",
    logo: "/assets/logos/javascript.svg",
    href: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
  },
  typescript: {
    name: "TypeScript",
    logo: "/assets/logos/typescript.svg",
    href: "https://www.typescriptlang.org/",
  },
  react: {
    name: "React",
    logo: "/assets/logos/react.svg",
    href: "https://react.dev/",
  },
  nextJs: {
    name: "Next.js",
    logo: "/assets/logos/next-js.svg",
    href: "https://nextjs.org/",
  },
  tailwindCss: {
    name: "Tailwind CSS",
    logo: "/assets/logos/tailwind-css.svg",
    href: "https://tailwindcss.com/",
  },
  radixUi: {
    name: "Radix UI",
    logo: "/assets/logos/radix-ui.svg",
    href: "https://www.radix-ui.com/",
  },
  framerMotion: {
    name: "Framer Motion",
    logo: "/assets/logos/framer-motion.svg",
    href: "https://www.framer.com/motion/",
  },
  formspree: {
    name: "Formspree",
    logo: "/assets/logos/formspree.svg",
    href: "https://formspree.io/",
  },
  git: {
    name: "Git",
    logo: "/assets/logos/git.svg",
    href: "https://git-scm.com/",
  },
  vite: {
    name: "Vite",
    logo: "/assets/logos/vite.svg",
    href: "https://vitejs.dev/",
  },
  linux: {
    name: "Linux",
    logo: "/assets/logos/linux.svg",
    href: "https://www.linux.org/",
  },
  figma: {
    name: "Figma",
    logo: "/assets/logos/figma.svg",
    href: "https://www.figma.com/",
  },
  adobeXd: {
    name: "Adobe XD",
    logo: "/assets/logos/adobe-xd.svg",
    href: "https://www.adobe.com/products/xd.html",
  },
  adobePhotoshop: {
    name: "Adobe Photoshop",
    logo: "/assets/logos/adobe-photoshop.svg",
    href: "https://www.adobe.com/products/photoshop.html",
  },
  adobePremierePro: {
    name: "Adobe Premiere Pro",
    logo: "/assets/logos/adobe-premiere-pro.svg",
    href: "https://www.adobe.com/products/premiere.html",
  },
  studioOne: {
    name: "Studio One",
    logo: "/assets/logos/studio-one.svg",
    href: "https://www.studioone.com/",
  },
};

export default expertise;
