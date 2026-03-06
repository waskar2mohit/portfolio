import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMenu,
  FiX,
} from "react-icons/fi";
import Contact from "./Contact";

// Rendered via portal — fully outside the <header> DOM tree
const ContactModal = ({ onClose }) => {
  return createPortal(
    <AnimatePresence>
      {/* Backdrop — covers entire viewport, click anywhere closes */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          backgroundColor: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      />

      {/* Centered card — stopPropagation keeps clicks inside from closing */}
      <motion.div
        key="card"
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 24 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "448px",
            maxHeight: "90vh",
            overflowY: "auto",
            scrollbarWidth: "none",
            borderRadius: "1rem",
            pointerEvents: "auto",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              zIndex: 10,
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              cursor: "pointer",
              fontSize: "18px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
          >
            <FiX />
          </button>

          <Contact onClose={onClose} />
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [CisOpen, CsetIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const socialLinks = [
    { Icon: FiGithub, url: "https://github.com/waskar2mohit/" },
    { Icon: FiInstagram, url: "https://www.instagram.com/waskar.mohit/" },
    { Icon: FiLinkedin, url: "https://www.linkedin.com/in/mohit-waskar-b70355319/" },
  ];

  useEffect(() => {
    document.body.style.overflow = CisOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [CisOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] bg-transparent backdrop-blur-md transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.5, duration: 1.2 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        >
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 w-20 rounded-xl bg-gradient-to-r from-gray-500 to-black flex items-center justify-center text-white font-bold text-2xl mr-3 shadow-md">
              mCore
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-300 to-violet-600 bg-clip-text text-transparent tracking-wide">
              Mohit Waskar
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8">
            {["Home", "About", "Projects", "Experience"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative text-gray-200 hover:text-violet-400 font-medium transition-colors duration-300 group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-700" />
              </motion.a>
            ))}
          </nav>

          {/* Socials & CTA */}
          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-5">
              {socialLinks.map(({ Icon, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-violet-400 transition-colors duration-300 text-xl"
                >
                  <Icon />
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-sm shadow-md"
                onClick={() => CsetIsOpen(true)}
              >
                Contact Me
              </motion.button>
            </div>

            <motion.button className="md:hidden" whileTap={{ scale: 0.7 }} onClick={toggleMenu}>
              {isOpen ? <FiX className="h-6 w-6 text-white" /> : <FiMenu className="h-6 w-6 text-white" />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl px-4 py-5 space-y-5"
            >
              <nav className="flex flex-col space-y-3">
                {["Home", "About", "Projects", "Experience"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={toggleMenu} className="text-gray-200 font-medium py-2">
                    {item}
                  </a>
                ))}
                <button
                  onClick={() => { CsetIsOpen(true); toggleMenu(); }}
                  className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold text-white text-center"
                >
                  Contact Me
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Modal rendered via portal — completely outside header DOM */}
      {CisOpen && <ContactModal onClose={() => CsetIsOpen(false)} />}
    </>
  );
};

export default Header;