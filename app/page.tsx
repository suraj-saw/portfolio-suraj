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
        <br></br>
        {/* <PageHeaderDescription>
          A coder, problem-solver and developer with a passion for creating efficient and scalable web applications.
        </PageHeaderDescription> */}
        <PageHeaderDescription className="text-muted-foreground text-sm mt-1">
          I'm a Computer Science undergraduate at the National Institute of Technology, Delhi, currently in my third year of B.Tech. I am passionate about software development and enjoy building applications that solve real problems.
        </PageHeaderDescription>
        <PageHeaderDescription className="text-muted-foreground text-sm mt-1">
          I spend most of my time learning new technologies, developing personal projects, and strengthening my understanding of computer science fundamentals and modern development practices.
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