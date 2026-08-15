import { SectionHeading } from "../components/SectionHeading";
import { TimelineItem } from "../components/TimelineItem";
import { experience } from "../data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-surface/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Experience & Learning Journey" 
          subtitle="My academic background, continuous learning path, and practical experience."
        />
        
        <div className="mt-16 max-w-4xl mx-auto">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.title}
              {...item}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
