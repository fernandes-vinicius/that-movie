/* eslint-disable @next/next/no-img-element */

// import Image from 'next/image'
import Link from 'next/link'

import { HomeIcon, SearchIcon } from 'lucide-react'

import { LogoSvg } from '@/_components/logo-svg'
import { Button } from '@/_components/ui/button'
import { SEO } from '@/_lib/seo'

export function Header() {
  return (
    <header className="grid grid-cols-2 grid-rows-[100px] items-center">
      <div>
        <Link href="/" aria-label="Back to home">
          <LogoSvg />
        </Link>
      </div>

      <div className="flex items-center justify-end">
        <Button asChild aria-label="Back to home" size="icon" variant="ghost">
          <Link href="/">
            <HomeIcon className="size-5" />
          </Link>
        </Button>

        <Button asChild aria-label="Go to search" size="icon" variant="ghost">
          <Link href="/search">
            <SearchIcon className="size-5" />
          </Link>
        </Button>

        <Link
          href={SEO.links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Go to GitHub page"
        >
          <img
            src="/github.svg"
            alt="GitHub"
            height={20}
            width={20}
            className="ml-2.5 size-5 object-contain"
          />
        </Link>
      </div>
    </header>
  )
}
