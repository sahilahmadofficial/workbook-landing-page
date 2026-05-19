import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'WorkBook — Your Tasks, Perfectly Organized',
  description: 'A minimal, professional task manager with intelligent priority sorting. Sync across devices, stay productive offline, and focus on what matters most.',
  keywords: ['task manager', 'productivity', 'priority sorting', 'offline-first', 'cross-platform'],
  authors: [{ name: 'WorkBook' }],
  creator: 'WorkBook',
  openGraph: {
    title: 'WorkBook — Your Tasks, Perfectly Organized',
    description: 'A minimal, professional task manager with intelligent priority sorting.',
    type: 'website',
    siteName: 'WorkBook',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WorkBook — Your Tasks, Perfectly Organized',
    description: 'A minimal, professional task manager with intelligent priority sorting.',
  },
  // Optional: add icons metadata (Next.js can also auto-detect from public/)
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#4F46E5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}