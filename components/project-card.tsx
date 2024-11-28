import { ProjectCardProps } from "@/app/types/project-card";
import { Button } from "./ui/button";

export default function ProjectCard({
  title,
  description,
  emphasis,
  image,
  link,
}: ProjectCardProps) {
  return (
    <div className="card lg:card-side bg-slate-800 shadow-xl">
      <figure>
        <img src={image} alt="Project icon" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title ">{title}</h2>
        <p>{description}</p>
        <p>
          <strong>{emphasis}</strong>
        </p>
        <div className="card-actions justify-end">
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white group"
            asChild
          >
            <a target="_blank" href={link}>
              Learn more
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
