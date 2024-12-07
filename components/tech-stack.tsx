import { TechItem } from "./tech-item";
import technologies from "@/app/data/technologies";

export function TechStack() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Technologies I Use
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech) => (
            <TechItem key={tech.name} name={tech.name} image={tech.image} />
          ))}
        </div>
      </div>
    </section>
  );
}