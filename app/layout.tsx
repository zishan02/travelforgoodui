import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import React, { useState } from 'react'
import BottomBody from '@/components/bottombody'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Travel For Good',
  description: 'A next gen Travel destination',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <BottomBody/>
        <Footer />
        </body>
      
    </html>
  )
}
