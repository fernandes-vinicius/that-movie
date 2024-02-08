'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { useEffect, useState } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@/_components/ui/button'

interface Props {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage = 1, totalPages = 1 }: Props) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [page, setPage] = useState(currentPage)

  useEffect(() => {
    setPage(currentPage)
  }, [currentPage])

  function createPageURL(pageNumber: number | string) {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())

    return `${pathname}?${params.toString()}`
  }

  function handlePrevPage() {
    const pageUrl = createPageURL(page - 1)
    router.replace(pageUrl)
  }

  function handleNextPage() {
    const pageUrl = createPageURL(page + 1)
    router.replace(pageUrl)
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <p className="text-sm font-medium">{`${page} de ${totalPages}`}</p>

      <Button
        variant="outline"
        size="icon"
        aria-label="Prev"
        onClick={handlePrevPage}
        disabled={page === 1}
      >
        <ChevronLeftIcon className="size-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        aria-label="Next"
        onClick={handleNextPage}
        disabled={page === totalPages}
      >
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  )
}
