import { motion } from "framer-motion";

const skills = ["React", "JavaScript", "Tailwind CSS", "Node.js", "Git"];

const projects = [
  {
    id: "01",
    title: "Learnig React",
    desc: "Responsive personal brand site with fluid animations.",
    tech: "React · Framer Motion",
    accent: "#a78bfa",
  },
  {
    id: "02",
    title: "Oracle Database Program",
    desc: "Storefront with cart management and state transitions.",
    tech: "SQL · Oracle Apex · Oracle SQL Developer Data Modeler",
    accent: "#34d399",
  },
  {
    id: "03",
    title: "API handling & MongoDB setup",
    desc: "A full-stack MERN discussion platform with real-time voting and secure auth.",
    tech: "MongoDB · Express · React · Node.js",
    accent: "#60a5fa",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full py-20 bg-gradient-to-b from-black via-violet-500 to-black px-8"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #7c3aed, transparent)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-[0.4em] uppercase text-purple-400 mb-3">
            Frontend Developer And Data Enthusiast
          </p>
          <h2
            className="text-6xl font-black tracking-tighter"
            style={{ fontFamily: "Georgia, serif" }}
          >
            My Journey
          </h2>
          <div className="h-px bg-gradient-to-r from-purple-500 to-transparent mt-5" />
        </motion.div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-14">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              className="px-3 py-1.5 text-xs font-mono rounded-full border border-white/10 bg-white/5 text-gray-300"
            >
              {s}
            </motion.span>
          ))}
        </div>

        {/* Projects */}
        <div className="space-y-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              whileHover={{ x: 6 }}
              className="flex items-start gap-6 p-5 rounded-xl border border-white/6 bg-white/[0.03] group transition-colors duration-300 hover:border-white/10"
            >
              <span
                className="text-3xl font-black opacity-100 leading-none select-none text-white">
                {p.id}
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-violet-950">{p.title}</h3>
                <p className="text-sm text-white mt-1">{p.desc}</p>
                <p
                  className="text-xs font-mono mt-2 text-cyan-400"
        
                >
                  {p.tech}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
