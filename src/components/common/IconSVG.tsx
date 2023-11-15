import Image from "next/image";

type Props = {
  src: string;
};

const IconSVG = ({ src }: Props) => {
  return (
    <Image
      src={src}
      alt="Icon"
      width={32}
      height={32}
      className="h-[1.5em] w-[1.5em] dark:invert"
    />
  );
};

export default IconSVG;
