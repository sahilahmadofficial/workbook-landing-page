"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const screenshots = [
  {
    id: 1,
    title: "Floating Button Interface",
    description: "Always accessible, never in the way",
    image: "/screenshots/floating-button.png",
  },
  {
    id: 2,
    title: "Priority Dropdown UI",
    description: "Clean, intuitive priority selection",
    image: "/screenshots/priority-dropdown.png",
  },
  {
    id: 3,
    title: "Auto Sorting",
    description: "Tasks organized by priority automatically",
    image: "/screenshots/auto-sorting.png",
  },
  {
    id: 4,
    title: "Authentication Screen",
    description: "Secure sign-in options",
    image: "/screenshots/auth.png",
  },
  {
    id: 5,
    title: "Drag & Drop",
    description: "Smooth reordering experience",
    image: "/screenshots/drag-drop.png",
  },
  {
    id: 6,
    title: "Cross Platform Sync",
    description: "Your tasks, everywhere",
    image: "/screenshots/sync.png",
  },
]

export function Screenshots() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="screenshots" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Beautiful Design, Powerful Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Clean, professional interface designed for productivity
          </p>
        </div>

        {/* Screenshot Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <ScreenshotCard
              key={screenshot.id}
              screenshot={screenshot}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <Lightbox
            screenshots={screenshots}
            currentIndex={selectedImage}
            onClose={() => setSelectedImage(null)}
            onPrev={() => setSelectedImage((selectedImage - 1 + screenshots.length) % screenshots.length)}
            onNext={() => setSelectedImage((selectedImage + 1) % screenshots.length)}
          />
        )}
      </div>
    </section>
  )
}

// FIXED: Changed from <button> to <div> with role="button" to avoid nested buttons
function ScreenshotCard({ screenshot, onClick }: { screenshot: typeof screenshots[0]; onClick: () => void }) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer"
    >
      <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
        <ScreenshotPlaceholder title={screenshot.title} />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
          {screenshot.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{screenshot.description}</p>
      </div>
    </div>
  )
}

function ScreenshotPlaceholder({ title }: { title: string }) {
  // Generate unique placeholder based on title
  if (title.includes("Priority")) {
    return <PriorityDropdownMockup />
  }
  if (title.includes("Floating")) {
    return <FloatingButtonMockup />
  }
  if (title.includes("Sorting")) {
    return <AutoSortingMockup />
  }
  if (title.includes("Auth")) {
    return <AuthMockup />
  }
  if (title.includes("Drag")) {
    return <DragDropMockup />
  }
  return <SyncMockup />
}

function PriorityDropdownMockup() {
  return (
    <div className="p-4 w-full">
      <div className="bg-card rounded-lg shadow-md border border-border p-2 max-w-[180px] mx-auto">
        <div className="text-xs text-muted-foreground px-2 py-1 mb-1">Priority</div>
        <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-accent">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
          <span className="text-xs text-primary font-medium">Urgent</span>
          <svg className="w-3 h-3 text-primary ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <span className="text-xs text-foreground">Important</span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded">
          <div className="w-2.5 h-2.5 rounded-full bg-[#9CA3AF]" />
          <span className="text-xs text-foreground">Normal</span>
        </div>
      </div>
    </div>
  )
}

function FloatingButtonMockup() {
  return (
    <div className="relative w-full h-full flex items-end justify-end p-4">
      <div className="w-12 h-12 rounded-xl gradient-primary shadow-lg flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
    </div>
  )
}

function AutoSortingMockup() {
  return (
    <div className="p-4 w-full">
      <div className="space-y-1.5 max-w-[200px] mx-auto">
        <div className="flex items-center gap-2 p-2 bg-card rounded border border-border">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
          <span className="text-xs text-foreground">Urgent task</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-card rounded border border-border">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
          <span className="text-xs text-foreground">Critical fix</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-card rounded border border-border">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <span className="text-xs text-foreground">Important work</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-card rounded border border-border">
          <div className="w-2.5 h-2.5 rounded-full bg-[#9CA3AF]" />
          <span className="text-xs text-foreground">Normal task</span>
        </div>
      </div>
    </div>
  )
}

function AuthMockup() {
  return (
    <div className="p-4 w-full">
      <div className="bg-card rounded-lg shadow-md border border-border p-4 max-w-[180px] mx-auto">
        <h4 className="text-xs font-medium text-foreground text-center mb-3">Sign In</h4>
        <div className="space-y-2">
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-border rounded text-xs">
            <svg className="w-3 h-3" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            </svg>
            Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-border rounded text-xs">
            Email
          </button>
        </div>
      </div>
    </div>
  )
}

function DragDropMockup() {
  return (
    <div className="p-4 w-full">
      <div className="space-y-1.5 max-w-[200px] mx-auto">
        <div className="flex items-center gap-2 p-2 bg-card rounded border border-border">
          <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
          <span className="text-xs text-foreground">Task one</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-accent rounded border-2 border-primary border-dashed">
          <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
          <span className="text-xs text-primary font-medium">Dragging...</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-card rounded border border-border">
          <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
          <span className="text-xs text-foreground">Task three</span>
        </div>
      </div>
    </div>
  )
}

function SyncMockup() {
  return (
    <div className="p-4 w-full flex items-center justify-center gap-4">
      <div className="w-10 h-14 bg-card rounded border border-border flex items-center justify-center">
        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="flex flex-col items-center">
        <svg className="w-5 h-5 text-primary animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        <span className="text-[10px] text-muted-foreground mt-1">Syncing</span>
      </div>
      <div className="w-16 h-10 bg-card rounded border border-border flex items-center justify-center">
        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  )
}

function Lightbox({ screenshots, currentIndex, onClose, onPrev, onNext }: {
  screenshots: typeof screenshots
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const current = screenshots[currentIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-foreground/90 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative z-10 w-full max-w-4xl mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="bg-card rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-muted flex items-center justify-center">
            <ScreenshotPlaceholder title={current.title} />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-foreground">{current.title}</h3>
            <p className="text-muted-foreground mt-1">{current.description}</p>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={onPrev}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <span className="text-white/60">
            {currentIndex + 1} / {screenshots.length}
          </span>
          <button
            onClick={onNext}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}