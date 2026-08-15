import { SectionHeading } from "../components/SectionHeading";
import { SkillCard } from "../components/SkillCard";
import { skills } from "../data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-surface/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="A comprehensive overview of my technical expertise across different domains."
          align="center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {skills.map((skillGroup, index) => (
            <SkillCard
              key={skillGroup.category}
              category={skillGroup.category}
              items={skillGroup.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
