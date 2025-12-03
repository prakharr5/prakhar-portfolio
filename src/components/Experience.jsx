import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Conference Chair",
      company: "STELMAR 2025",
      period: "Feb 2025 – Apr 2025",
      description:
        "Orchestrated the inaugural multidisciplinary research conference, leading a cross-functional team of 80+ members. Managed budget, logistics, and partnerships with Springer Nature, achieving 100% on-plan execution.",
    },
    {
      role: "Operations & Digital Transformation Intern",
      company: "B.P. Alloys Limited",
      period: "Jun 2024 – Jul 2024",
      description:
        "Conducted operational audits and developed a custom ReactJS digital interface to centralize company data. Delivered the solution 2 weeks ahead of schedule with zero post-launch defects.",
    },
    {
      role: "Web Master & Board Member",
      company: "BMU ACM Student Chapter",
      period: "Aug 2023 – Apr 2025",
      description:
        "Owned the digital presence (acmbmu.com) ensuring 99.9% uptime. Directed technical teams to deploy real-time updates for major events, streamlining registration for hundreds of participants.",
    },
    {
      role: "Freelance Web Solutions Consultant",
      company: "SubSaFT",
      period: "Jul 2024 – Aug 2024",
      description:
        "Built and launched a fully SEO-optimized official website for a startup client, handling requirement gathering, design, and final deployment.",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl mb-16 text-brand-black"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-gray-100 pb-12 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                <h3 className="text-xl md:text-2xl font-serif font-medium text-brand-black group-hover:text-brand-gray transition-colors">
                  {exp.role}
                </h3>
                <span className="text-sm font-medium text-brand-gray mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <div className="text-brand-black/60 font-medium mb-4">
                {exp.company}
              </div>

              <p className="text-brand-gray leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
