'use client'

import { useI18n } from '@/i18n/LocaleProvider'
import Reveal from './Reveal'

type Project = {
  href: string
  icon: 'book' | 'shield'
  titleKey: string
  descKey: string
  linkKey: string
}

const PROJECTS: Project[] = [
  {
    href: 'https://laihaibo.github.io/codex-howto',
    icon: 'book',
    titleKey: 'home.featured.codexHowto.title',
    descKey: 'home.featured.codexHowto.desc',
    linkKey: 'home.featured.codexHowto.link',
  },
  {
    href: 'https://laihaibo.github.io/meta-cert/',
    icon: 'shield',
    titleKey: 'home.featured.metaCert.title',
    descKey: 'home.featured.metaCert.desc',
    linkKey: 'home.featured.metaCert.link',
  },
]

function ProjectIcon({ icon }: { icon: Project['icon'] }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  if (icon === 'book') {
    return (
      <svg {...common}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export default function FeaturedCards() {
  const { t } = useI18n()

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t('home.featured.title')}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.href} delay={i * 100}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group block h-full p-8"
              >
                <span className="glass inline-flex h-11 w-11 items-center justify-center rounded-2xl text-accent">
                  <ProjectIcon icon={project.icon} />
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
                  {t(project.titleKey)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {t(project.descKey)}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  {t(project.linkKey)}
                  <svg
                    className="transition-transform group-hover:translate-x-1"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
