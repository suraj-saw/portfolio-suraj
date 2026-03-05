'use client';

import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Eye, Heart, Users, GitFork, MapPin, Building2, BookOpen, UserCheck } from 'lucide-react';

interface GitHubStats {
  hireable: boolean | null;
  public_repos: number;
  followers: number;
  following: number;
  company: string | null;
  location: string | null;
}

export default function GitHubGraphs() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [views, setViews] = useState<number | null>(null);
  const [loveCount, setLoveCount] = useState<number | null>(null);
  const [loved, setLoved] = useState(false);
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [loveLoading, setLoveLoading] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Restore love state from localStorage (persists across refreshes)
    const hasLoved = localStorage.getItem('portfolio_loved') === 'true';
    if (hasLoved) setLoved(true);

    // Track view only once per browser session (sessionStorage resets on tab close)
    const trackView = async () => {
      const alreadyViewed = sessionStorage.getItem('portfolio_viewed');
      if (alreadyViewed) {
        // Already counted this session — just fetch current count
        try {
          const res = await fetch('/api/views');
          const data = await res.json();
          if (data?.views != null) setViews(data.views);
        } catch {
          console.error('Failed to fetch views');
        }
        return;
      }
      // First visit this session — increment
      try {
        const res = await fetch('/api/views', { method: 'POST' });
        const data = await res.json();
        if (data?.views != null) {
          setViews(data.views);
          sessionStorage.setItem('portfolio_viewed', 'true');
        }
      } catch {
        console.error('Failed to track view');
      }
    };

    const fetchLove = async () => {
      try {
        const res = await fetch('/api/love');
        const data = await res.json();
        if (data?.count != null) setLoveCount(data.count);
      } catch {
        console.error('Failed to fetch love count');
      }
    };

    const fetchGitHub = async () => {
      try {
        const res = await fetch('/api/github');
        const data = await res.json();
        setGithubStats(data);
      } catch {
        console.error('Failed to fetch GitHub stats');
      }
    };

    trackView();
    fetchLove();
    fetchGitHub();
  }, []);

  const handleLove = async () => {
    if (loved || loveLoading) return;
    setLoveLoading(true);
    try {
      const res = await fetch('/api/love', { method: 'POST' });
      const data = await res.json();
      if (data?.count != null) {
        setLoveCount(data.count);
      } else {
        setLoveCount((prev) => (prev != null ? prev + 1 : 1));
      }
      setLoved(true);
      localStorage.setItem('portfolio_loved', 'true'); // persist across refreshes
    } catch {
      console.error('Failed to increment love');
      setLoveCount((prev) => (prev != null ? prev + 1 : 1));
      setLoved(true);
      localStorage.setItem('portfolio_loved', 'true');
    } finally {
      setLoveLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-10">

      {/* ── About this portfolio ── */}
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold">About this portfolio</h2>
          <p className="text-muted-foreground mt-1">Insights and metrics about this portfolio website</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Total Views */}
          <div className="rounded-xl border bg-card p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-purple-500 font-semibold">
              <Eye className="h-5 w-5" />
              Total Views
            </div>
            <div className="text-5xl font-bold text-purple-500">
              {views != null ? views.toLocaleString() : '—'}
            </div>
            <p className="text-sm text-muted-foreground">Unique page visits</p>
          </div>

          {/* Appreciation Count */}
          <div className="rounded-xl border bg-card p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-pink-500 font-semibold">
              <Heart className="h-5 w-5" />
              Appreciation Count
            </div>
            <div className="text-5xl font-bold text-pink-500">
              {loveCount != null ? loveCount.toLocaleString() : '—'}
            </div>
            <button
              onClick={handleLove}
              disabled={loved || loveLoading}
              className={`mt-1 w-fit flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all
                ${loved
                  ? 'bg-pink-500/20 text-pink-400 cursor-default'
                  : 'bg-purple-600 hover:bg-purple-700 text-white cursor-pointer'
                }`}
            >
              <Heart className={`h-4 w-4 ${loved ? 'fill-pink-400' : ''}`} />
              {loved ? 'Loved! ❤️' : loveLoading ? 'Sending...' : 'Love this portfolio'}
            </button>
          </div>
        </div>
      </div>

      {/* ── GitHub Stats ── */}
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold">GitHub Stats</h2>
          <p className="text-muted-foreground mt-1">Insights and metrics about my GitHub profile</p>
        </div>

        {/* Contribution Calendar */}
        <div className="overflow-x-auto">
          <GitHubCalendar
            username="suraj-saw"
            colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
            fontSize={12}
            blockSize={13}
          />
        </div>

        {/* GitHub Stats Grid */}
        {githubStats && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {/* Hireable */}
            <div className={`rounded-xl p-6 flex flex-col gap-2 ${githubStats.hireable ? 'bg-green-900/40 border border-green-700' : 'bg-card border'}`}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <UserCheck className="h-4 w-4" />
                Hireable
              </div>
              <div className="text-4xl font-bold">
                {githubStats.hireable === null ? 'N/A' : githubStats.hireable ? 'Yes' : 'No'}
              </div>
            </div>

            {/* Total Repos */}
            <div className="rounded-xl border bg-card p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                Total Public Repositories
              </div>
              <div className="text-4xl font-bold">{githubStats.public_repos}</div>
            </div>

            {/* Followers */}
            <div className="rounded-xl border bg-card p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                Followers
              </div>
              <div className="text-4xl font-bold">{githubStats.followers}</div>
            </div>

            {/* Following */}
            <div className="rounded-xl border bg-card p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <GitFork className="h-4 w-4" />
                Following
              </div>
              <div className="text-4xl font-bold">{githubStats.following}</div>
            </div>

            {/* Company */}
            <div className="rounded-xl border bg-card p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Building2 className="h-4 w-4" />
                Current Company
              </div>
              <div className="text-2xl font-bold">
                {githubStats.company ?? 'N/A'}
              </div>
            </div>

            {/* Location */}
            <div className="rounded-xl border bg-card p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Location
              </div>
              <div className="text-2xl font-bold">
                {githubStats.location ?? 'N/A'}
              </div>
            </div>
          </div>
        )}

        {/* Loading skeleton */}
        {!githubStats && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 h-28 animate-pulse" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
