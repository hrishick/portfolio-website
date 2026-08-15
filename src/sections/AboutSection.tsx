import { motion } from "framer-motion";
import { Code, Terminal, Target } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

export function AboutSection() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 text-indigo-400" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my top priority.",
    },
    {
      icon: <Terminal className="w-6 h-6 text-indigo-400" />,
      title: "Security First",
      description: "Integrating security best practices into every stage of development.",
    },
    {
      icon: <Target className="w-6 h-6 text-indigo-400" />,
      title: "Problem Solving",
      description: "Tackling complex challenges with logical, innovative solutions.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="About Me" 
          subtitle="A brief introduction to who I am and what drives me."
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="no-js-reveal prose prose-invert prose-lg max-w-none text-slate-300"
          >
            <p className="mb-6 leading-relaxed">
              As a Computer Science Engineering student, I bridge the gap between theoretical knowledge and practical application. My journey in tech started with web development, where I learned to build intuitive and responsive user interfaces.
            </p>
            <p className="mb-6 leading-relaxed">
              However, understanding how systems are built naturally led me to question how they can be broken. This curiosity ignited my passion for Cybersecurity. Today, I'm dedicated to mastering network security, vulnerability assessment, and secure coding practices.
            </p>
            <p className="leading-relaxed">
              I thrive in environments that challenge me to learn continuously. Whether I'm configuring a server, developing a React application, or analyzing network traffic in Wireshark, I bring a meticulous and analytical approach to every project.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="no-js-reveal grid gap-6"
          >
            {highlights.map((item) => (
              <div key={item.title} className="glass-panel p-6 rounded-2xl flex gap-6 items-start">
                <div className="p-3 rounded-xl bg-indigo-500/10 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
