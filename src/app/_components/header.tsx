import Image from 'next/image'
import Link from 'next/link'

import { HomeIcon, SearchIcon } from 'lucide-react'

import { LogoSvg } from '@/_components/logo-svg'
import { Button } from '@/_components/ui/button'
import { env } from '@/_lib/env'

export function Header() {
  return (
    <header className="grid grid-cols-2 grid-rows-[100px] items-center gap-5">
      <div>
        <Link href="/" aria-label="Back to home">
          <LogoSvg />
        </Link>
      </div>

      <div className="flex items-center justify-end gap-1">
        <Button asChild aria-label="Back to home" size="icon" variant="ghost">
          <Link href="/">
            <HomeIcon className="size-5" />
          </Link>
        </Button>

        <Button asChild aria-label="Go to search" size="icon" variant="ghost">
          <Link href="/">
            <SearchIcon className="size-5" />
          </Link>
        </Button>

        <hr className="mx-2 min-h-5 w-[1px] shrink-0 border-0 bg-neutral-800" />

        <Link
          href={env.NEXT_PUBLIC_GITHUB_REPO_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Go to GitHub page"
        >
          <Image
            src="/github.svg"
            alt="GitHub"
            height={20}
            width={20}
            className="ml-2 size-5 object-contain"
          />
        </Link>
      </div>
    </header>
  )
}
