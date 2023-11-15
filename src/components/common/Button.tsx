import { cva, VariantProps } from "cva";

type Props = {
  children?: React.ReactNode;
  onClick: () => void;
  label: string;
} & VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  "justify-center gap-sm items-center font-bold transition-all duration-300 hover:-translate-y-1 ",
  {
    variants: {
      variant: {
        contained:
          "bg-background-dark text-foreground-dark dark:bg-background dark:text-foreground",
        outlined: "",
        icon: "text-[2rem]",
        link: "",
        mobileMenuLink: "text-4xl",
      },
      width: {
        full: "w-full",
        fit: "w-fit",
      },
    },
    compoundVariants: [
      {
        variant: ["link", "mobileMenuLink"],
        className: "inline-flex",
      },
      {
        variant: ["contained", "outlined", "link"],
        className: "text-sm",
      },
      {
        variant: ["contained", "outlined"],
        className:
          "border-2 border-foreground rounded dark:border-foreground-dark px-md py-sm",
      },
      {
        variant: ["contained", "outlined", "icon"],
        className: "flex",
      },
    ],
    defaultVariants: {
      variant: "outlined",
      width: "fit",
    },
  },
);

const Button = ({ children, onClick, label, variant, width }: Props) => {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={buttonVariants({ variant, width })}
    >
      {children}
    </button>
  );
};

export default Button;
