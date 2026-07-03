"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function TimeBasedTheme() {
  const { setTheme } = useTheme()

  useEffect(() => {
    // Check if the user has explicitly selected a theme before
    const storedTheme = localStorage.getItem("theme")
    
    // If no explicit preference (or it's set to system default), apply time-based logic
    if (!storedTheme || storedTheme === "system") {
      const currentHour = new Date().getHours()
      // Define day time as between 6:00 AM and 6:00 PM (18:00)
      const isDayTime = currentHour >= 6 && currentHour < 18
      
      setTheme(isDayTime ? "light" : "dark")
    }
  }, [setTheme])

  return null
}
