import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          My academic journey and the foundations of my technical learning.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Through my academic journey, I have developed a strong foundation in programming, algorithms, and problem-solving, while also exploring areas such as data analysis, machine learning, and software development.
        </PageHeaderDescription>
        <PageHeaderDescription>
          My coursework, combined with hands-on projects and self-learning, has helped me bridge the gap between theoretical knowledge and practical application. I believe that the most meaningful learning happens while building and experimenting with real systems.
        </PageHeaderDescription>
        <PageHeaderDescription>
          The following timeline highlights the key stages of my academic journey so far.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={education} />

      <Pager
        // prevHref="/experience"
        prevHref="/skills-tools"
        nextHref="/contact"
        // prevTitle="Experience"
        prevTitle="Skills & Tools"
        nextTitle="Contact"
      />
    </>
  );
};
export default EducationPage;