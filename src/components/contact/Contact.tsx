import { socials } from "@/data/socials";
import Section from "../common/Section";
import { MdPhone as PhoneIcon, MdEmail as EmailIcon } from "react-icons/md";
import {
  TbBrandGithub as GithubIcon,
  TbBrandLinkedin as LinkedinIcon,
} from "react-icons/tb";
import Link from "next/link";
import { buttonVariants } from "../common/Button";
import Heading from "../common/Heading";
import Text from "../common/Text";

const Contact = () => {
  return (
    <Section id="contact">
      <div className="space-y-lg">
        <div className="text-center">
          <Heading as="h3">How may I help you?</Heading>
        </div>
        <div className="grid grid-cols-2 gap-sm sm:grid-cols-4">
          <Link
            href={socials.github.info}
            target="_blank"
            className={buttonVariants({ variant: "outlined", width: "full" })}
          >
            <GithubIcon />
            {socials.github.name}
          </Link>
          <Link
            href={socials.linkedin.info}
            target="_blank"
            className={buttonVariants({ variant: "outlined", width: "full" })}
          >
            <LinkedinIcon />
            {socials.linkedin.name}
          </Link>
          <Link
            href={`mailto:${socials.email.info}`}
            target="_blank"
            className={buttonVariants({ variant: "outlined", width: "full" })}
          >
            <EmailIcon />
            {socials.email.info}
          </Link>
          <Link
            href={`tel:${socials.phone.info}`}
            target="_blank"
            className={buttonVariants({ variant: "outlined", width: "full" })}
          >
            <PhoneIcon />
            {socials.phone.info}
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
