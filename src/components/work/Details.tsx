import { WorkType } from "@/data/work";
import Text from "../library/Text";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { MdOpenInNew as LinkIcon } from "react-icons/md";
import Link from "next/link";
import { buttonVariants } from "../library/Button";
import Heading from "../library/Heading";

type Props = {
  work: WorkType;
};

const Details = ({ work }: Props) => {
  const { websiteType, stack, name, href, description } = work;

  return (
    <div className="space-y-md">
      <div className="space-y-sm">
        <Heading as="h3" variant="small">
          {name}
        </Heading>
        <Text as="p" size="small" opacity="weak">
          {websiteType}
        </Text>
      </div>
      <Text as="p">{description}</Text>
      <div className="gap-sm flex flex-wrap">
        {stack.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            target="_blank"
            className={buttonVariants({ variant: "link" })}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="gap-sm flex">
        <Link
          href={href.code}
          target="_blank"
          className={buttonVariants({ variant: "outlined", width: "full" })}
        >
          <GithubIcon />
          View Code
        </Link>
        <Link
          href={href.live}
          target="_blank"
          className={buttonVariants({ variant: "contained", width: "full" })}
        >
          <LinkIcon />
          View Website
        </Link>
      </div>
    </div>
  );
};

export default Details;
