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
          a third-year Computer Science student at the <span className='font-semibold text-foreground'>National Institute of Technology, Delhi</span>. My academic journey has helped me develop a strong interest in how software systems are designed, built, and scaled to solve real-world problems.
        </p>
        <p>
          Over time, my curiosity has expanded beyond traditional software development into areas like <span className="font-semibold text-foreground">Data Science and Artificial Intelligence</span>, where data-driven approaches can be used to build intelligent and impactful systems.
        </p>
        <p>
          Alongside my coursework, I actively work on projects that allow me to explore different technologies, experiment with ideas, and strengthen my problem-solving abilities. Building projects helps me translate theoretical concepts into practical solutions.
        </p>
        <p>
          I enjoy continuously learning, exploring new tools, and improving my understanding of computer science through hands-on experience and experimentation.
        </p>
        <p>
          Currently, I am focused on <span className="font-semibold text-foreground">gaining practical experience, building meaningful projects, and expanding my knowledge in software engineering and intelligent systems</span>.
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