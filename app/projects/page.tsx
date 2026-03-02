import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { projects } from '@/constants/projects';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Pager from '@/components/pager';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader>
        <PageHeaderHeading>Projects</PageHeaderHeading>
        <PageHeaderDescription>
          A collection of projects I&apos;ve built — from concept to deployment.
        </PageHeaderDescription>
      </PageHeader>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.slug} className="flex flex-col hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-base leading-tight">
                <Link
                  href={`/projects/${project.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {project.title}
                </Link>
              </CardTitle>
              <CardDescription className="text-xs leading-relaxed">
                {project.tagline}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 mt-auto">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-[10px] px-2 py-0.5">
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 4 && (
                  <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                    +{project.techStack.length - 4}
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-7 text-xs" asChild>
                  <Link href={`/projects/${project.slug}`}>Details</Link>
                </Button>
                {project.links.live && (
                  <Button variant="ghost" size="sm" className="h-7 text-xs" asChild>
                    <Link href={project.links.live} target="_blank">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Live
                    </Link>
                  </Button>
                )}
                {project.links.github && (
                  <Button variant="ghost" size="sm" className="h-7 text-xs" asChild>
                    <Link href={project.links.github} target="_blank">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Pager
        prevHref="/about"
        nextHref="/skills-tools"
        prevTitle="About Me"
        nextTitle="Skills & Tools"
      />
    </div>
  );
}