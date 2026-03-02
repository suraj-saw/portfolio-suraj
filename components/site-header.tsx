"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";
import { ModeSwitcher, useModeSwitcher } from "./mode-switcher";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { CommandMenu } from "./command-menu";
import { Icons } from "./icons";

export function SiteHeader() {
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState<Date | null>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const toggleTheme = useModeSwitcher();

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      if (playPromiseRef.current) {
        playPromiseRef.current
          .then(() => {
            audioRef.current?.pause();
          })
          .catch(() => {});
      } else {
        audioRef.current.pause();
      }
      setPlaying(false);
    } else {
      playPromiseRef.current = audioRef.current.play();
      playPromiseRef.current
        ?.then(() => {
          playPromiseRef.current = null;
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            console.error("Audio play error:", err);
          }
          playPromiseRef.current = null;
          setPlaying(false);
        });
      setPlaying(true);
    }
  };

  const formattedTime = time?.toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <MainNav />

          {/* Mobile: hamburger drawer trigger (left side of ml-auto) */}
          <div className="ml-auto flex items-center gap-1 md:hidden">
            {/* Music toggle - visible on mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted"
              onClick={toggleMusic}
              title={playing ? "Pause music" : "Play music"}
            >
              <Icons.music
                className={`h-4 w-4 ${playing ? "text-primary" : ""}`}
              />
            </Button>

            {/* Theme toggle - visible on mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full relative"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <ModeSwitcher className="h-4 w-4" />
            </Button>

            {/* GitHub - visible on mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full"
              asChild
            >
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>

            {/* Mobile nav hamburger */}
            <MobileNav toggleMusic={toggleMusic} playing={playing} />
          </div>

          {/* Desktop right side */}
          <div className="ml-auto hidden items-center gap-2 md:gap-3 md:flex">
            <CommandMenu />

            {/* Live Clock */}
            <div className="hidden items-center gap-2 rounded-full border border-border/40 bg-muted/30 px-3 py-1.5 backdrop-blur-sm lg:flex">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </div>
              <span className="text-xs font-medium tabular-nums tracking-tight">
                {formattedTime ?? "--:--:--"}
              </span>
            </div>

            {/* Music toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted"
              onClick={toggleMusic}
              title={playing ? "Pause music" : "Play music"}
            >
              <Icons.music
                className={`h-4 w-4 ${playing ? "text-primary" : ""}`}
              />
            </Button>

            {/* GitHub */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full"
              asChild
            >
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full relative"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <ModeSwitcher className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </header>
  );
}
