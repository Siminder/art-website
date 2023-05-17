"use client"
import './globals.css'
import { Montserrat_Alternates } from 'next/font/google';




const montserrat_Alternates = Montserrat_Alternates({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  style: 'italic',

})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat_Alternates.className}>
      <body >{children}</body>
    </html>
  )
}
