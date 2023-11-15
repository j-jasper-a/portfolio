import Link from "next/link";
import Text from "../common/Text";
import Graphic from "./Graphic";
import { buttonVariants } from "../common/Button";
import Heading from "../common/Heading";

const Hero = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-lg">
      <Graphic />
      <Heading as="h1">I write code for the future.</Heading>
      <div className="text-center">
        <Text as="p" weight="bold" size="large">
          Jihan Jasper Al-rashid
        </Text>
        <Text as="p" opacity="weak">
          Frontend Engineer — UI/UX Designer
        </Text>
      </div>
      <div className="flex w-full gap-sm sm:w-1/2">
        <Link
          href={"#work"}
          className={buttonVariants({ variant: "outlined", width: "full" })}
        >
          Learn More
        </Link>
        <Link
          href={"#contact"}
          className={buttonVariants({ variant: "contained", width: "full" })}
        >
          Talk To Me
        </Link>
      </div>
    </div>
  );
};

export default Hero;
