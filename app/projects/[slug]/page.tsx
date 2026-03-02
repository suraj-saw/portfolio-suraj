import { projects } from '@/constants/projects';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Pager from '@/components/pager';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="h-7 text-xs" asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-1 h-3 w-3" />
            All Projects
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold leading-tight">{project.title}</h1>
        <p className="text-muted-foreground text-sm">{project.tagline}</p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          {project.links.live && (
            <Button size="sm" asChild>
              <Link href={project.links.live} target="_blank">
                <ExternalLink className="mr-1 h-3 w-3" />
                Live Demo
              </Link>
            </Button>
          )}
          {project.links.github && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.links.github} target="_blank">
                <Github className="mr-1 h-3 w-3" />
                Source Code
              </Link>
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5 text-sm">
        <div>
          <h2 className="font-semibold text-base mb-2">Overview</h2>
          <p className="text-foreground/80 leading-relaxed">{project.overview}</p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">Features</h2>
          <ul className="flex flex-col gap-1.5">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">Challenges</h2>
          <ul className="flex flex-col gap-1.5">
            {project.challenges.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">Learnings</h2>
          <ul className="flex flex-col gap-1.5">
            {project.learnings.map((l, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Pager
        prevHref="/projects"
        nextHref="/skills-tools"
        prevTitle="All Projects"
        nextTitle="Skills & Tools"
      />
    </div>
  );
}