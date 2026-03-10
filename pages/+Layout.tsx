import React from 'react'
import { Header } from '../src/components/Header'
import { Footer } from '../src/components/Footer'
import { useData } from 'vike-react/useData'
import '../src/index.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  const data = useData() as any;
  const siteSettings = data?.siteSettings || {};

  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      <Header {...siteSettings.header} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer {...siteSettings.footer} />
    </div>
  )
}
