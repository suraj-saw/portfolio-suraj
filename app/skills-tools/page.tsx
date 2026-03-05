import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { mySkills } from '@/constants/index';
import { Icons } from '@/components/icons';
import Pager from '@/components/pager';

export default function SkillsToolsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader>
        <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
        <PageHeaderDescription>
          Technologies and tools I work with regularly.
        </PageHeaderDescription>
      </PageHeader>

      <div className="flex flex-wrap gap-3">
        {mySkills.map((skill) => {
          const Icon = Icons[skill.icon as keyof typeof Icons];
          return (
            <div
              key={skill.title}
              className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/60"
            >
              {Icon && <Icon className="h-4 w-4 shrink-0" />}
              <span>{skill.title}</span>
            </div>
          );
        })}
      </div>

      <Pager
        prevHref="/projects"
        // nextHref="/experience"
        nextHref="/education"
        prevTitle="Projects"
        // nextTitle="Experience"
        nextTitle="Education"
      />
    </div>
  );
}