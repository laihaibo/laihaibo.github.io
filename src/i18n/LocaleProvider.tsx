'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { defaultLocale, dictionaries, type Locale } from './dictionaries'

type I18nContextValue = {
  locale: Locale
  t: (key: string) => string
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'locale'

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'zh-CN' || saved === 'en') setLocaleState(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const t = useCallback(
    (key: string) => {
      let node: unknown = dictionaries[locale]
      for (const part of key.split('.')) {
        if (node && typeof node === 'object') {
          node = (node as Record<string, unknown>)[part]
        } else {
          return key
        }
      }
      return typeof node === 'string' ? node : key
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within LocaleProvider')
  return ctx
}
