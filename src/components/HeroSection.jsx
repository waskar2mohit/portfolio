import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section
      id="home"
      // CHANGED: Added pt-20 to account for fixed header and min-h-screen instead of h-screen
      className="min-h-screen pt-20 bg-gradient-to-b from-black to-violet-500 flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden"
    >
      {/* Left Section (Text) */}
      {/* CHANGED: Increased z-index to 50 to stay above the Spline model */}
      <div className="z-50 xl:mb-0 mb-[20%] relative">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.2,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white"
        >
          Build Like <br />
          It's Built In
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.2,
          }}
          className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl"
        >
          Passionate about data, machine learning, and web development.
          Transforming raw data into intelligent models and intuitive webpages.
        </motion.p>
      </div>

      {/* Right Section (Spline) */}
      {/* CHANGED: Wrapped in a div with z-10 to keep it behind the text */}
      <motion.div className="absolute inset-0 z-10">
          <Spline 
            className="absolute xl:right-[-28%] right-0 top-[20%] lg:top-0"
            scene="https://prod.spline.design/PA7IUEqQLP1VFl7X/scene.splinecode" 
          />
      </motion.div>
    </section>
  );
};

export default HeroSection;