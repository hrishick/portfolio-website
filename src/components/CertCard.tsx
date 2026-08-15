import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

interface CertCardProps {
  title: string;
  issuer: string;
  date: string;
  link: string;
  index: number;
}

export function CertCard({ title, issuer, date, link, index }: CertCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="no-js-reveal glass-panel group p-6 rounded-2xl hover:border-indigo-500/50 transition-all hover:bg-surface-hover hover:-translate-y-1 block relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-[100px] -z-10 group-hover:bg-indigo-500/10 transition-colors" />
      
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg group-hover:bg-indigo-500 group-hover:text-white transition-colors">
          <Award className="w-6 h-6" />
        </div>
        <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors opacity-0 group-hover:opacity-100" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 pr-4">{title}</h3>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 group-hover:border-indigo-500/20 transition-colors">
        <span className="text-slate-400 font-medium">{issuer}</span>
        <span className="text-indigo-400/80 text-sm">{date}</span>
      </div>
    </motion.a>
  );
}
