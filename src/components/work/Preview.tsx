"use client";

import { WorkType } from "@/data/work";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  work: WorkType;
};

const Preview = ({ work }: Props) => {
  return (
    <Link
      href={work.href.live}
      target="_blank"
      className="aspect-square overflow-hidden rounded border-2"
    >
      <motion.div
        animate={{ y: ["0%", "-65%", "0%"] }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <Image
          src={work.image.src}
          alt={work.image.alt}
          width={1280}
          height={5172}
        />
      </motion.div>
    </Link>
  );
};

export default Preview;
