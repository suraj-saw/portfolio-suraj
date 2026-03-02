import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import TimelineViewer from '@/components/timeline-viewer';
import { experiences } from '@/constants/experience';
import Pager from '@/components/pager';

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader>
        <PageHeaderHeading>Experience</PageHeaderHeading>
        <PageHeaderDescription>
          My professional journey and contributions so far.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={experiences} />

      <Pager
        prevHref="/skills-tools"
        nextHref="/education"
        prevTitle="Skills & Tools"
        nextTitle="Education"
      />
    </div>
  );
}