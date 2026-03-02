import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import Pager from '@/components/pager';
import GitHubGraphs from './GithubGraphs';

export default function StatsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader>
        <PageHeaderHeading>Stats</PageHeaderHeading>
        <PageHeaderDescription>
          My GitHub activity and contribution graph.
        </PageHeaderDescription>
      </PageHeader>

      <GitHubGraphs />

      <Pager
        prevHref="/contact"
        nextHref="/"
        prevTitle="Contact"
        nextTitle="Back to Home"
      />
    </div>
  );
}