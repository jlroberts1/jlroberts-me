import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <a
    href={href}
    className="text-white/70 hover:text-white transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-6 h-6" />
    <span className="sr-only">{label}</span>
  </a>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <main className="relative container mx-auto px-4 min-h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12 py-8">
          <div className="lg:w-2/3 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Hi! I&apos;m{" "}
                <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 text-transparent bg-clip-text animate-gradient bg-300%">
                  James Roberts
                </span>
              </h1>

              <p className="text-lg text-white/70 max-w-2xl">
                I&apos;m an Ohio based{" "}
                <span className="text-cyan-400">Android Engineer</span> at{" "}
                <span className="text-violet-400">Tinybeans</span>, where I help
                families turn their moments into memories.
              </p>

              <p className="text-base text-white/60 max-w-2xl">
                Outside of work, I explore new{" "}
                <span className="text-cyan-400">technologies</span>, play{" "}
                <span className="text-violet-400">guitar</span>, and enjoy{" "}
                <span className="text-cyan-400">hiking</span> and{" "}
                <span className="text-violet-400">motorcycling</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white group"
                asChild
              >
                <Link href="/assets/resume.pdf">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Resume
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-slate-200 hover:bg-white/60 group"
              >
                <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Contact
              </Button>
            </div>
            <div className="flex gap-6">
              <SocialLink
                href="https://github.com/jlroberts1"
                icon={Github}
                label="GitHub"
              />
              <SocialLink
                href="https://linkedin.com/in/jlroberts1"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink
                href="https://twitter.com/xoomdev"
                icon={Twitter}
                label="Twitter"
              />
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute -inset-12 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse" />
              <Image
                src="/profilepic.jpg"
                alt="James Roberts"
                layout="fill"
                className="relative rounded-full w-full h-full object-cover border-2 border-white/20"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
