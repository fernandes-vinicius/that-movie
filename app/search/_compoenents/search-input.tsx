'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { useEffect, useState } from 'react'

import { useDebouncedCallback } from 'use-debounce'

import { Input } from '@/_components/ui/input'

export function SearchInput() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [inputValue, setInputValue] = useState('')

  // Set default value from search params
  useEffect(() => {
    const query = searchParams.get('q')
    setInputValue(query || '')
  }, [searchParams])

  const handleSearch = useDebouncedCallback((value: string) => {
    const term = value.trimStart()

    setInputValue(term)

    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('q', term)
    } else {
      params.delete('q')
    }

    router.replace(`${pathname}?${params.toString()}`)
  }, 1000 /* delay in ms */)

  return (
    <form>
      <Input
        name="q"
        type="text"
        aria-label="Search movie"
        autoFocus
        autoComplete="off"
        placeholder="Busque filmes por título, gênero..."
        defaultValue={inputValue}
        onChange={(e) => handleSearch(e.target.value)}
        className="h-12"
      />
    </form>
  )
}
