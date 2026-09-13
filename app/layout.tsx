import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Funnel_Sans } from 'next/font/google'
import './globals.css'

const funnelSans = Funnel_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-funnel-sans',
})

export const metadata: Metadata = {
  title: 'Achievers Classes | JEE, NEET & Foundation Coaching',
  description:
    'Achievers Classes is an elite coaching institute transforming potential into top ranks. Expert faculty, proven results, and personal mentorship for JEE Main/Advanced, NEET, and Foundation (Class 8–10).',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#E11D48',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={funnelSans.variable}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
