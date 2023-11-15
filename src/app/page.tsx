import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Expertise from "@/components/expertise/Expertise";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navigation from "@/components/navigation/Navigation";
import Work from "@/components/work/Work";

const Home = () => {
  return (
    <>
      <Navigation />
      <main className="container mx-auto max-w-screen-lg px-md">
        <Hero />
        <Expertise />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
