import type {APIRoute} from 'astro'
import {readFile} from 'node:fs/promises'
import satori from 'satori'
import sharp from 'sharp'
import {homes, resumes} from '../../../lib/content'
import {langs, type Lang} from '../../../lib/i18n'

// One 1200×630 link-preview card per page: /og/<lang>/home.png, /og/<lang>/<slug>.png
export function getStaticPaths() {
  return langs.flatMap((lang) => [
    {params: {lang, page: 'home'}, props: homes[lang].frontmatter},
    ...resumes
      .filter((cv) => cv.lang === lang)
      .map(({slug, resume}) => ({params: {lang, page: slug}, props: resume.frontmatter})),
  ])
}

type Props = {title: string, author: string}

// Inter is bundled so text renders the same everywhere: satori turns it into
// vector paths, independent of the fonts installed on the build machine
const font = (weight: number) =>
  readFile(`node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`)

const fonts = await Promise.all([400, 700].map(async (weight) => ({
  name: 'Inter',
  data: await font(weight),
  weight: weight as 400 | 700,
})))

const site = new URL(import.meta.env.SITE).host

export const GET: APIRoute<Props, {lang: Lang, page: string}> = async ({props}) => {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 96px',
          backgroundColor: '#0f172a',  // slate-950, dark theme --color-bg
          borderLeft: '16px solid #6366f1',  // indigo-500
          fontFamily: 'Inter',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {fontSize: 80, fontWeight: 700, color: '#f1f5f9'},
              children: props.author,
            },
          },
          // 'Headline — specialty' titles get one line per part
          ...props.title.split(' — ').map((line, i) => ({
            type: 'div',
            props: {
              style: {maxWidth: 992, marginTop: i ? 8 : 24, fontSize: 44, fontWeight: 400, color: '#a5b4fc'},
              children: line,
            },
          })),
          {
            type: 'div',
            props: {
              // absolute offsets start at the border edge: 16px border + 96px padding
              style: {position: 'absolute', left: 112, bottom: 56, fontSize: 26, color: '#64748b'},
              children: site,
            },
          },
        ],
      },
    },
    {width: 1200, height: 630, fonts},
  )

  const png = await sharp(Buffer.from(svg)).png().toBuffer()
  return new Response(new Uint8Array(png), {headers: {'Content-Type': 'image/png'}})
}
