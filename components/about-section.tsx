import { Target, Zap, WifiOff, Globe, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const highlights = [
  { icon: Target, text: "Minimal interface" },
  { icon: Zap, text: "Intelligent prioritization" },
  { icon: WifiOff, text: "Offline-first" },
  { icon: Globe, text: "Cross-platform access" },
  { icon: Gauge, text: "Fast workflow" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Built for Productivity
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            WorkBook creates productivity software designed to help people stay organized through intelligent prioritization, distraction-free task management, and seamless syncing across all your devices.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {highlights.map((item) => (
              <div key={item.text} className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
