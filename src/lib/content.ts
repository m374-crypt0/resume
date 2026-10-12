import type {MarkdownInstance} from 'astro'
import type {Lang} from './i18n'

export type Home = MarkdownInstance<{
  title: string,
  author: string,
  description: string,
  location: string,
}>

export type Resume = MarkdownInstance<{
  title: string,
  author: string,
  description: string,
  card: {
    title: string,
    description: string,
    order: number,
  },
}>

// src/content/<lang>/... → <lang>
const langOf = (path: string) => path.match(/content\/(\w+)\//)![1] as Lang

const homeFiles = import.meta.glob<Home>('../content/*/home.md', {eager: true})

// One src/content/<lang>/home.md per language
export const homes = Object.fromEntries(
  Object.entries(homeFiles).map(([path, home]) => [langOf(path), home]),
) as Record<Lang, Home>

const resumeFiles = import.meta.glob<Resume>('../content/*/resume-*.md', {eager: true})

// One entry per src/content/<lang>/resume-<slug>.md, sorted by card.order
export const resumes = Object.entries(resumeFiles)
  .map(([path, resume]) => ({
    lang: langOf(path),
    slug: path.match(/resume-(.+)\.md$/)![1],
    resume,
  }))
  .sort((a, b) => a.resume.frontmatter.card.order - b.resume.frontmatter.card.order)
