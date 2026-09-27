'use client'

import { useI18n } from '@/i18n/LocaleProvider'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="relative z-10 px-6 py-10 text-center text-sm text-muted">
      <p>
        &copy; {new Date().getFullYear()} Lai Haibo &middot; {t('footer.built')}
      </p>
    </footer>
  )
}
