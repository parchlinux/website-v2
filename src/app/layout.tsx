import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: 'Parch Linux',
  description: 'Parch Linux os',
}

interface Props {
  children: ReactNode,
}


export default function LocaleLayout({ children }: Props) {
  return (
    <html>
      <body className="min-h-dvh scroll-smooth overflow-x-hidden bg-black flex flex-col font-Roboto relative">
        {children}
      </body>
    </html>
  )
}