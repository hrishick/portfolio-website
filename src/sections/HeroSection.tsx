import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../components/Button";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="no-js-reveal"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-heading leading-tight mb-6 text-white">
            Hi, I'm <span className="text-gradient">Hrishick Rudhresh</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-6 leading-relaxed">
            Computer Science Student & <br />
            <span className="text-white">Aspiring Cybersecurity Analyst</span>
          </h2>

          <div className="block lg:hidden mb-6 w-3/4 max-w-[250px] sm:max-w-[300px] mx-auto relative rounded-3xl overflow-hidden glass-panel border-white/10 shadow-2xl aspect-square">
            <img src="/Hrishick_Rudhresh_Photo.jpg" alt="Hrishick Rudhresh" className="w-full h-full object-cover" />
          </div>

          <p className="text-slate-400 text-lg mb-10 max-w-xl leading-relaxed">
            I specialize in building secure web applications and exploring the fascinating world of network security. Passionate about writing clean code and securing digital infrastructures.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto group" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Get in touch
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="/Hrishick_Rudhresh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="no-js-reveal inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none bg-surface text-white hover:bg-surface-hover border border-white/10 h-14 px-8 text-lg w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10">
            <a href="https://github.com/hrishick" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FaGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/hrishick-rudhresh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="no-js-reveal relative hidden lg:block"
        >
          <div className="aspect-square max-w-[500px] mx-auto relative rounded-3xl overflow-hidden glass-panel border-white/10 shadow-2xl">
            <img src="/Hrishick_Rudhresh_Photo.jpg" alt="Hrishick Rudhresh" className="w-full h-full object-cover" />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="no-js-reveal absolute -bottom-6 -left-6 glass-panel px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl"
          >
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl font-bold">
              3+
            </div>
            <div>
              <div className="text-white font-bold text-lg">Years Coding</div>
              <div className="text-slate-400 text-sm">Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
