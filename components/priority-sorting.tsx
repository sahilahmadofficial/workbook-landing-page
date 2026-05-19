"use client"

import { useState, useEffect } from "react"

const beforeTasks = [
  { id: 1, text: "Update documentation", priority: "normal" as const },
  { id: 2, text: "Fix production bug", priority: "urgent" as const },
  { id: 3, text: "Read industry news", priority: "normal" as const },
  { id: 4, text: "Client presentation prep", priority: "urgent" as const },
  { id: 5, text: "Review pull requests", priority: "important" as const },
  { id: 6, text: "Plan sprint tasks", priority: "important" as const },
]

const afterTasks = [
  { id: 2, text: "Fix production bug", priority: "urgent" as const },
  { id: 4, text: "Client presentation prep", priority: "urgent" as const },
  { id: 5, text: "Review pull requests", priority: "important" as const },
  { id: 6, text: "Plan sprint tasks", priority: "important" as const },
  { id: 1, text: "Update documentation", priority: "normal" as const },
  { id: 3, text: "Read industry news", priority: "normal" as const },
]

export function PrioritySorting() {
  const [showAfter, setShowAfter] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Priority Sorting That Just Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop manually organizing tasks. Let WorkBook do it for you.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before */}
          <div className="bg-card rounded-2xl border border-border p-6 relative">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground">
              Before
            </div>
            <div className="space-y-3 mt-4">
              {beforeTasks.map((task) => (
                <TaskRow key={task.id} task={task} />
              ))}
            </div>
          </div>

          {/* After */}
          <div className="bg-card rounded-2xl border-2 border-primary/30 p-6 relative shadow-lg shadow-primary/5">
            <div className="absolute -top-3 left-6 px-3 py-1 gradient-primary rounded-full text-sm font-medium text-white">
              After
            </div>
            <div className="space-y-3 mt-4">
              {afterTasks.map((task, index) => (
                <TaskRow 
                  key={task.id} 
                  task={task} 
                  animated
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-muted-foreground mt-8 max-w-md mx-auto">
          Change task priority instantly and watch WorkBook organize everything automatically.
        </p>

        {/* Priority Legend */}
        <div className="flex justify-center gap-8 mt-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
            <span className="text-sm text-muted-foreground">Urgent</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
            <span className="text-sm text-muted-foreground">Important</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#9CA3AF]" />
            <span className="text-sm text-muted-foreground">Normal</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function TaskRow({ task, animated, delay = 0 }: { 
  task: typeof beforeTasks[0]
  animated?: boolean
  delay?: number
}) {
  const priorityColors = {
    urgent: "bg-[#EF4444]",
    important: "bg-[#F59E0B]",
    normal: "bg-[#9CA3AF]",
  }

  const priorityLabels = {
    urgent: "Urgent",
    important: "Important",
    normal: "Normal",
  }

  return (
    <div 
      className={`flex items-center gap-3 p-3 bg-muted/50 rounded-lg transition-all duration-500 ${
        animated ? "hover:bg-muted" : ""
      }`}
      style={animated ? { animationDelay: `${delay}ms` } : undefined}
    >
      <div className={`w-3 h-3 rounded-full flex-shrink-0 ${priorityColors[task.priority]}`} />
      <span className="text-foreground text-sm font-medium flex-1">{task.text}</span>
      <span className="text-xs text-muted-foreground hidden sm:block">{priorityLabels[task.priority]}</span>
    </div>
  )
}
