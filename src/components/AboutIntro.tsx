'use client'

import { useI18n } from '@/i18n/LocaleProvider'
import Reveal from './Reveal'

export default function AboutIntro() {
  const { t } = useI18n()

  return (
    <Reveal>
      <div className="text-center">
        <img
          src="/avatar.svg"
          alt={t('home.hero.name')}
          width={128}
          height={128}
          className="glass mx-auto h-32 w-32 rounded-full object-cover p-1.5"
        />
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink">
          {t('about.title')}
        </h1>
        <p className="text-gradient mt-2 text-lg font-medium">
          {t('home.hero.intro')}
        </p>
      </div>
    </Reveal>
  )
}
