import About from "./components/About";
import CustomCursor from "./components/CustomCursor";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CustomCursor />
      <About />
      <ProjectSection />
      <Experience/>
      <Footer/>
    </>
  );
}
