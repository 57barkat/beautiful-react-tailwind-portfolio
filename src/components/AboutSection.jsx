import { Briefcase, Code, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">
              Full Stack JavaScript Developer
            </h3>

            <p className="text-muted-foreground">
              I’m Barkat Ullah, a software engineer from Islamabad with hands-on
              experience building scalable, high-performance web applications
              using the MERN stack. I specialize in React, Node.js, Express, and
              MongoDB — delivering user-focused, responsive solutions for
              real-world problems.
            </p>

            <p className="text-muted-foreground">
              At Devotix and Code Shop, I’ve developed and deployed full-stack
              projects, integrated AWS Lambda & DynamoDB, optimized APIs, and
              improved app performance by up to 40%. I thrive on creating clean,
              maintainable code and continuously learning modern technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Barkat_Ullah_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Cards Side */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              {
                Icon: Code,
                title: "MERN Stack Development",
                text: "Building full-stack web apps using React, Node.js, Express, and MongoDB with responsive and scalable architectures.",
              },
              {
                Icon: Cloud,
                title: "Cloud & Serverless",
                text: "Deploying backend services using AWS Lambda, DynamoDB, and API Gateway to enhance scalability and reduce maintenance.",
              },
              {
                Icon: Briefcase,
                title: "Agile Collaboration",
                text: "Experienced working in remote Agile teams with Jira, ClickUp, Git, and Bitbucket — delivering projects on time and with quality.",
              },
            ].map(({ Icon, title, text }, i) => (
              <motion.div
                key={i}
                className="gradient-border p-6 card-hover"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-muted-foreground">{text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
