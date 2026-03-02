"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ModeSwitcher } from "./mode-switcher";
import { siteConfig } from "@/config/site";
import { Icons } from "./icons";

interface MobileNavProps {
  toggleMusic: () => void;
  playing: boolean;
}

export function MobileNav({ toggleMusic, playing }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  // Only render Drawer on client to avoid hydration mismatch with Radix IDs
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render plain button on server to avoid aria-controls mismatch
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted md:hidden"
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </Button>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted md:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </Button>
      </DrawerTrigger>

      <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>

      <DrawerContent className="h-[88vh] border-t border-border/40 bg-background/95 backdrop-blur-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/40 px-5 py-3">
            <div className="flex items-center gap-2.5">
              <Icons.logo className="h-5 w-5" />
              <span className="text-base font-semibold">{siteConfig.name}</span>
            </div>

            <div className="flex items-center gap-1">
              {/* Music toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={toggleMusic}
                title={playing ? "Pause music" : "Play music"}
              >
                <Icons.music
                  className={`h-4 w-4 ${
                    playing ? "text-primary" : "text-muted-foreground"
                  }`}
                />
              </Button>

              {/* Theme toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                asChild
              >
                <div>
                  <ModeSwitcher className="h-4 w-4" />
                </div>
              </Button>

              {/* GitHub */}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                asChild
              >
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Icons.gitHub className="h-4 w-4" />
                </Link>
              </Button>

              {/* Close */}
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

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="space-y-4">
              {/* Home link */}
              <div className="space-y-1">
                <MobileLink
                  href="/"
                  onOpenChange={setOpen}
                  className="flex items-center justify-between rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-sm font-medium transition-all hover:border-border/60 hover:bg-muted/50"
                >
                  <span>Home</span>
                  <svg
                    className="h-4 w-4 text-muted-foreground"
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

              {/* Sidebar sections */}
              {docsConfig.sidebarNav.map((section, index) => (
                <div key={index} className="space-y-1">
                  <p className="px-1 pb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {section.title}
                  </p>

                  {section?.items?.map((item: any) =>
                    item.href && !item.disabled ? (
                      <MobileLink
                        key={item.href}
                        href={item.href}
                        onOpenChange={setOpen}
                        className="flex items-center justify-between rounded-lg px-4 py-2.5 text-sm transition-all hover:bg-muted/50"
                      >
                        <span className="font-medium">{item.title}</span>
                        <svg
                          className="h-3.5 w-3.5 text-muted-foreground"
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
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
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
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
