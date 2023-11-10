"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Graphic = () => {
  return (
    <div className="relative flex max-w-[80vw] flex-col items-center justify-center sm:max-h-[35vh] sm:min-h-[15rem] sm:w-fit">
      <Image
        src="/assets/images/hero/graphic2.webp"
        alt="Hero Graphic"
        width={1024}
        height={1024}
        className="h-full w-full"
      />
      <motion.div
        animate={{ scaleY: [1, 0, 1, 0, 1] }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3,
        }}
        className="absolute left-[35%] top-[21.5%] h-[0.6rem] w-[0.225rem] rounded bg-background"
      />
      <motion.div
        animate={{ scaleY: [1, 0, 1, 0, 1] }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3,
        }}
        className="absolute left-[43%] top-[20.7%] h-[0.6rem] w-[0.225rem] rounded bg-background"
      />
    </div>
  );
};

export default Graphic;
