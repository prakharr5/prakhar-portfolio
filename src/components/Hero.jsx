import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center relative px-6">
      <div className="max-w-4xl mx-auto w-full pt-20">
        {/* Intro Tag */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="block text-brand-gray text-sm md:text-base font-medium mb-6 tracking-wide"
        >
          AI & DATA SCIENCE | STRATEGIC PROBLEM SOLVER
        </motion.span>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-8 text-brand-black"
        >
          Turning Complex Challenges into{" "}
          <span className="italic">Scalable Solutions.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-brand-gray text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
        >
          I craft AI-powered systems that merge design, data, and strategy to
          create lasting impact. Focused on scalable architecture and
          business-centric innovation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center justify-center bg-brand-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-dark transition-all"
          >
            View Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-brand-black/20 text-brand-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-brand-gray" />
      </motion.div>
    </section>
  );
};

export default Hero;
