import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null); // Ref for the gradient line

  const projectImage = [
    {
      id: 1,
      title: "Game of Thrones Fanpage",
      imageSrc: "/images/ProjectSnap/got.png",
      tech: "React, CSS",
    },
    {
      id: 2,
      title: "Placement Predictor",
      imageSrc: "/images/ProjectSnap/placement02.png",
      tech: "Flask, Gemini AI, React",
    },
    {
      id: 3,
      title: "AI Quiz Master",
      imageSrc: "/images/ProjectSnap/got.png",
      tech: "Python, OpenAI, React",
    },
  ];

  const gotHandleRedirect = () => {
    window.open(
      "https://go-tfan-web.vercel.app/",
      "_blank",
      "noopener,noreferrer",
    );
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    // 1. Animate Title (Fade in and slide up)
    tl.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
    )
      // 2. Animate the Underline (Scale from 0 to 1 width)
      .fromTo(
        lineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: "power2.inOut" },
        "-=0.6", // Start slightly before the title finishes
      )
      // 3. Animate the Project Cards
      .fromTo(
        ".project-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.4", // Overlap with the line animation
      );
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-black via-violet-500 to-black overflow-hidden"
    >
      {/* Header Section */}
      <div className="mb-16 relative z-10 px-4 text-center">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
        >
          Featured Projects
        </h2>
        {/* Added ref and transform-origin for the line animation */}
        <div
          ref={lineRef}
          className="w-24 md:w-48 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto origin-center"
        />
      </div>

      {/* Grid Container */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectImage.map((project) => (
            <div
              key={project.id}
              className="project-card relative group h-full"
            >
              <div className="bg-white/10 w-full h-full rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md transition-all duration-500 hover:border-purple-500/50 flex flex-col">
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex bg-gradient-to-r from-black to-violet-700 flex-col flex-grow justify-between">
                  <div>
                    <span className="text-pink-300 text-xs font-mono uppercase tracking-widest">
                      {project.tech}
                    </span>
                    <h3 className="text-white text-2xl font-bold mt-2">
                      {project.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => {
                      if (project.title === "Game of Thrones Fanpage") {
                        gotHandleRedirect();
                        }
                      }}
                    className="mt-6 w-full py-3 bg-white text-black font-bold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 transform active:scale-95"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
