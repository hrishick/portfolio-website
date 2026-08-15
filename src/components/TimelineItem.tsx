import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export function TimelineItem({
  title,
  organization,
  period,
  description,
  index,
  isLast,
}: TimelineItemProps) {
  const renderIcon = () => {
    if (title.toLowerCase().includes("degree") || title.toLowerCase().includes("education")) {
      return <GraduationCap className="w-5 h-5" />;
    }
    if (title.toLowerCase().includes("training") || title.toLowerCase().includes("cert")) {
      return <Award className="w-5 h-5" />;
    }
    return <Briefcase className="w-5 h-5" />;
  };
  


  return (
    <div className="relative flex gap-6 md:gap-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[19px] top-10 bottom-[-2rem] w-[2px] bg-indigo-500/20" />
      )}
      
      {/* Timeline Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="no-js-reveal relative z-10 shrink-0 w-10 h-10 rounded-full bg-surface border border-indigo-500/30 flex items-center justify-center text-indigo-400 mt-1"
      >
        {renderIcon()}
      </motion.div>
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
        className="no-js-reveal pb-12"
      >
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="text-indigo-400 font-medium text-sm">{period}</span>
        </div>
        <h4 className="text-lg text-slate-300 font-medium mb-4">{organization}</h4>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          {description}
        </p>
      </motion.div>
    </div>
  );
}
