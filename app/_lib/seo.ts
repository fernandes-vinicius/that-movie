import { env } from '@/_lib/env'

export const SEO = {
  name: 'That Movie',
  ogImage: '',
  description: `Navegue, encontre classificações, conheça os atores e encontre seu próximo filme para assistir`,
  links: {
    github: env.NEXT_PUBLIC_GITHUB_REPO_URL,
  },
} as const
