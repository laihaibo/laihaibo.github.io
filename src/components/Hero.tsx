'use client'

import Link from 'next/link'
import { useI18n } from '@/i18n/LocaleProvider'
import Reveal from './Reveal'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative flex min-h-[86vh] items-center justify-center px-6">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-lg text-muted">{t('home.hero.greeting')}</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-ink sm:text-7xl">
            {t('home.hero.name')}
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-gradient mt-5 text-xl font-medium sm:text-2xl">
            {t('home.hero.intro')}
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-3 text-base text-muted sm:text-lg">
            {t('home.hero.tagline')}
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#repos"
              className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-strong"
            >
              {t('home.hero.ctaProjects')}
            </a>
            <Link
              href="/about/"
              className="glass-pill px-6 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              {t('home.hero.ctaContact')}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
