"use client"

import { useState } from "react"
import { Play, Pause, Maximize2, Volume2 } from "lucide-react"

export function LiveDemo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="demo" className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            See WorkBook in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how intelligent priority sorting keeps your most important tasks visible.
          </p>
        </div>

        {/* Video Player */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video bg-foreground/5 rounded-2xl overflow-hidden border border-border shadow-2xl">
            {/* Video placeholder with animated demo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <DemoAnimation isPlaying={isPlaying} />
            </div>

            {/* Play overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 backdrop-blur-sm">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
              </div>
            )}

            {/* Controls bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:text-white/80 transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                {/* Timeline */}
                <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className={`h-full gradient-primary transition-all duration-1000 ${isPlaying ? "w-2/3" : "w-0"}`} />
                </div>

                <span className="text-white text-sm font-medium">1:24</span>

                <button className="text-white hover:text-white/80 transition-colors">
                  <Volume2 className="w-5 h-5" />
                </button>

                <button className="text-white hover:text-white/80 transition-colors">
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Demo highlights */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <DemoHighlight icon="🎯" title="Priority Selection" description="Clean dropdown with colored indicators" />
          <DemoHighlight icon="⚡" title="Auto Sorting" description="Tasks organize instantly by priority" />
          <DemoHighlight icon="☁️" title="Real-time Sync" description="Changes sync across all devices" />
        </div>
      </div>
    </section>
  )
}

function DemoAnimation({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="w-full h-full p-8 flex items-center justify-center">
      <div className={`transition-opacity duration-500 ${isPlaying ? "opacity-100" : "opacity-50"}`}>
        <div className="bg-card rounded-xl shadow-lg border border-border p-6 w-80">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-foreground text-sm">Present</h4>
            <span className="text-xs text-muted-foreground">Today</span>
          </div>
          
          <div className="space-y-2">
            <AnimatedTask priority="urgent" text="Fix critical bug" delay={0} isPlaying={isPlaying} />
            <AnimatedTask priority="important" text="Team meeting prep" delay={200} isPlaying={isPlaying} />
            <AnimatedTask priority="important" text="Code review" delay={400} isPlaying={isPlaying} />
            <AnimatedTask priority="normal" text="Update docs" delay={600} isPlaying={isPlaying} />
          </div>
        </div>
      </div>
    </div>
  )
}

function AnimatedTask({ priority, text, delay, isPlaying }: { priority: "urgent" | "important" | "normal"; text: string; delay: number; isPlaying: boolean }) {
  const priorityColors = {
    urgent: "bg-[#EF4444]",
    important: "bg-[#F59E0B]",
    normal: "bg-[#9CA3AF]",
  }

  return (
    <div 
      className={`flex items-center gap-2 p-2 bg-muted/50 rounded-lg transition-all duration-500`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: isPlaying ? "translateX(0)" : "translateX(-10px)",
        opacity: isPlaying ? 1 : 0.7
      }}
    >
      <div className={`w-2.5 h-2.5 rounded-full ${priorityColors[priority]}`} />
      <span className="text-foreground text-xs">{text}</span>
    </div>
  )
}

function DemoHighlight({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-4">
      <div className="text-2xl mb-2">{icon}</div>
      <h4 className="font-medium text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
  )
}
