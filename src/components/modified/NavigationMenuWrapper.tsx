import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useState, useCallback, useEffect } from "react";
import { buttonVariants } from "../library/Button";

const NavigationMenuWrapper = {
  Root: ({ children, ...props }: NavigationMenu.NavigationMenuProps) => {
    const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

    const scrollHandler = useCallback(() => {
      if (window.scrollY > 32) {
        setIsBackgroundVisible(true);
      } else {
        setIsBackgroundVisible(false);
      }
    }, []);

    useEffect(() => {
      window.addEventListener("scroll", scrollHandler);

      return () => window.removeEventListener("scroll", scrollHandler);
    }, [scrollHandler]);

    return (
      <NavigationMenu.Root
        className={`${
          isBackgroundVisible
            ? "bg-background shadow dark:bg-background-dark"
            : "sm:mt-md"
        }  px-md py-sm fixed left-0 top-0 z-10 w-full transition-all duration-300`}
        {...props}
      >
        {children}
      </NavigationMenu.Root>
    );
  },

  List: ({
    children,
    main = false,
    ...props
  }: { main?: boolean } & NavigationMenu.NavigationMenuListProps) => {
    return (
      <NavigationMenu.List
        className={`${
          main && "container mx-auto max-w-screen-xl"
        } sm:gap-xl gap-md flex items-center justify-between`}
        {...props}
      >
        {children}
      </NavigationMenu.List>
    );
  },

  Item: ({ children, ...props }: NavigationMenu.NavigationMenuItemProps) => {
    return <NavigationMenu.Item {...props}>{children}</NavigationMenu.Item>;
  },

  Link: ({ children, ...props }: NavigationMenu.NavigationMenuLinkProps) => {
    return (
      <NavigationMenu.Link
        className={buttonVariants({ variant: "link" })}
        {...props}
      >
        {children}
      </NavigationMenu.Link>
    );
  },
};

export default NavigationMenuWrapper;
