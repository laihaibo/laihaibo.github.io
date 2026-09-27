'use client'

import { useI18n } from '@/i18n/LocaleProvider'
import Reveal from './Reveal'

const TECHNOLOGIES = [
  { name: 'Vue', icon: 'vuejs' },
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Python', icon: 'python' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Git', icon: 'git' },
] as const

export default function TechStack() {
  const { t } = useI18n()

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t('home.techStack.title')}
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-6">
          {TECHNOLOGIES.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 50}>
              <div className="glass-card flex flex-col items-center p-5">
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                  alt={tech.name}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="h-10 w-10"
                />
                <span className="mt-2 text-xs font-medium text-muted">
                  {tech.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
