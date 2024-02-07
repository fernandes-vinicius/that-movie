import { Poppins as FontSans } from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  // display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})
