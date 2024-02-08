import { LogoSvg } from '@/_components/logo-svg'

export function Footer() {
  return (
    <footer className="my-16 flex items-center justify-between">
      <p className="text-sm leading-none text-gray-700">
        Copyright &copy; {new Date().getFullYear()}
      </p>
      <LogoSvg className="opacity-25 contrast-50 grayscale filter" />
    </footer>
  )
}
