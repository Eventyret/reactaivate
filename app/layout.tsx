import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ModalProvider } from '@/temp/components/modal-provider'
import { ToasterProvider } from '@/temp/components/toaster-provider'
import { CrispProvider } from '@/temp/components/crisp-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ReactAIvate',
  description: 'An AI Platform for fun and profit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />

          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
