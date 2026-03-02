'use client';

import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { docsConfig } from '@/config/docs';
import { ModeSwitcher } from './mode-switcher';
import { Icons } from './icons';

interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  items?: NavItem[];
}

interface MobileNavProps {
  toggleMusic: () => void;
  playing: boolean;
}

export function MobileNav({ toggleMusic, playing }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="flex items-center gap-2 md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed right-0 top-0 h-full w-[300px] bg-background border-l border-border/40 flex flex-col shadow-xl z-[101]">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/40">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <Icons.logo className="h-5 w-5" />
                <span className="font-semibold text-sm">{siteConfig.name}</span>
              </Link>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={toggleMusic}
                >
                  <Icons.music
                    className={`h-4 w-4 ${
                      playing ? 'text-blue-500' : 'text-muted-foreground'
                    }`}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full relative"
                >
                  <ModeSwitcher className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="space-y-6">
                {/* Home link */}
                <div className="space-y-1">
                  <MobileLink
                    href="/"
                    onOpenChange={setOpen}
                    className="group flex items-center justify-between rounded-xl border border-border/40 bg-muted/30 px-4 py-3 text-sm font-medium transition-all hover:border-border hover:bg-muted/50"
                  >
                    <span>Home</span>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </MobileLink>
                </div>

                {/* Sections */}
                {docsConfig.sidebarNav.map((section, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2 px-1">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                        {section.title}
                      </h3>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border/50 to-transparent" />
                    </div>
                    <div className="space-y-1">
                      {section?.items?.map((item: NavItem) =>
                        item.href && !item.disabled ? (
                          <MobileLink
                            key={item.href}
                            href={item.href}
                            onOpenChange={setOpen}
                            className={cn(
                              'group flex items-center justify-between rounded-lg px-4 py-2.5 text-sm transition-all hover:bg-muted/50',
                              pathname === item.href
                                ? 'bg-accent font-medium'
                                : 'text-muted-foreground'
                            )}
                          >
                            <span>{item.title}</span>
                            <svg
                              className="h-3.5 w-3.5 opacity-50"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </MobileLink>
                        ) : null
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}