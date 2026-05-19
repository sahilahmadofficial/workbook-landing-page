"use client"

import { useState } from "react"
import { ChevronDown, Monitor, Apple, Download, Globe, Play, X, Flag, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const platforms = [
  { id: "windows", name: "Windows", icon: Monitor, available: true, label: "Download for Windows" },
  { id: "linux", name: "Linux", icon: Monitor, available: true, label: "Download for Linux" },
  { id: "macos", name: "macOS", icon: Apple, available: false, label: "Coming Soon" },
]

export function Hero() {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0])
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/5 to-[#7C3AED]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#7C3AED]/5 to-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
              WorkBook — Your Tasks,{" "}
              <span className="gradient-text">Perfectly Organized</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0">
              A minimal, professional task manager with intelligent priority sorting. Sync across devices, stay productive offline, and focus on what matters most.
            </p>

            {/* CTA Area */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              {/* OS Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-between w-full sm:w-44 px-4 py-2.5 bg-card border border-border rounded-lg text-foreground hover:border-primary/50 transition-colors text-sm"
                >
                  <div className="flex items-center gap-2">
                    <selectedPlatform.icon className="w-4 h-4" />
                    <span className="font-medium">{selectedPlatform.name}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-10">
                    {platforms.map((platform) => (
                      <button
                        key={platform.id}
                        onClick={() => {
                          setSelectedPlatform(platform)
                          setDropdownOpen(false)
                        }}
                        className={`flex items-center justify-between w-full px-4 py-2.5 hover:bg-muted transition-colors text-sm ${
                          selectedPlatform.id === platform.id ? "bg-accent" : ""
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <platform.icon className="w-4 h-4" />
                          <span className="font-medium">{platform.name}</span>
                        </div>
                        {!platform.available && (
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">Soon</span>
                        )}
                        {selectedPlatform.id === platform.id && (
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Primary Download Button */}
              <Button
                disabled={!selectedPlatform.available}
                className={`gradient-primary text-white hover:opacity-90 transition-all ${
                  !selectedPlatform.available ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-0.5"
                }`}
              >
                <Download className="w-4 h-4 mr-2" />
                {selectedPlatform.label}
              </Button>
            </div>

            {/* Secondary CTAs */}
            <div className="mt-3 flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
              <Button variant="outline" size="sm" className="border-border text-sm">
                <Globe className="w-4 h-4 mr-2" />
                Use Web Version
              </Button>
              <Button variant="outline" size="sm" className="border-border text-sm">
                <Play className="w-4 h-4 mr-2" />
                Get on Play Store
              </Button>
            </div>

            {/* Platform Availability */}
            <div className="mt-6 text-sm text-muted-foreground space-y-1">
              <p className="flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] flex-shrink-0" />
                Available: Windows, Linux, Web, Android
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] flex-shrink-0" />
                Coming Soon: macOS, iOS
              </p>
            </div>
          </div>

          {/* Right side - App Mockup */}
          <div className="relative mt-8 lg:mt-0 flex justify-center">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroMockup() {
  return (
    <div className="relative w-full max-w-[320px] lg:max-w-[360px]">
      {/* Main app panel - matching WorkBook design */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 flex items-center justify-between">
          <span className="font-bold text-lg gradient-text">WorkBook</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-semibold">
              SA
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tabs: Past / Present / Future */}
        <div className="px-4 flex items-center justify-center gap-2 py-2">
          <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Past
          </button>
          <button className="px-6 py-2 text-sm font-medium text-white bg-primary rounded-full">
            Present
          </button>
          <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Future
          </button>
        </div>

        {/* Section Title */}
        <div className="px-4 pt-4 pb-2">
          <h3 className="font-bold text-xl text-gray-900">Present</h3>
          <p className="text-sm text-gray-500">Current focus</p>
        </div>

        {/* Add Task Input */}
        <div className="px-4 py-2">
          <div className="flex items-center gap-3 px-4 py-3 border-2 border-primary/30 rounded-xl bg-white">
            <div className="w-5 h-5 rounded-full border-2 border-primary/40 flex-shrink-0" />
            <span className="text-gray-400 text-sm">Type here to add a task...</span>
          </div>
        </div>

        {/* Task List */}
        <div className="px-4 py-2 space-y-2">
          <TaskItem 
            text="Prepare for Computer Networks Exam" 
            priority="urgent" 
            showDropdown 
          />
          <TaskItem text="Fix bugs in the project" priority="urgent" />
          <TaskItem text="Solve 3 LeetCode Problems" priority="important" />
          <TaskItem text="Do the dishes" priority="normal" />
        </div>

        {/* Premium Banner */}
        <div className="mx-4 mb-4 mt-2 bg-gradient-to-r from-[#7C3AED] to-[#9333EA] rounded-xl p-3 flex items-center gap-3">
          <div className="w-8 h-8 flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white text-sm">WorkBook Premium</p>
            <p className="text-xs text-white/80 truncate">Unlimited tasks • Cloud sync • Priority support</p>
          </div>
          <button className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-medium rounded-lg transition-colors flex-shrink-0">
            Upgrade
          </button>
          <button className="text-white/60 hover:text-white flex-shrink-0">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Priority Dropdown Overlay */}
      <div className="absolute right-0 top-[200px] lg:top-[220px] bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[140px] z-10">
        <PriorityOption priority="urgent" label="Urgent" active />
        <PriorityOption priority="important" label="Important" />
        <PriorityOption priority="normal" label="Normal" />
      </div>
    </div>
  )
}

function TaskItem({ 
  text, 
  priority, 
  showDropdown 
}: { 
  text: string
  priority: "urgent" | "important" | "normal"
  showDropdown?: boolean 
}) {
  const priorityColors = {
    urgent: "bg-[#EF4444]",
    important: "bg-[#F59E0B]",
    normal: "bg-[#6B7280]",
  }

  return (
    <div className={`flex items-center gap-2 px-3 py-3 bg-white border border-gray-100 rounded-xl ${showDropdown ? "ring-2 ring-primary/20" : ""}`}>
      <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0" />
      <span className="text-gray-800 text-sm flex-1 min-w-0 truncate">{text}</span>
      <div className="flex items-center gap-1 flex-shrink-0">
        <button className="flex items-center gap-0.5 p-1 hover:bg-gray-100 rounded transition-colors">
          <div className={`w-2.5 h-2.5 rounded-full ${priorityColors[priority]}`} />
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
          <Flag className="w-3.5 h-3.5 text-gray-400" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
          <X className="w-3.5 h-3.5 text-gray-400" />
        </button>
      </div>
    </div>
  )
}

function PriorityOption({ 
  priority, 
  label, 
  active 
}: { 
  priority: "urgent" | "important" | "normal"
  label: string
  active?: boolean 
}) {
  const priorityColors = {
    urgent: "bg-[#EF4444]",
    important: "bg-[#F59E0B]",
    normal: "bg-[#6B7280]",
  }

  return (
    <div className={`flex items-center gap-3 px-4 py-2 cursor-pointer transition-colors ${active ? "bg-gray-50" : "hover:bg-gray-50"}`}>
      <div className={`w-3 h-3 rounded-full flex-shrink-0 ${priorityColors[priority]}`} />
      <span className={`flex-1 text-sm ${active ? "text-gray-900 font-medium" : "text-gray-700"}`}>{label}</span>
      {active && (
        <Check className="w-4 h-4 text-primary flex-shrink-0" />
      )}
    </div>
  )
}
