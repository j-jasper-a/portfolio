import { useEffect, useState } from "react";
import {
  MdSunny as LightModeIcon,
  MdNightlight as DarkModeIcon,
} from "react-icons/md";
import { useTheme } from "next-themes";
import Button from "@/components/library/Button";

type Props = {
  icon?: boolean;
};

const ModeToggle = ({ icon }: Props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    if (mounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <Button
      label={`${theme === "light" ? "Dark Mode" : "Light Mode"}`}
      onClick={toggleTheme}
      variant={"icon"}
    >
      {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      {!icon && (
        <span>{`${theme === "light" ? "Dark Mode" : "Light Mode"}`}</span>
      )}
    </Button>
  );
};

export default ModeToggle;
