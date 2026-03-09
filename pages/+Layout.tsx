import React from 'react'
import { Header } from '../src/components/Header'
import { Footer } from '../src/components/Footer'
import '../src/index.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
