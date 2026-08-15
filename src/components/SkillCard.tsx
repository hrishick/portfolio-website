import { motion } from "framer-motion";
import { Code2, Server, Terminal, Shield } from "lucide-react";

interface SkillCardProps {
  category: string;
  items: string[];
  index: number;
}

const icons = {
  Programming: Code2,
  "Web Development": Server,
  Tools: Terminal,
  Cybersecurity: Shield,
};

export function SkillCard({ category, items, index }: SkillCardProps) {
  const Icon = icons[category as keyof typeof icons] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="no-js-reveal glass-panel p-6 rounded-2xl hover:border-indigo-500/30 transition-colors group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold">{category}</h3>
      </div>
      
      <ul className="space-y-3">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
            className="no-js-reveal flex items-center gap-3 text-slate-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
            <span className="group-hover:text-white transition-colors">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
