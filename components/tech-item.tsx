import { TechItemProps } from "@/app/types/tech-item"
export function TechItem({ name, image }: TechItemProps) {
  return (
    <div className="flex flex-col items-center p-4">
      <img src={image} alt={name} className="w-12 h-12 mb-2 text-primary" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}