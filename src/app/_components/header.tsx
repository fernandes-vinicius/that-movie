import Image from 'next/image'
import Link from 'next/link'

import { HomeIcon, SearchIcon } from 'lucide-react'

import { LogoSvg } from '@/_components/logo-svg'
import { Button } from '@/_components/ui/button'
import { Separator } from '@/_components/ui/separator'

const githubUrl = 'https://github.com/fernandes-vinicius/that-movie-lab'

export function Header() {
  return (
    <header className="grid grid-cols-2 grid-rows-[100px] items-center gap-5">
      <div>
        <Link href="/" aria-label="Back to home" className="inline-block">
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

        <Separator orientation="vertical" className="mx-3 min-h-5" />

        <Link
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Go to github"
        >
          <Image
            src="/github.svg"
            alt="Github"
            height={20}
            width={20}
            className="ml-2 object-contain"
          />
        </Link>
      </div>
    </header>
  )
}
