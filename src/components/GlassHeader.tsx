'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useI18n } from '@/i18n/LocaleProvider'
import ThemeToggle from './ThemeToggle'

export default function GlassHeader() {
  const { t, locale, setLocale } = useI18n()
  const pathname = usePathname()

  const isHome = pathname === '/'
  const isAbout = pathname.startsWith('/about')

  const linkClass = (active: boolean) =>
    `rounded-full px-3.5 py-1.5 text-sm transition-colors sm:px-4 ${
      active ? 'bg-ink/10 font-medium text-ink' : 'text-muted hover:text-ink'
    }`

  function toggleLocale() {
    setLocale(locale === 'zh-CN' ? 'en' : 'zh-CN')
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Main navigation"
        className="glass-pill flex h-12 items-center gap-0.5 pl-4 pr-1.5 sm:gap-1"
      >
        <Link
          href="/"
          className="mr-1 text-base font-semibold tracking-tight text-ink"
        >
          LHB
        </Link>
        <Link href="/" className={linkClass(isHome)}>
          {t('nav.home')}
        </Link>
        <Link href="/about/" className={linkClass(isAbout)}>
          {t('nav.about')}
        </Link>
        <span aria-hidden="true" className="mx-1 h-5 w-px bg-ink/15" />
        <button
          type="button"
          onClick={toggleLocale}
          aria-label="Switch language"
          className="rounded-full px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:bg-ink/10 hover:text-ink"
        >
          {locale === 'zh-CN' ? 'EN' : 'CN'}
        </button>
        <ThemeToggle />
      </nav>
    </header>
  )
}
