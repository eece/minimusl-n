import React from 'react'
import { Header } from '../src/components/Header'
import { Footer } from '../src/components/Footer'
import { useData } from 'vike-react/useData'
import '../src/index.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  const data = useData() as any;
  const siteSettings = data?.siteSettings || {};

  // Map WordPress ACF fields to Header props
  const headerProps = {
    logoText: siteSettings.metin,
    logoImage: siteSettings.logo,
    navLinks: siteSettings.menu?.map((item: any) => ({
      name: item.menu_text,
      href: item.menu_link
    })),
    shopLink: siteSettings.magaza_linki,
    whatsappLink: siteSettings.whatsapp_linki
  };

  // Map WordPress ACF fields to Footer props
  const footerProps = {
    widget1: siteSettings.widget_1,
    widget2: siteSettings.widget_2,
    widget3: siteSettings.widget_3,
    kaliteStandartlarimiz: siteSettings.kalite_standartlarimiz,
    minimuslinDunyasiniKesfedin: siteSettings.minimuslin_dunyasini_kesfedin
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      <Header {...headerProps} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer {...footerProps} />
    </div>
  )
}
