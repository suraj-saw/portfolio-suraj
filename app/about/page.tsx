import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import Pager from '@/components/pager';

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader>
        <PageHeaderHeading>About Me</PageHeaderHeading>
        <PageHeaderDescription>
          Here&apos;s a little more about me and my journey.
        </PageHeaderDescription>
      </PageHeader>

      <div className="flex flex-col gap-4 text-sm text-foreground/80 leading-relaxed">
        <p>
          I&apos;m <span className="font-semibold text-foreground">Suraj Kumar Saw</span>, a
          passionate Full-Stack Web Developer and DevOps enthusiast currently pursuing my
          B.Tech in Computer Science and Engineering from National Institute of Technology, Delhi.
        </p>
        <p>
          My journey into tech started with a curiosity about how websites work, which quickly
          turned into a deep love for building them. I specialize in the{' '}
          <span className="font-semibold text-foreground">MERN stack</span> and enjoy working
          with modern tools like <span className="font-semibold text-foreground">Next.js</span>,{' '}
          <span className="font-semibold text-foreground">Flutter</span>, and{' '}
          <span className="font-semibold text-foreground">Firebase</span>.
        </p>
        <p>
          When I&apos;m not coding, I&apos;m exploring open source projects, contributing to the
          developer community, or learning something new in the DevOps space. I believe in
          writing clean, maintainable code and building products that make a difference.
        </p>
        <p>
          I&apos;m currently open to internship and full-time opportunities where I can
          contribute, grow, and continue learning.
        </p>
      </div>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </div>
  );
}