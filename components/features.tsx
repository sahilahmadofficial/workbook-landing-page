import {
  Zap,
  MousePointer,
  Calendar,
  ListOrdered,
  WifiOff,
  RefreshCw,
  GripVertical,
  Shield,
  Sparkles,
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Intelligent Priority Sorting",
    description: "Assign priorities through a clean dropdown selector with Urgent, Important, and Normal options. Tasks automatically organize themselves by priority.",
  },
  {
    icon: MousePointer,
    title: "Floating Button Interface",
    description: "Always-on-top draggable floating button that slides down a task panel without cluttering your screen.",
  },
  {
    icon: Calendar,
    title: "Past, Present, Future",
    description: "Organize tasks across three intelligent time-based categories for better planning and execution.",
  },
  {
    icon: ListOrdered,
    title: "Priority Levels",
    description: "Three clean priority levels with colored indicators and automatic task sorting to keep you focused.",
  },
  {
    icon: WifiOff,
    title: "Offline First",
    description: "Works perfectly offline and syncs automatically when online. Never lose your productivity momentum.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Sync",
    description: "Tasks stay updated across devices in real time. Start on desktop, continue on mobile seamlessly.",
  },
  {
    icon: GripVertical,
    title: "Drag & Drop",
    description: "Smooth drag-and-drop interactions with delightful animations for intuitive task management.",
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description: "Google Sign-In and email authentication for seamless syncing with enterprise-grade security.",
  },
  {
    icon: Sparkles,
    title: "Professional Experience",
    description: "Fast, smooth, distraction-free productivity experience designed for professionals.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything You Need to Stay Productive
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features wrapped in a minimal, distraction-free interface
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  return (
    <div className="group relative p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
        <feature.icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-semibold text-foreground text-lg mb-2">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
    </div>
  )
}
