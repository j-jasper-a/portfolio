"use client";

import experience from "@/data/experience";
import Text from "@/components/library/Text";
import TabsWrapper from "@/components/modified/TabsWrapper";
import {
  MdChevronRight as ListIcon,
  MdLocationPin as LocationIcon,
} from "react-icons/md";
import { BsFilePdf as PDFIcon } from "react-icons/bs";
import Section from "../library/Section";
import Heading from "../library/Heading";
import Link from "next/link";
import { buttonVariants } from "../library/Button";

const Experience = () => {
  return (
    <Section id="experience">
      <div className="space-y-lg w-full">
        <TabsWrapper.Root defaultValue={experience[0].company}>
          <TabsWrapper.List>
            {experience.map((exp) => (
              <TabsWrapper.Trigger key={exp.company} value={exp.company}>
                {exp.company}
              </TabsWrapper.Trigger>
            ))}
          </TabsWrapper.List>
          {experience.map((exp) => (
            <TabsWrapper.Content
              key={exp.company}
              value={exp.company}
              tabIndex={-1}
            >
              {exp.position.map((position) => (
                <div key={position.title} className="space-y-md">
                  <div>
                    <div className="flex items-center justify-between">
                      <Heading as="h4">{position.title}</Heading>
                      <Text as="span" size="small">
                        {position.employment}
                      </Text>
                    </div>
                    <div className="flex items-center justify-between">
                      <Text as="span" size="small" opacity="weak">
                        {`${position.startDate} — ${position.endDate}`}
                      </Text>
                      <Text
                        as="p"
                        size="small"
                        opacity="weak"
                        className="gap-sm flex items-center"
                      >
                        <span>
                          <LocationIcon />
                        </span>
                        <span>{position.location}</span>
                      </Text>
                    </div>
                  </div>
                  <div>
                    {position.summary.map((point) => (
                      <Text
                        key={point}
                        as="p"
                        size="small"
                        className="gap-sm flex items-center"
                      >
                        <span>
                          <ListIcon />
                        </span>
                        <span>{point}</span>
                      </Text>
                    ))}
                  </div>
                </div>
              ))}
            </TabsWrapper.Content>
          ))}
        </TabsWrapper.Root>
      </div>
      <Link
        href="/assets/jihan-jasper-al-rashid_resume.pdf"
        target="_blank"
        className={buttonVariants({ variant: "outlined" })}
      >
        <PDFIcon />
        Download Résumé
      </Link>
    </Section>
  );
};

export default Experience;
