import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from "react"
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Parch Linux',
  description: 'Parch Linux os',
}

interface Props {
  children: ReactNode,
  params: { locale: string }
}


export default function LocaleLayout({ children, params }: Props) {

  const messages = useMessages();
  const t = useTranslations('Index');

  return (
    <html lang={params.locale}>
      <body className="min-h-dvh scroll-smooth overflow-x-hidden bg-black flex flex-col font-Roboto">
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}