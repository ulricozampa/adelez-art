import './globals.css'
import type { Metadata } from 'next'
import Header from './components/header'

export const metadata: Metadata = {
  title: 'Adelez - Simona Zampa Portfolio',
  description: 'Art portfolio showcasing paintings and creative works',
  keywords: ['art', 'paintings', 'portfolio', 'artist', 'adelez'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  )
}