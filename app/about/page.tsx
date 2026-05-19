import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Users, Lightbulb, Heart, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - WorkBook",
  description: "Learn about WorkBook, our mission, and why we built the most intuitive task management app.",
}

const values = [
  {
    icon: Target,
    title: "Focused Simplicity",
    description: "We believe productivity tools should help you focus, not distract. Every feature in WorkBook is designed with intentional simplicity.",
  },
  {
    icon: Users,
    title: "User-Centered Design",
    description: "Built by productivity enthusiasts, for productivity enthusiasts. We use WorkBook every day and constantly refine it based on real usage.",
  },
  {
    icon: Lightbulb,
    title: "Intelligent by Default",
    description: "Smart features that work automatically, like priority-based sorting, so you spend less time organizing and more time doing.",
  },
  {
    icon: Heart,
    title: "Privacy First",
    description: "Your tasks are your business. WorkBook works offline-first and we never sell your data. Your productivity is private.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Built for People Who{" "}
                <span className="gradient-text">Get Things Done</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                WorkBook started from a simple frustration: existing task managers were either too complex or too basic. We built something better.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  The WorkBook Story
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    WorkBook was born from a developer&apos;s daily struggle with task management. Every existing solution felt like it was designed by committee—bloated with features nobody asked for, while missing the basics that actually matter.
                  </p>
                  <p>
                    We wanted something different: a task manager that stays out of your way while keeping you organized. Something that understands priorities aren&apos;t just labels—they&apos;re the key to actually getting important work done.
                  </p>
                  <p>
                    That&apos;s why we built intelligent priority sorting at the core. Set your priorities once, and WorkBook automatically keeps your most important tasks visible. No manual reordering. No complex workflows. Just focus.
                  </p>
                </div>
              </div>
              <div className="bg-muted rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">The Problem</h4>
                      <p className="text-sm text-muted-foreground">Too many task apps, none that felt right</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">The Insight</h4>
                      <p className="text-sm text-muted-foreground">Priority should drive organization</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">The Solution</h4>
                      <p className="text-sm text-muted-foreground">WorkBook: minimal, intelligent, fast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Our Principles
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                The values that guide everything we build
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-card">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Our Mission
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              To help professionals stay organized with minimal effort. We believe the best productivity tool is one you barely notice—it just works, keeps you focused, and gets out of your way.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-3xl p-12 lg:p-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
                Ready to Get Organized?
              </h2>
              <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                Join thousands of professionals who trust WorkBook to manage their tasks.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/#download">
                    Download WorkBook
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
