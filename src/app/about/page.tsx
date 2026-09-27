import type { Metadata } from 'next'
import AboutIntro from '@/components/AboutIntro'
import TechStack from '@/components/TechStack'
import ContactInfo from '@/components/ContactInfo'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Lai Haibo — Full Stack Developer. 联系方式与技术栈。',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <AboutIntro />
      <TechStack />
      <ContactInfo />
    </div>
  )
}
