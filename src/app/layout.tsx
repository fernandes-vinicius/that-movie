import './globals.css'

import type { Metadata } from 'next'

import { fontSans } from '@/_lib/fonts'
import { ThemeProvider } from '@/_providers/theme-provider'

export const metadata: Metadata = {
  title: 'That Movie',
  description: 'Generated by create next app',
}

type Props = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
