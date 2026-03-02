import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import ContactForm from './ContactForm';
import Pager from '@/components/pager';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Icons } from '@/components/icons';

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader>
        <PageHeaderHeading>Contact</PageHeaderHeading>
        <PageHeaderDescription>
          Have a project in mind or just want to say hi? I&apos;d love to hear from you.
        </PageHeaderDescription>
      </PageHeader>

      <div className="flex gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link href={siteConfig.links.github} target="_blank">
            <Icons.gitHub className="mr-1.5 h-4 w-4" />
            GitHub
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href={siteConfig.links.linkedin} target="_blank">
            LinkedIn
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href={siteConfig.links.twitter} target="_blank">
            Twitter / X
          </Link>
        </Button>
      </div>

      <ContactForm />

      <Pager
        prevHref="/education"
        nextHref="/stats"
        prevTitle="Education"
        nextTitle="Stats"
      />
    </div>
  );
}