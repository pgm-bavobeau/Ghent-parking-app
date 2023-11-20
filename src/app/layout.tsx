import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'


export const metadata: Metadata = {
  title: 'Ghent parking app',
  description: 'Ghent parking app created by Bavo Beaumon for Lynx Ghent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar /> 
        {children}
      </body>
    </html>
  )
}
