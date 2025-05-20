import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'G Weaver Portfolio',
  description: 'Garrett Weaver - Portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
