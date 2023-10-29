import { type Viewport, type Metadata } from 'next';
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Ichsankurnia',
  description: 'Portfolio app ichsankurnia built with nextjs 13, tailwindcss, typescript',
  applicationName: 'Portfolio',
  keywords: ['portfolio', 'ichsankurnia', 'ories', "react", "server components", 'nextjs', 'nextjs 13', 'tailwindcss', 'typescript', 'work', 'project', 'experience'],
  // colorScheme: 'dark',
  // themeColor: [
  //   { media: "(prefers-color-scheme: dark)", color: "#000000" },
  //   { media: "(prefers-color-scheme: light)", color: "#ffffff" }
  // ],
  icons: [
    { rel: "icon", type: 'image/png', url: "/chigiri.png" },
    { rel: "apple-touch-icon", type: 'image/jpg', url: "/assets/img1.jpg" }
  ],
  generator: 'ichsankurnia',
  authors: [{ name: 'ichsankurnia', url: 'https://ories.goes2nobel.com' }],
  creator: 'ichsankurnia'
}

export const viewport: Viewport = {
  themeColor: '#091c29',
}

export default function RootLayout({
  children,
  uxModal
}: {
  children: React.ReactNode,
  uxModal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {uxModal}
      </body>
    </html>
  )
}
