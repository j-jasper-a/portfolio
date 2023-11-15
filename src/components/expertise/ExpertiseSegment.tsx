import { ExpertiseType } from "@/data/expertise";
import Text from "../common/Text";
import Link from "next/link";
import { buttonVariants } from "../common/Button";
import Heading from "../common/Heading";
import IconSVG from "../common/IconSVG";

type Props = {
  heading: string;
  children: React.ReactNode;
  expertiseArray: ExpertiseType[];
};

const ExpertiseSegment = ({ heading, children, expertiseArray }: Props) => {
  return (
    <div className="mx-auto space-y-md text-center sm:w-1/2">
      <Heading as="h3">{heading}</Heading>
      <Text as="p" size="large" weight="light" opacity="weak">
        {children}
      </Text>
      <div className="flex flex-wrap justify-center gap-md">
        {expertiseArray.map(({ name, href, logo }: ExpertiseType) => (
          <Link
            key={name}
            href={href}
            className={buttonVariants({ variant: "link" })}
          >
            <IconSVG src={logo} />
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSegment;
