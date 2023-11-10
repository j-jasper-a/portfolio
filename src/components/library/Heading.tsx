import { cva, VariantProps } from "cva";

type Props = {
  children?: React.ReactNode;
} & (H1Props | H2Props | H3Props | H4Props);

type H1Props = {
  as: "h1";
};

type H2Props = {
  as: "h2";
} & VariantProps<typeof h2Variants>;

type H3Props = {
  as: "h3";
} & VariantProps<typeof h3Variants>;

type H4Props = {
  as: "h4";
} & VariantProps<typeof h4Variants>;

const h2Variants = cva("", {
  variants: {
    variant: {
      default: "font-bold",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const h3Variants = cva("", {
  variants: {
    variant: {
      small: "font-special text-2xl leading-[0.8] sm:text-4xl",
      medium: "font-special text-4xl leading-[0.8] sm:text-6xl",
      unstyled: "",
    },
  },
  defaultVariants: {
    variant: "medium",
  },
});

const h4Variants = cva("", {
  variants: {
    variant: {
      default: "font-special text-lg sm:text-2xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Heading = ({ children, as, ...props }: Props) => {
  if (as === "h1") {
    return (
      <h1
        className="text-center font-special text-6xl leading-[0.8] sm:text-8xl"
        {...props}
      >
        {children}
      </h1>
    );
  } else if (as === "h2") {
    const { variant } = props as H2Props;
    return (
      <h2 className={h2Variants({ variant })} {...props}>
        {children}
      </h2>
    );
  } else if (as === "h3") {
    const { variant } = props as H3Props;
    return (
      <h3 className={h3Variants({ variant })} {...props}>
        {children}
      </h3>
    );
  } else if (as === "h4") {
    const { variant } = props as H4Props;
    return (
      <h4 className={h4Variants({ variant })} {...props}>
        {children}
      </h4>
    );
  } else return null;
};

export default Heading;
