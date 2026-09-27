import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LocaleProvider } from '@/i18n/LocaleProvider'
import LiquidBackground from '@/components/LiquidBackground'
import GlassHeader from '@/components/GlassHeader'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://laihaibo.github.io'),
  title: {
    default: 'Lai Haibo — Full Stack Developer',
    template: '%s — Lai Haibo',
  },
  description: 'Lai Haibo, Full Stack Developer. 构建优雅、快速的 Web 体验。',
  openGraph: {
    title: 'Lai Haibo — Full Stack Developer',
    description:
      '构建优雅、快速的 Web 体验 / Crafting elegant, fast web experiences.',
    url: 'https://laihaibo.github.io/',
    siteName: 'Lai Haibo',
    type: 'website',
    images: [{ url: '/avatar.svg', width: 512, height: 512, alt: 'Lai Haibo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Lai Haibo — Full Stack Developer',
    description: '构建优雅、快速的 Web 体验',
    images: ['/avatar.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f7' },
    { media: '(prefers-color-scheme: dark)', color: '#06060a' },
  ],
}

// Applies the saved (or system) theme before first paint to avoid a flash.
const themeInitScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})()`

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <noscript>
          <style>{'.reveal{opacity:1;transform:none}'}</style>
        </noscript>
        <LocaleProvider>
          <LiquidBackground />
          <GlassHeader />
          <main className="relative z-10">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  )
}
