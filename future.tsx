import { cva, VariantProps } from "cva";

type Props = {
  children?: React.ReactNode;
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3";
  minor?: boolean;
} & VariantProps<
  | typeof expBodyTextVariants
  | typeof expHeadingVariants
  | typeof expH3TextVariants
>;

// For future.

const expBodyTextVariants = cva({
  variants: {
    variant: {
      small: "text-small",
      medium: "text-medium",
      large: "text-large",
      sectionHeading: "text-section-heading text-center",
      specialHeading: "text-special font-special",
    },
  },
  defaultVariants: {
    variant: "small",
  },
});

const expHeadingVariants = cva({
  variants: {
    variant: {
      h1: "text-h1-mobile sm:text-h1 text-center font-special",
      h2: "text-h2 font-bold text-center",
    },
  },
  defaultVariants: {
    variant: "h2",
  },
});

const expH3TextVariants = cva({
  variants: {
    variant: {
      medium: "text-h3 font-special",
      large: "text-h3-large font-special",
    },
  },
  defaultVariants: {
    variant: "medium",
  },
});

const Text = ({ children, as: As, minor, ...props }: Props) => {
  if (As === "p" || As === "span" || As === "div")
    return <As className={expBodyTextVariants()}>{children}</As>;
  else if (As === "h1" || As === "h2") return <As>{children}</As>;
  else if (As === "h3") return <As>{children}</As>;
  else return null;
};
