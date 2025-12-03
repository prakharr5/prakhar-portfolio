import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl mb-8"
        >
          Ready to build the future?
        </motion.h2>

        <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
          Whether you have a question, a project idea, or just want to discuss
          AI and Data Science — I am always open to new opportunities.
        </p>

        {/* Email Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <a
            href="mailto:prakharsrivastava586@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-brand-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <Mail size={20} />
            Say Hello
          </a>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-20">
          <a
            href="https://github.com/prakharr5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/prakhar5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/prakhar_5_/?igsh=eW84OHllNW1zcndp&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-8 text-white/40 text-sm">
          <p>&copy; 2025 Prakhar Srivastava. All rights reserved.</p>
          <p className="mt-2 text-xs">Built with React & Tailwind.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
