import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Rubik as Regular, Jockey_One as Special } from "next/font/google";

const fontRegular = Regular({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-regular",
});

const fontSpecial = Special({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-special",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jaspercode.com/"),
  title: "Jihan Jasper Al-rashid | Frontend Engineer & UI/UX Designer",
  description:
    "Jihan Jasper Al-rashid is a frontend engineer and UI/UX designer, specializing in building responsive, accessible, performant, and aesthetically pleasing web applications using React and Figma.",
  keywords: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Web",
    "Frontend",
    "Engineer",
    "Developer",
    "UI/UX",
    "Designer",
    "Jihan",
    "Jasper",
    "Al-rashid",
    "Dhaka",
    "Bangladesh",
    "Freelancer",
    "Portfolio",
  ],
  authors: [
    { name: "Jihan Jasper Al-rashid", url: "https://www.jaspercode.com/" },
  ],
  creator: "Jihan Jasper Al-rashid",
  publisher: "Jihan Jasper Al-rashid",
  openGraph: {
    title: "Jihan Jasper Al-rashid | Frontend Engineer & UI/UX Designer",
    description:
      "Jihan Jasper Al-rashid is a frontend engineer and UI/UX designer, specializing in building responsive, accessible, performant, and aesthetically pleasing web applications using React and Figma.",
  },
  twitter: {
    title: "Jihan Jasper Al-rashid | Frontend Engineer & UI/UX Designer",
    description:
      "Jihan Jasper Al-rashid is a frontend engineer and UI/UX designer, specializing in building responsive, accessible, performant, and aesthetically pleasing web applications using React and Figma.",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontRegular.variable} ${fontSpecial.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
