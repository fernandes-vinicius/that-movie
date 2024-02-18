import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    TMDB_API_KEY: z.string().min(1),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_TMDB_API_BASE_URL: z.string().min(1),
    NEXT_PUBLIC_TMDB_API_LANGUAGE: z.string().min(1),
    NEXT_PUBLIC_GITHUB_REPO_URL: z.string().min(1),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,

    NEXT_PUBLIC_TMDB_API_BASE_URL: process.env.NEXT_PUBLIC_TMDB_API_BASE_URL,
    NEXT_PUBLIC_TMDB_API_LANGUAGE: process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE,
    NEXT_PUBLIC_GITHUB_REPO_URL: process.env.NEXT_PUBLIC_GITHUB_REPO_URL,
  },
})
