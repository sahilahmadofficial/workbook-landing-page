import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LiveDemo } from "@/components/live-demo"
import { Screenshots } from "@/components/screenshots"
import { Features } from "@/components/features"
import { PrioritySorting } from "@/components/priority-sorting"
import { DownloadSection } from "@/components/download-section"
import { AboutSection } from "@/components/about-section"
import { FAQ } from "@/components/faq"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LiveDemo />
        <Screenshots />
        <Features />
        <PrioritySorting />
        <DownloadSection />
        <AboutSection />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
