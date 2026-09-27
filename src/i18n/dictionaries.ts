export type Locale = 'zh-CN' | 'en'

export const defaultLocale: Locale = 'zh-CN'

const zhCN = {
  nav: {
    home: '首页',
    about: '关于',
  },
  home: {
    hero: {
      greeting: '你好，我是',
      name: 'Lai Haibo',
      intro: 'Full Stack Developer',
      tagline: '构建优雅、快速的 Web 体验',
      ctaProjects: '查看项目',
      ctaContact: '联系我',
    },
    repos: {
      title: '最近更新的仓库',
      subtitle: '实时同步自 GitHub',
      untitled: '暂无描述',
      site: '站点',
      loading: '正在加载仓库…',
      fallbackNote: '实时加载失败，正在展示精选列表',
    },
    featured: {
      title: '精选项目',
      codexHowto: {
        title: 'Codex 指南',
        desc: 'Codex CLI 实用使用指南',
        link: '阅读文档',
      },
      metaCert: {
        title: 'Meta Cert 项目',
        desc: '区块链证书验证系统',
        link: '查看项目',
      },
    },
    techStack: {
      title: '技术栈',
    },
  },
  about: {
    title: '关于我',
    contact: {
      title: '联系方式',
      wechat: '微信',
      email: '邮箱',
      github: 'GitHub',
    },
  },
  notFound: {
    title: '页面不存在',
    desc: '你访问的页面可能已被移动或删除。',
    back: '返回首页',
  },
  footer: {
    built: '构建于 Next.js',
  },
}

export type Dictionary = typeof zhCN

const en: Dictionary = {
  nav: {
    home: 'Home',
    about: 'About',
  },
  home: {
    hero: {
      greeting: "Hi, I'm",
      name: 'Lai Haibo',
      intro: 'Full Stack Developer',
      tagline: 'Crafting elegant, fast web experiences',
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
    },
    repos: {
      title: 'Recently Updated Repos',
      subtitle: 'Live from GitHub',
      untitled: 'No description',
      site: 'Site',
      loading: 'Loading repositories…',
      fallbackNote: 'Live fetch failed — showing curated list',
    },
    featured: {
      title: 'Featured Projects',
      codexHowto: {
        title: 'Codex Howto',
        desc: 'A practical guide to using Codex CLI',
        link: 'Read Docs',
      },
      metaCert: {
        title: 'Meta Cert Project',
        desc: 'Blockchain Certificate Verification System',
        link: 'View Project',
      },
    },
    techStack: {
      title: 'Tech Stack',
    },
  },
  about: {
    title: 'About Me',
    contact: {
      title: 'Contact',
      wechat: 'WeChat',
      email: 'Email',
      github: 'GitHub',
    },
  },
  notFound: {
    title: 'Page Not Found',
    desc: "The page you're looking for may have been moved or deleted.",
    back: 'Back to Home',
  },
  footer: {
    built: 'Built with Next.js',
  },
}

export const dictionaries: Record<Locale, Dictionary> = {
  'zh-CN': zhCN,
  en,
}
