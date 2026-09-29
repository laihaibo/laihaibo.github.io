<div align="center">

<img src="public/avatar.svg" width="96" alt="Lai Haibo" />

# laihaibo.github.io

基于 **Next.js 15** 的个人网站 · **Apple Liquid Glass** 设计语言 · 静态导出，部署于 GitHub Pages

**[🌐 在线访问](https://laihaibo.github.io)**

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Deploy](https://img.shields.io/github/actions/workflow/status/laihaibo/laihaibo.github.io/deploy.yml?branch=master&label=deploy&logo=github&logoColor=white)

</div>

---

## ✨ 特性

- 🪟 **Liquid Glass 设计** — 毛玻璃层叠 + 纯 CSS 极光背景，零 UI 依赖库，全站统一设计语言
- 🌗 **明暗主题** — 一键切换，`localStorage` 持久化记忆用户偏好
- 🌍 **轻量国际化** — `zh-CN` / `en` 双语支持，自研 i18n 方案，零额外依赖
- 📡 **实时仓库列表** — 从 GitHub API 拉取最近更新的仓库，请求失败自动降级为精选列表
- ✨ **滚动渐入动画** — `IntersectionObserver` 驱动，自动尊重 `prefers-reduced-motion`
- ⚡ **纯静态输出** — `output: 'export'` 静态导出，GitHub Pages 全球 CDN 分发，秒级加载
- 🔍 **SEO 开箱即用** — 内置 `sitemap.xml` 与 `robots.txt`（基于 App Router Metadata API）

## 🚀 快速开始

本地环境要求：**Node.js ≥ 20**（推荐 22，与 CI 保持一致）。

```bash
# 克隆仓库
git clone https://github.com/laihaibo/laihaibo.github.io.git
cd laihaibo.github.io

# 安装依赖并启动开发服务器
npm install
npm run dev     # → http://localhost:3000
```

## 📜 可用脚本

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动开发服务器（`http://localhost:3000`） |
| `npm run build` | 生产构建，静态导出至 `out/` |
| `npm run start` | 启动生产服务器（本地预览） |

## 📁 目录结构

```
laihaibo.github.io/
├── src/
│   ├── app/                 # App Router：首页 / 关于 / 404 / sitemap / robots
│   ├── components/          # Liquid Glass UI 组件（Header、Hero、RepoList、Reveal …）
│   └── i18n/                # zh-CN / en 词典 + LocaleProvider
├── public/                  # 静态资源（.nojekyll、avatar.svg、favicon.svg）
├── .github/workflows/       # GitHub Pages 自动部署流水线
├── next.config.ts           # output: 'export' 静态导出配置
└── package.json
```

## 🧱 技术栈

| 领域 | 技术 |
| --- | --- |
| 框架 | [Next.js](https://nextjs.org/) 15（App Router）+ [React](https://react.dev/) 19 |
| 语言 | [TypeScript](https://www.typescriptlang.org/) 5 |
| 样式 | [Tailwind CSS](https://tailwindcss.com/) v4（`@theme` 自定义设计令牌） |
| 国际化 | 自研轻量 i18n（词典 + Context Provider） |
| 部署 | GitHub Pages（GitHub Actions 自动构建发布） |

## 🌐 国际化

站点默认语言为 `zh-CN`，切换逻辑由 [src/i18n/](src/i18n) 实现：

- 所有文案集中在 [src/i18n/dictionaries.ts](src/i18n/dictionaries.ts)，类型由中文词典自动推导（`typeof zhCN`），新增语言缺译会在编译期报错
- 新增语言只需三步：在 `dictionaries.ts` 中添加新词典、扩展 `Locale` 类型、在语言切换器中注册入口

## ☁️ 部署

站点通过 [GitHub Actions](.github/workflows/deploy.yml) 全自动部署：

1. 每次 push 到 `master` 分支自动触发
2. `npm ci && npm run build` 静态导出至 `out/`
3. 构建产物上传并发布到 GitHub Pages

> [!NOTE]
> `public/.nojekyll` 用于禁用 Jekyll 处理，确保 `_next/` 静态资源不被忽略。

本地验证构建结果：

```bash
npm run build && npx serve out
```

## 🗺️ Roadmap

- [x] 迁移至 Next.js 15 + React 19
- [x] Liquid Glass 设计语言（明暗双主题）
- [x] zh-CN / en 双语支持
- [ ] 博客文章页与 RSS 订阅
- [ ] 页面切换过渡动效
- [ ] 自动化测试与 Lighthouse CI

## 🤝 贡献

欢迎提出建议与改进：

1. Fork 本仓库并创建分支：`git checkout -b feat/your-feature`
2. 提交变更（遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/)）：`git commit -m "feat: add something"`
3. 推送分支并发起 Pull Request

也可以直接 [提交 Issue](https://github.com/laihaibo/laihaibo.github.io/issues) 反馈问题或建议。

## 📄 许可证

代码与设计 © 2016-present [Lai Haibo](https://github.com/laihaibo)，保留所有权利。

---

<div align="center">

**[laihaibo.github.io](https://laihaibo.github.io)** · 用 ❤️ 和 Next.js 构建

</div>
