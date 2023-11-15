import Heading from "./Heading";

type Props = {
  id: string;
  children?: React.ReactNode;
};

const Section = ({ id, children }: Props) => {
  return (
    <section
      id={id}
      className="flex scroll-mt-[4rem] flex-col items-center gap-lg py-lg"
    >
      <div className="w-fit">
        <div className="h-1 w-full rounded bg-background-dark dark:bg-background" />
        <Heading as="h2">{id.charAt(0).toUpperCase() + id.slice(1)}</Heading>
      </div>
      {children}
    </section>
  );
};

export default Section;
