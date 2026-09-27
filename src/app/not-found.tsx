'use client'

import Link from 'next/link'
import { useI18n } from '@/i18n/LocaleProvider'

export default function NotFound() {
  const { t } = useI18n()

  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="glass-card max-w-md p-10 text-center">
        <p className="text-gradient text-7xl font-semibold tracking-tight">
          404
        </p>
        <h1 className="mt-4 text-xl font-semibold text-ink">
          {t('notFound.title')}
        </h1>
        <p className="mt-2 text-sm leading-6 text-muted">
          {t('notFound.desc')}
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-strong"
        >
          {t('notFound.back')}
        </Link>
      </div>
    </section>
  )
}
