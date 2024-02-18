'use client'

import { useRouter } from 'next/navigation'

import { ArrowLeftIcon } from 'lucide-react'

import { Button } from '@/_components/ui/button'

export function BackButton() {
  const router = useRouter()

  function handleBack() {
    router.back()
  }

  return (
    <Button
      title="Voltar"
      aria-label="Go back"
      variant="secondary"
      onClick={handleBack}
    >
      <ArrowLeftIcon className="size-4" />
      <span>Voltar</span>
    </Button>
  )
}
