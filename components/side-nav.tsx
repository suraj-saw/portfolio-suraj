'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  items?: NavItem[];
}

interface NavSection {
  title: string;
  items: NavItem[];
}

interface SideNavProps {
  config: {
    sidebarNav: NavSection[];
  };
}

export function SideNav({ config }: SideNavProps) {
  const pathname = usePathname();
  const items = config.sidebarNav;

  return items.length ? (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <h4 className="rounded-md px-2 py-1 text-sm font-medium">
            {item.title}
          </h4>
          {item?.items?.length ? (
            <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
              {item.items.map((navItem, i) =>
                navItem.href && !navItem.disabled ? (
                  <Link
                    key={i}
                    href={navItem.href}
                    className={cn(
                      'group relative flex h-8 w-full items-center rounded-lg px-2 hover:bg-accent hover:text-accent-foreground',
                      pathname === navItem.href
                        ? 'bg-accent font-medium text-accent-foreground'
                        : 'font-normal text-foreground'
                    )}
                    target={navItem.external ? '_blank' : ''}
                    rel={navItem.external ? 'noreferrer' : ''}
                  >
                    {navItem.title}
                  </Link>
                ) : (
                  <span
                    key={i}
                    className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground opacity-60"
                  >
                    {navItem.title}
                  </span>
                )
              )}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
}