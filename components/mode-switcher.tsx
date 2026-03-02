'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function ModeSwitcher({ className }: { className?: string }) {
  return (
    <span className={cn('relative transition-all', className)}>
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute top-0 left-0 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </span>
  );
}

export function useModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  return () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
}