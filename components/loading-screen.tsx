"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Wait for the window to load completely (images, fonts, etc.)
    const handleLoad = () => {
      // Add a slight delay for aesthetic reasons so it doesn't flash too fast
      setTimeout(() => setLoading(false), 800)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    // Fallback just in case load event already fired or fails
    const fallbackTimer = setTimeout(() => setLoading(false), 2000)

    return () => {
      window.removeEventListener("load", handleLoad)
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-700 ease-in-out ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated geometric loader */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-muted"></div>
          <div className="absolute inset-0 rounded-full border-4 border-brand border-t-transparent animate-spin"></div>
          <div className="absolute inset-3 rounded-full border-4 border-brand/30 border-b-transparent animate-[spin_1.5s_linear_infinite_reverse]"></div>
        </div>
        <p className="font-mono text-sm tracking-widest text-muted-foreground animate-pulse uppercase">
          Loading
        </p>
      </div>
    </div>
  )
}
