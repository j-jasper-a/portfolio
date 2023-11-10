import Section from "../library/Section";
import Details from "./Details";
import Preview from "./Preview";
import work from "@/data/work";

const Work = () => {
  return (
    <Section id="work">
      <div className="space-y-lg">
        {work.map((item) => (
          <div
            key={item.name}
            className="gap-md sm:gap-lg grid grid-cols-1 items-center sm:grid-cols-2"
          >
            <Preview work={item} />
            <Details work={item} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Work;
