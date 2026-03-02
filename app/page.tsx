import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { Download, Mail } from 'lucide-react';
import Link from 'next/link';
import Pager from '@/components/pager';

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader>
        <PageHeaderHeading>Hi, I&apos;m Suraj Kumar Saw 👋</PageHeaderHeading>
        <PageHeaderDescription>
          A coder, problem-solver and developer with a passion for creating efficient and scalable web applications.
        </PageHeaderDescription>
        <PageHeaderDescription className="text-muted-foreground text-sm mt-1">
          Full-Stack Web Developer & DevOps enthusiast based in Delhi, India.
          I build modern web applications with a focus on performance,
          scalability, and clean design.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href={siteConfig.links.resume} target="_blank">
              <Download className="mr-1 h-4 w-4" />
              Resume
            </Link>
          </Button>
          <Button variant="outline" asChild size="sm">
            <Link href={siteConfig.links.email}>
              <Mail className="mr-1 h-4 w-4" />
              Email Me
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Introduction"
        nextTitle="About Me"
      />
    </div>
  );
}