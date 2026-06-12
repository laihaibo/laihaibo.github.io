import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN.json'
import en from './en.json'

const savedLocale = typeof localStorage !== 'undefined'
  ? localStorage.getItem('locale')
  : null

export default createI18n({
  legacy: false,
  locale: savedLocale || 'zh-CN',
  fallbackLocale: 'en',
  messages: {
    'zh-CN': zhCN,
    en,
  },
})
