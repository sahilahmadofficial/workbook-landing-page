import { Monitor, Apple, Globe, Smartphone, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const platforms = [
  {
    id: "windows",
    name: "Windows",
    icon: Monitor,
    available: true,
    formats: "Setup + Portable",
    button: "Download for Windows",
  },
  {
    id: "linux",
    name: "Linux",
    icon: Monitor,
    available: true,
    formats: "AppImage + DEB",
    button: "Download for Linux",
  },
  {
    id: "web",
    name: "Web Version",
    icon: Globe,
    available: true,
    formats: "Browser-based",
    button: "Open Web Version",
    external: true,
  },
  {
    id: "macos",
    name: "macOS",
    icon: Apple,
    available: false,
    formats: "Coming Soon",
    button: "Coming Soon",
  },
  {
    id: "android",
    name: "Android",
    icon: Smartphone,
    available: true,
    formats: "Play Store",
    button: "Get on Play Store",
    external: true,
  },
  {
    id: "ios",
    name: "iOS",
    icon: Smartphone,
    available: false,
    formats: "Coming Soon",
    button: "Coming Soon",
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

  return (
    <div className={`relative p-6 rounded-xl border transition-all ${
      platform.available 
        ? "bg-background border-border hover:border-primary/50 hover:shadow-lg" 
        : "bg-muted/50 border-border"
    }`}>
      {!platform.available && (
        <div className="absolute top-4 right-4 px-2 py-0.5 bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-medium rounded">
          Coming Soon
        </div>
      )}

      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
        platform.available ? "bg-accent" : "bg-muted"
      }`}>
        <Icon className={`w-7 h-7 ${platform.available ? "text-primary" : "text-muted-foreground"}`} />
      </div>

      <h3 className={`font-semibold text-lg mb-1 ${platform.available ? "text-foreground" : "text-muted-foreground"}`}>
        {platform.name}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{platform.formats}</p>

      <Button
        disabled={!platform.available}
        variant={platform.available ? "default" : "secondary"}
        className={`w-full ${platform.available ? "gradient-primary text-white hover:opacity-90" : ""}`}
      >
        {platform.available ? (
          platform.external ? (
            <>
              <ExternalLink className="w-4 h-4 mr-2" />
              {platform.button}
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              {platform.button}
            </>
          )
        ) : (
          platform.button
        )}
      </Button>
    </div>
  )
}
