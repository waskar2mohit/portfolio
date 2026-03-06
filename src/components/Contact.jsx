import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiCheckCircle } from "react-icons/fi";

const Contact = ({ onClose, isHero }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    data.access_key = "ab9f4d3b-2d8d-4ebc-990a-573801070215";
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result.success) {
      setIsSubmitted(true);
      reset();
    }
  };

  // --- SUCCESS SCREEN ---
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10 px-6 bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl shadow-2xl"
      >
        <div className="flex justify-center mb-6">
          <FiCheckCircle className="text-6xl text-green-400 animate-bounce" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-400 mb-8">
          Thanks for reaching out! I'll get back to you at your email soon.
        </p>
      </motion.div>
    );
  }

  // --- FORM SCREEN ---
  return (
    <section
      id="contact"
      className={`flex items-center justify-center ${!isHero ? "px-4 py-10" : ""}`}
    >
      <div className="w-full max-w-lg bg-white/10 border border-white/20 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-sm">
            Your message goes straight to my Gmail.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-300 ml-1">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Your name"
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-300 ml-1">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Your email"
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-300 ml-1">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              rows="3"
              placeholder="How can I help you?"
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-lg hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              <>
                <FiSend /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
