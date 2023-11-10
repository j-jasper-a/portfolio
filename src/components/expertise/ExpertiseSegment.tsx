import { ExpertiseType } from "@/data/expertise";
import Text from "../library/Text";
import Link from "next/link";
import { buttonVariants } from "../library/Button";
import Heading from "../library/Heading";

type Props = {
  heading: string;
  children: React.ReactNode;
  expertiseArray: ExpertiseType[];
};

const ExpertiseSegment = ({ heading, children, expertiseArray }: Props) => {
  return (
    <div className="space-y-md mx-auto text-center sm:w-1/2">
      <Heading as="h3">{heading}</Heading>
      <Text as="p" size="large" weight="light" opacity="weak">
        {children}
      </Text>
      <div className="gap-sm flex flex-wrap justify-center">
        {expertiseArray.map(({ name, href }: ExpertiseType) => (
          <Link
            key={name}
            href={href}
            className={buttonVariants({ variant: "link" })}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSegment;
