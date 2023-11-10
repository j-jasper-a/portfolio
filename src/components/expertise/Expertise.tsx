import expertise from "@/data/expertise";
import Section from "../library/Section";
import ExpertiseSegment from "./ExpertiseSegment";

const myDevelopmentArray = [
  expertise.html,
  expertise.css,
  expertise.javascript,
  expertise.react,
  expertise.typescript,
  expertise.nextJs,
  expertise.tailwindCss,
  expertise.radixUi,
  expertise.framerMotion,
  expertise.formspree,
  expertise.git,
  expertise.vite,
  expertise.linux,
];

const myDesignArray = [expertise.figma, expertise.adobeXd];

const myEditingArray = [
  expertise.adobePhotoshop,
  expertise.adobePremierePro,
  expertise.studioOne,
];

const Expertise = () => {
  return (
    <Section id="expertise">
      <div className="space-y-lg">
        <ExpertiseSegment
          heading="Developing interfaces"
          expertiseArray={myDevelopmentArray}
        >
          I leverage React and its ecosystem to build accessible, responsive,
          scalable, and beautiful web applications.
        </ExpertiseSegment>
        <ExpertiseSegment
          heading="Designing experiences"
          expertiseArray={myDesignArray}
        >
          Keeping up with the Joneses is actually a good thing when it comes to
          UI/UX design trends.
        </ExpertiseSegment>
        <ExpertiseSegment
          heading="Mastering expressions"
          expertiseArray={myEditingArray}
        >
          A decade of professional experience with audio. Working proficiency
          and excellent taste in image, video, and copywriting.
        </ExpertiseSegment>
      </div>
    </Section>
  );
};

export default Expertise;
