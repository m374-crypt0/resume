export const languages = {
  en: {name: 'English', flag: 'us', locale: 'en_US'},
  fr: {name: 'Français', flag: 'fr', locale: 'fr_FR'},
} as const

export type Lang = keyof typeof languages
export type Flag = (typeof languages)[Lang]['flag']

export const defaultLang: Lang = 'en'
export const langs = Object.keys(languages) as Lang[]

// The default language lives at the site root, the others under /<lang>/
export function routeLang(lang: Lang) {
  return lang === defaultLang ? undefined : lang
}

// /web3 → /fr/web3 for French, unchanged for English
export function localizePath(lang: Lang, path: string) {
  return lang === defaultLang ? path : `/${lang}${path}`
}

// /fr/web3 → /web3, the same page regardless of language
export function unlocalizePath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  const [, first, ...rest] = path.split('/')
  return langs.includes(first as Lang) ? `/${rest.join('/')}` : path
}

// Interface strings; page content lives in src/content/<lang>/
export const ui = {
  en: {
    viewCv: 'View CV',
    exportPdf: 'Export PDF',
    toggleTheme: 'Toggle theme',
    tableOfContents: 'Table of contents',
    language: 'Language',
  },
  fr: {
    viewCv: 'Voir le CV',
    exportPdf: 'Exporter en PDF',
    toggleTheme: 'Changer de thème',
    tableOfContents: 'Table des matières',
    language: 'Langue',
  },
} satisfies Record<Lang, Record<string, string>>
