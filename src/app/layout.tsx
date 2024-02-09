import './globals.css'

import type { Metadata } from 'next'

import { Header } from '@/_components/header'
import { fontSans } from '@/_lib/fonts'
import { SEO } from '@/_lib/seo'
import { cn } from '@/_lib/utils'

export const metadata: Metadata = {
  title: {
    default: `${SEO.name} - ${SEO.description}`,
    template: `%s | ${SEO.name}`,
  },
  description: SEO.description,
}

type Props = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body className={cn(fontSans.variable, 'dark')}>
        <div className="container flex h-full flex-col overflow-x-hidden pb-14">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
