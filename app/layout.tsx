import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Mohan Singh Rajawat | Backend Developer',
  description: 'Backend/Full Stack Developer with 3+ years of experience building scalable web applications using Laravel, Node.js, and cloud technologies.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.png?v=2',
        type: 'image/png',
      },
      {
        url: '/favicon.ico?v=2',
        sizes: 'any',
      },
      {
        url: '/icon.png?v=2',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: '/apple-icon.png?v=2',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${jetbrainsMono.className} antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
