import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone, FiX, FiSend } from "react-icons/fi";
import Contact from "./Contact"; // Ensure path is correct

const socialLinks = [
  { Icon: FiGithub, url: "https://github.com/waskar2mohit" },
  { Icon: FiInstagram, url: "https://instagram.com/waskar.mohit" },
  { Icon: FiLinkedin, url: "https://www.linkedin.com/in/mohit-waskar-b70355319/" },
];

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 border-t border-white/10 relative">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Changed grid to grid-cols-4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12 items-start">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-8 w-16 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-400 flex items-center justify-center text-white font-bold text-lg mr-3 shadow-lg shadow-violet-500/20">
                mCore
              </div>
              <span className="text-xl font-bold text-white tracking-wide">Mohit Waskar</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Passionate Full Stack Developer specializing in building high-performance web applications.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map(({ Icon, url }, index) => (
                <motion.a 
                  key={index} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1, color: "#8b5cf6" }}
                  className="p-2 bg-white/5 rounded-full border border-white/10 transition-all duration-300"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:justify-self-center">
            <h4 className="text-white font-bold mb-6 text-lg">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Experience"].map((item) => (
                <li key={item}>
                  <motion.a 
                    href={`#${item.toLowerCase()}`} 
                    whileHover={{ x: 5, color: "#a78bfa" }}
                    className="transition-colors duration-200 inline-block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold mb-6 text-lg">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <FiMail className="text-violet-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm truncate">waskarmohit@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-violet-500" />
                <span className="text-sm">+91 87673 57885</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMapPin className="text-violet-500" />
                <span className="text-sm">Mumbai, India</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Dedicated Contact Me Button */}
          <div className="md:justify-self-end">
            <h4 className="text-white font-bold mb-6 text-lg">Hire Me</h4>
            <p className="text-sm text-gray-400 mb-6">
              Ready to start your next project? Let's talk.
            </p>
            <motion.button 
              onClick={() => setIsContactOpen(true)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(139, 92, 246, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-bold transition-all shadow-xl shadow-violet-900/20"
            >
              <FiSend />
              Contact Me
            </motion.button>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-gray-500">
            © {currentYear} Mohit Waskar. All rights reserved. 
            <span className="block md:inline md:ml-2 mt-1 md:mt-0 italic text-violet-400/60">
              Designed with Framer Motion.
            </span>
          </p>
        </div>
      </div>

      {/* --- CONTACT MODAL --- */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
            onClick={() => setIsContactOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsContactOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-violet-400 flex items-center gap-2 font-medium"
              >
                Close <FiX size={20} />
              </button>
              <Contact isHero={false} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;