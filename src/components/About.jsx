import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // Title Animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Main Card Animation
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-violet-500 to-black f py-20 px-4 overflow-hidden"
    >
      {/* Animated Title */}
      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-extrabold text-white mb-16 tracking-tight drop-shadow-2xl"
      >
        About Me
      </h1>

      {/* Glassmorphism Container */}
      <div
        ref={cardRef}
        className="max-w-6xl max-h-9xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
      >
        {/* Text Side */}
        <div className="flex-1 space-y-6">
          <p className="text-lg md:text-xl text-purple-100 leading-relaxed font-light">
            I'm a <span className="text-white font-bold">tech enthusiast</span>{" "}
            who enjoys blending creativity with code. Currently pursuing
            Computer Science with a specialization in Data Science, I love
            building interactive web experiences.
          </p>
          <p className="text-lg md:text-xl text-purple-200/80 leading-relaxed font-light">
            Whether it's designing clean UI or working behind the scenes with
            algorithms, I'm always excited to learn and create.
          </p>

          {/* Skill Tags for extra flair */}
          <div className="flex flex-wrap gap-3 pt-4">
            {["React", "GSAP", "Machine Learning", "SQL", "Blender"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full bg-violet-500/30 border border-violet-400/50 text-white text-sm"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Image Side */}
        <div className="relative group">
          {/* Decorative Ring */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500 to-fuchsia-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

          <img
            src="images/mohit02.png"
            alt="profile"
            className="relative w-64 md:w-80 lg:w-96 rounded-2xl object-cover shadow-2xl transform transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
