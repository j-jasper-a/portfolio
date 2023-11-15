"use client";

import links from "@/data/links";
import ModeToggle from "../ModeToggle";
import Logo from "../common/Logo";
import NavigationMenuWrapper from "../modified/NavigationMenuWrapper";
import { useState, useEffect, useCallback } from "react";
import { MdMenu as MenuIcon, MdClose as CloseIcon } from "react-icons/md";
import Button, { buttonVariants } from "../common/Button";
import Link from "next/link";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const resizeHandler = () => setIsMobile(window.innerWidth < 640);

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const mobileMenuHandler = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const mobileMenuLinkHandler = useCallback(() => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <NavigationMenuWrapper.Root>
      <NavigationMenuWrapper.List main>
        <NavigationMenuWrapper.List>
          <NavigationMenuWrapper.Item>
            <Logo />
          </NavigationMenuWrapper.Item>
        </NavigationMenuWrapper.List>
        {!isMobile && (
          <NavigationMenuWrapper.List>
            {links.map(({ label, href }) => (
              <NavigationMenuWrapper.Item key={href}>
                <NavigationMenuWrapper.Link href={href}>
                  {label}
                </NavigationMenuWrapper.Link>
              </NavigationMenuWrapper.Item>
            ))}
          </NavigationMenuWrapper.List>
        )}
        <NavigationMenuWrapper.List>
          <NavigationMenuWrapper.Item>
            <ModeToggle icon />
          </NavigationMenuWrapper.Item>
          {isMobile && (
            <NavigationMenuWrapper.Item className="z-10">
              <Button label="Menu" onClick={mobileMenuHandler} variant={"icon"}>
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </Button>
            </NavigationMenuWrapper.Item>
          )}
        </NavigationMenuWrapper.List>
      </NavigationMenuWrapper.List>
      {isMobileMenuOpen && (
        <nav className="absolute left-0 top-0 h-screen w-screen bg-background dark:bg-background-dark">
          <ul className="flex h-full w-full flex-col items-center justify-center gap-md">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={mobileMenuLinkHandler}
                  className={buttonVariants({ variant: "mobileMenuLink" })}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </NavigationMenuWrapper.Root>
  );
};

export default Navigation;
