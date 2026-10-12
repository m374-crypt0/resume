import type {MarkdownInstance} from 'astro'

export type Resume = MarkdownInstance<{
  title: string,
  author: string,
  card: {
    title: string,
    description: string,
    order: number,
  },
}>

const files = import.meta.glob<Resume>('../content/resume-*.md', {eager: true})

// One entry per src/content/resume-<slug>.md, sorted by card.order
export const resumes = Object.entries(files)
  .map(([path, resume]) => ({slug: path.match(/resume-(.+)\.md$/)![1], resume}))
  .sort((a, b) => a.resume.frontmatter.card.order - b.resume.frontmatter.card.order)
