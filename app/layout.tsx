import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Runway Alerter — Get alerts before your startup runs out of money',
  description: 'Connects to your bank accounts and burn rate to send increasingly urgent alerts as your runway shortens. Never be caught off guard again.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="52500bdb-021c-4214-a34f-382fd770bb6f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
