"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5 / CSS3", level: 98, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 95, category: "frontend" },
  { name: "React.js", level: 93, category: "frontend" },
  { name: "Next.js", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Redux / State Management", level: 85, category: "frontend" },
  { name: "Node.js", level: 88, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "MongoDB", level: 85, category: "backend" },
  { name: "PostgreSQL / MySQL", level: 75, category: "backend" },
  { name: "REST API / JWT Auth", level: 80, category: "backend" },
  { name: "Git / GitHub / Bitbucket", level: 92, category: "tools" },
  { name: "Figma / UI Design", level: 88, category: "tools" },
  { name: "WordPress / Elementor", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Jira / ClickUp", level: 80, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={cn(
                "px-5 py-2 rounded-full text-sm sm:text-base transition-all duration-300 capitalize",
                activeCategory === c
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-primary h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
