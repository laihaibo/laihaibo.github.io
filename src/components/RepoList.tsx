'use client'

import { useEffect, useState } from 'react'
import { useI18n } from '@/i18n/LocaleProvider'
import Reveal from './Reveal'

type Repo = {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  pushed_at: string
  fork: boolean
}

const REPO_COUNT = 6
const CACHE_KEY = 'gh-repos-cache-v1'
const CACHE_TTL = 30 * 60 * 1000

// Shown when the GitHub API is unreachable or rate-limited.
const FALLBACK_REPOS: Repo[] = [
  {
    name: 'shang-an',
    description: '上岸',
    html_url: 'https://github.com/laihaibo/shang-an',
    homepage: 'https://laihaibo.github.io/shang-an/',
    language: 'TypeScript',
    stargazers_count: 0,
    pushed_at: '2026-09-27T00:00:00Z',
    fork: false,
  },
  {
    name: 'grow-up',
    description: '我长大了',
    html_url: 'https://github.com/laihaibo/grow-up',
    homepage: 'https://laihaibo.github.io/grow-up/',
    language: 'TypeScript',
    stargazers_count: 0,
    pushed_at: '2026-09-27T00:00:00Z',
    fork: false,
  },
  {
    name: 'laotagong',
    description: null,
    html_url: 'https://github.com/laihaibo/laotagong',
    homepage: 'https://laihaibo.github.io/laotagong/',
    language: 'TypeScript',
    stargazers_count: 0,
    pushed_at: '2026-09-26T00:00:00Z',
    fork: false,
  },
  {
    name: 'take-five',
    description: '休息一下',
    html_url: 'https://github.com/laihaibo/take-five',
    homepage: null,
    language: 'TypeScript',
    stargazers_count: 0,
    pushed_at: '2026-09-18T00:00:00Z',
    fork: false,
  },
  {
    name: 'sd-pass',
    description: null,
    html_url: 'https://github.com/laihaibo/sd-pass',
    homepage: 'https://laihaibo.github.io/sd-pass/',
    language: 'JavaScript',
    stargazers_count: 0,
    pushed_at: '2026-08-31T00:00:00Z',
    fork: false,
  },
  {
    name: 'meta-cert',
    description: '多元从业资格学习平台',
    html_url: 'https://github.com/laihaibo/meta-cert',
    homepage: 'https://laihaibo.github.io/meta-cert/',
    language: 'Python',
    stargazers_count: 0,
    pushed_at: '2026-08-14T00:00:00Z',
    fork: false,
  },
]

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572a5',
  Vue: '#41b883',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Go: '#00add8',
  Rust: '#dea584',
  Shell: '#89e051',
}

function isSafeHttpsUrl(url: string | null | undefined): url is string {
  if (!url) return false
  try {
    return new URL(url).protocol === 'https:'
  } catch {
    return false
  }
}

function relativeTime(dateStr: string, locale: string): string {
  const diffMs = Date.now() - new Date(dateStr).getTime()
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })
  const minutes = Math.round(diffMs / 60000)
  if (Math.abs(minutes) < 60) return rtf.format(-minutes, 'minute')
  const hours = Math.round(diffMs / 3600000)
  if (Math.abs(hours) < 24) return rtf.format(-hours, 'hour')
  const days = Math.round(diffMs / 86400000)
  if (Math.abs(days) < 30) return rtf.format(-days, 'day')
  const months = Math.round(days / 30)
  if (Math.abs(months) < 12) return rtf.format(-months, 'month')
  return rtf.format(-Math.round(days / 365), 'year')
}

export default function RepoList() {
  const { t, locale } = useI18n()
  const [repos, setRepos] = useState<Repo[] | null>(null)
  const [usedFallback, setUsedFallback] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY)
        if (cached) {
          const parsed = JSON.parse(cached) as { at: number; data: Repo[] }
          if (
            Date.now() - parsed.at < CACHE_TTL &&
            Array.isArray(parsed.data) &&
            parsed.data.length > 0
          ) {
            setRepos(parsed.data)
            return
          }
        }

        const res = await fetch(
          'https://api.github.com/users/laihaibo/repos?sort=pushed&per_page=30',
          { headers: { Accept: 'application/vnd.github+json' } }
        )
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`)
        const all = (await res.json()) as Repo[]
        const picked = all
          .filter((r) => !r.fork && r.name !== 'laihaibo.github.io')
          .slice(0, REPO_COUNT)
        if (picked.length === 0) throw new Error('no repositories')

        if (!cancelled) {
          setRepos(picked)
          try {
            sessionStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ at: Date.now(), data: picked })
            )
          } catch {
            /* storage unavailable */
          }
        }
      } catch {
        if (!cancelled) {
          setRepos(FALLBACK_REPOS)
          setUsedFallback(true)
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t('home.repos.title')}
          </h2>
          <p className="mt-3 flex items-center justify-center gap-2 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t('home.repos.subtitle')}
          </p>
        </Reveal>

        {usedFallback && (
          <p role="status" className="mt-4 text-center text-xs text-muted">
            {t('home.repos.fallbackNote')}
          </p>
        )}

        <p aria-live="polite" className="sr-only">
          {repos === null ? t('home.repos.loading') : ''}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {repos === null
            ? Array.from({ length: REPO_COUNT }).map((_, i) => (
                <div
                  key={i}
                  aria-hidden="true"
                  className="glass h-44 animate-pulse rounded-3xl"
                />
              ))
            : repos.map((repo, i) => (
                <Reveal key={repo.name} delay={i * 60}>
                  <div className="glass-card group flex h-full flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-w-0 items-center gap-2 font-semibold tracking-tight text-ink"
                      >
                        <svg
                          className="shrink-0 text-muted"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                        <span className="truncate group-hover:text-accent">
                          {repo.name}
                        </span>
                      </a>
                      {isSafeHttpsUrl(repo.homepage) && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${repo.name} site`}
                          className="flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-xs text-muted transition-colors hover:bg-ink/10 hover:text-ink"
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                          {t('home.repos.site')}
                        </a>
                      )}
                    </div>

                    <p className="mt-3 line-clamp-2 min-h-10 text-sm leading-5 text-muted">
                      {repo.description ?? t('home.repos.untitled')}
                    </p>

                    <div className="mt-auto flex items-center gap-4 pt-4 text-xs text-muted">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span
                            className="inline-block h-2.5 w-2.5 rounded-full"
                            style={{
                              backgroundColor:
                                LANG_COLORS[repo.language] ?? '#8b8b8b',
                            }}
                            aria-hidden="true"
                          />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {repo.stargazers_count}
                      </span>
                      <span className="ml-auto">
                        {relativeTime(repo.pushed_at, locale)}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  )
}
