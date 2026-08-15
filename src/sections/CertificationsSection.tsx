import { SectionHeading } from "../components/SectionHeading";
import { CertCard } from "../components/CertCard";
import { certifications } from "../data/certifications";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Certifications" 
          subtitle="Professional credentials and training I have completed to validate my skills."
          align="center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {certifications.map((cert, index) => (
            <CertCard
              key={cert.title}
              {...cert}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
