import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const username = 'suraj-saw';
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      cache: 'no-store', // always fetch fresh data
    });

    if (!res.ok) {
      throw new Error('GitHub API request failed');
    }

    const data = await res.json();

    return NextResponse.json({
      hireable: data.hireable,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      company: data.company,
      location: data.location,
    });
  } catch (error) {
    console.error('GitHub stats error:', error);
    return NextResponse.json({ error: 'Failed to fetch GitHub stats' }, { status: 500 });
  }
}