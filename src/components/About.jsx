import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "15+" },
    { label: "Team Members Led", value: "80+" },
    { label: "Research Papers", value: "2" },
  ];

  return (
    <section id="about" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT: Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image Container with Style */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-200">
              <img
                src="/profile.jpg"
                alt="Prakhar Srivastava"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
              {/* Decorative Border/Frame */}
              <div className="absolute inset-0 border border-black/10"></div>
            </div>
          </motion.div>

          {/* RIGHT: Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-brand-black">
                More Than Just Code.
              </h2>
              <p className="text-brand-gray text-lg leading-relaxed mb-6">
                I am a final-year Computer Science student specializing in Data
                Science & AI, but my ambition extends beyond the IDE. I see
                myself as a builder—whether it's architecting a complex AI
                pipeline or leading a team of 80+ people for a major research
                conference.
              </p>
              <p className="text-brand-gray text-lg leading-relaxed">
                My goal is simple: to leverage technology to build scalable
                systems and solve high-stakes problems. From optimizing factory
                operations to developing autonomous DevOps agents, I combine
                technical depth with a strategic, business-centric mindset.
              </p>
            </motion.div>

            {/* Stats / Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-4 border-t border-brand-black/10"
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="font-serif text-4xl font-medium text-brand-black mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-brand-gray uppercase tracking-widest font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
