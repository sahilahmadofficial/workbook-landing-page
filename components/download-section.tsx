"use client"

import { Monitor, Apple, Globe, Smartphone, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const platforms = [
  {
    id: "windows",
    name: "Windows",
    icon: Monitor,
    available: true,
    formats: "Setup",                     // removed " + Portable"
    button: "Download for Windows",
    downloadUrl: "/api/download/WorkBook-Setup.exe",
    external: false,
  },
  {
    id: "linux",
    name: "Linux",
    icon: Monitor,
    available: true,
    formats: "DEB",                       // removed "AppImage + "
    button: "Download for Linux",
    downloadUrl: "/api/download/WorkBook.deb",   // now points to DEB
    external: false,
  },
  {
    id: "web",
    name: "Web Version",
    icon: Globe,
    available: true,
    formats: "Browser-based",
    button: "Open Web Version",
    downloadUrl: "https://your-web-app.vercel.app",   // replace with your actual web app URL
    external: true,
  },
  {
    id: "macos",
    name: "macOS",
    icon: Apple,
    available: false,
    formats: "Coming Soon",
    button: "Coming Soon",
    downloadUrl: null,
  },
  {
    id: "android",
    name: "Android",
    icon: Smartphone,
    available: true,
    formats: "Play Store",
    button: "Get on Play Store",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.yourapp", // replace with your Play Store ID
    external: true,
  },
  {
    id: "ios",
    name: "iOS",
    icon: Smartphone,
    available: false,
    formats: "Coming Soon",
    button: "Coming Soon",
    downloadUrl: null,
  },
]

export function DownloadSection() {
  return (
    <section id="download" className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Download WorkBook
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Available on major platforms. Start organizing your tasks today.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform) => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 text-sm">
          Windows, Linux, Web, and Android are available now. macOS and iOS support are coming soon.
        </p>
      </div>
    </section>
  )
}

function PlatformCard({ platform }: { platform: typeof platforms[0] }) {
  const Icon = platform.icon
  const isAvailable = platform.available
  const isExternal = platform.external
  const url = platform.downloadUrl

  // Unavailable platforms
  if (!isAvailable) {
    return (
      <div className="relative p-6 rounded-xl border bg-muted/50 border-border">
        <div className="absolute top-4 right-4 px-2 py-0.5 bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-medium rounded">
          Coming Soon
        </div>
        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-muted mb-4">
          <Icon className="w-7 h-7 text-muted-foreground" />
        </div>
        <h3 className="font-semibold text-lg mb-1 text-muted-foreground">{platform.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{platform.formats}</p>
        <Button disabled variant="secondary" className="w-full">
          {platform.button}
        </Button>
      </div>
    )
  }

  // Available platform: render a link
  const buttonContent = (
    <Button variant="default" className="w-full gradient-primary text-white hover:opacity-90">
      {isExternal ? (
        <>
          <ExternalLink className="w-4 h-4 mr-2" />
          {platform.button}
        </>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2" />
          {platform.button}
        </>
      )}
    </Button>
  )

  return (
    <div className="relative p-6 rounded-xl border bg-background border-border hover:border-primary/50 hover:shadow-lg transition-all">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-accent mb-4">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-semibold text-lg mb-1 text-foreground">{platform.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{platform.formats}</p>

      {isExternal ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </a>
      ) : (
        <a href={url} download>
          {buttonContent}
        </a>
      )}
    </div>
  )
}