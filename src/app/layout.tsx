import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Fine',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-full flex antialiased">{children}</body>
    </html>
  )
}
