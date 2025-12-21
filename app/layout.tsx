import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adelez - Artist Portfolio',
  description: 'Art portfolio showcasing paintings and creative works by Adelez',
  keywords: ['art', 'paintings', 'portfolio', 'artist', 'adelez'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
