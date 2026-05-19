"use client"

import { useRef, useState, useEffect } from "react"
import { Play, Pause, Maximize2, Volume2, VolumeX } from "lucide-react"

export function LiveDemo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [controlsVisible, setControlsVisible] = useState(false)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Clear and set a timeout to hide controls
  const scheduleHideControls = () => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    hideTimeoutRef.current = setTimeout(() => {
      setControlsVisible(false)
    }, 3000)
  }

  // Show controls and reset auto‑hide timer
  const showControls = () => {
    setControlsVisible(true)
    scheduleHideControls()
  }

  // Cancel auto‑hide when user interacts with controls
  const keepControlsVisible = () => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
  }

  // Re‑start auto‑hide after leaving controls
  const restartHideTimer = () => {
    if (controlsVisible) scheduleHideControls()
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    }
  }, [])

  // Autoplay when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true)
          setIsMuted(true)
        })
        .catch((err) => {
          console.log("Autoplay prevented:", err)
          setIsPlaying(false)
        })
    }
  }, [])

  // Play/Pause from the button
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
    // Keep controls visible after interacting
    keepControlsVisible()
    scheduleHideControls()
  }

  // Update progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(percent)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  // Seek
  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const width = rect.width
      const percent = clickX / width
      videoRef.current.currentTime = percent * videoRef.current.duration
    }
    keepControlsVisible()
    scheduleHideControls()
  }

  // Mute / Unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
    keepControlsVisible()
    scheduleHideControls()
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      videoRef.current.muted = newVolume === 0
      setIsMuted(newVolume === 0)
    }
    keepControlsVisible()
    scheduleHideControls()
  }

  // Fullscreen
  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
    keepControlsVisible()
    scheduleHideControls()
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  // Click on video container toggles controls
  const handleVideoContainerClick = () => {
    if (controlsVisible) {
      setControlsVisible(false)
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    } else {
      showControls()
    }
  }

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

        {/* Video Player Container */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="relative aspect-video bg-foreground/5 rounded-2xl overflow-hidden border border-border shadow-2xl cursor-pointer"
            onClick={handleVideoContainerClick}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/workbook-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Controls Bar – visible only when controlsVisible is true */}
            {controlsVisible && (
              <div
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent"
                onMouseEnter={keepControlsVisible}
                onMouseLeave={restartHideTimer}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>

                  <div
                    className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer"
                    onClick={seek}
                  >
                    <div
                      className="h-full bg-white transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <span className="text-white text-sm font-medium">
                    {duration ? formatTime((progress / 100) * duration) : "0:00"}
                  </span>

                  <div className="flex items-center gap-2">
                    <button onClick={toggleMute} className="text-white hover:text-white/80">
                      {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-white/30 rounded-full accent-white"
                    />
                  </div>

                  <button onClick={toggleFullscreen} className="text-white hover:text-white/80">
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Demo Highlights */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <DemoHighlight icon="🎯" title="Priority Selection" description="Clean dropdown with colored indicators" />
          <DemoHighlight icon="⚡" title="Auto Sorting" description="Tasks organize instantly by priority" />
          <DemoHighlight icon="☁️" title="Real-time Sync" description="Changes sync across all devices" />
        </div>
      </div>
    </section>
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