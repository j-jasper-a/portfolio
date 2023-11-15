import Text from "../common/Text";
import Link from "next/link";
import { buttonVariants } from "../common/Button";

const Footer = () => {
  return (
    <footer className="bg-background-dark px-md py-xl text-foreground-dark">
      <div className="container mx-auto max-w-screen-lg text-center">
        <Text as="p" size="small" opacity="weak">
          Designed and built by Jihan Jasper Al-rashid.
        </Text>
        <Text as="p" size="small" opacity="weak">
          Copyright © 2023. All rights reserved.
        </Text>
        <Text as="p" size="small" opacity="weak">
          The robot illustration in the hero section was created by{" "}
          <Link
            href="https://www.freepik.com/free-vector/set-robot-elements_11060091.htm#query=robot%20black%20and%20white&position=0&from_view=search&track=ais#position=0&query=robot%20black%20and%20white"
            target="_blank"
            className={buttonVariants({ variant: "link" })}
          >
            macrovector
          </Link>{" "}
          and modified and animated by{" "}
          <Link href="/" className={buttonVariants({ variant: "link" })}>
            Jihan Jasper Al-rashid
          </Link>
          {"."}
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
