import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';
import Pager from '@/components/pager';

export default function EducationPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader>
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderDescription>
          My academic background and qualifications.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={education} />

      <Pager
        prevHref="/experience"
        nextHref="/contact"
        prevTitle="Experience"
        nextTitle="Contact"
      />
    </div>
  );
}