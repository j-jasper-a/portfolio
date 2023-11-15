import { cva, VariantProps } from "cva";

type Props = {
  children?: React.ReactNode;
  className?: string;
  as: "p" | "span";
} & VariantProps<typeof textVariants>;

export const textVariants = cva("", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-2xl tracking-tight",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    opacity: {
      default: "",
      weak: "opacity-70",
    },
  },
  defaultVariants: {
    size: "medium",
    weight: "normal",
    opacity: "default",
  },
});

const Text = ({
  children,
  className,
  as,
  size,
  weight,
  opacity,
  ...props
}: Props) => {
  if (as === "p") {
    return (
      <p
        className={textVariants({ size, opacity, weight, className })}
        {...props}
      >
        {children}
      </p>
    );
  } else if (as === "span") {
    return (
      <span
        className={textVariants({ size, opacity, weight, className })}
        {...props}
      >
        {children}
      </span>
    );
  } else return null;
};

export default Text;
