'use client';

import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function GitHubGraphs() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-medium mb-3 text-muted-foreground">
          GitHub Contribution Graph
        </h3>
        <GitHubCalendar
          username="suraj-saw"
          colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
          fontSize={12}
          blockSize={13}
        />
      </div>
    </div>
  );
}