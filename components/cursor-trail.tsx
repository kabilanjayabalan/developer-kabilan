"use client"

import { useEffect, useRef } from "react"

/**
 * A smooth, flexible "shadow tail" cursor effect.
 * A main dot follows the pointer instantly while a chain of multiple
 * blurred elements trail behind, creating a bending, snake-like tail.
 * Disabled on touch devices and when reduced motion is preferred.
 */
export function CursorTrail() {
  const tailsRef = useRef<(HTMLDivElement | null)[]>([])
  const numTails = 16

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isTouch = window.matchMedia("(pointer: coarse)").matches
    if (prefersReduced || isTouch) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let raf = 0
    let visible = false

    // Initialize positions for all tail segments
    const pos = Array.from({ length: numTails }, () => ({ x: mouseX, y: mouseY }))

    let idleTimeout: ReturnType<typeof setTimeout>

    const hideTails = () => {
      tailsRef.current.forEach((t) => {
        if (t) t.style.opacity = "0"
      })
    }

    const showCursor = () => {
      if (!visible) {
        visible = true
      }
      // Always show tails while moving
      tailsRef.current.forEach((t, i) => {
        if (t) t.style.opacity = `${1 - (i / numTails) * 0.8}`
      })
    }

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      showCursor()
      
      clearTimeout(idleTimeout)
      // Fade tails very quickly when mouse stops moving
      idleTimeout = setTimeout(hideTails, 100)
    }

    const onLeave = () => {
      visible = false
      hideTails()
    }

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element && !!el.closest("a, button, input, textarea, select, [role='button']")

    const onOver = (e: MouseEvent) => {
      const interactive = isInteractive(e.target)
      tailsRef.current.forEach((t) => {
        if (t) t.style.visibility = interactive ? "hidden" : "visible"
      })
    }

    const tick = () => {
      // The first segment follows the mouse
      pos[0].x += (mouseX - pos[0].x) * 0.4
      pos[0].y += (mouseY - pos[0].y) * 0.4

      // Each subsequent segment follows the previous one
      for (let i = 1; i < numTails; i++) {
        pos[i].x += (pos[i - 1].x - pos[i].x) * 0.4
        pos[i].y += (pos[i - 1].y - pos[i].y) * 0.4
      }

      // Update DOM
      tailsRef.current.forEach((t, i) => {
        if (t) {
          const transformScale = 1 - (i / numTails) * 0.85 // Gets much smaller towards the end for a thin tail
          t.style.transform = `translate3d(${pos[i].x}px, ${pos[i].y}px, 0) translate(-50%, -50%) scale(${transformScale})`
        }
      })
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("mouseover", onOver, { passive: true })
    document.addEventListener("mouseleave", onLeave)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseleave", onLeave)
      cancelAnimationFrame(raf)
      clearTimeout(idleTimeout)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden="true">
      {Array.from({ length: numTails }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            tailsRef.current[i] = el
          }}
          // Made thicker than previous, but not as thick as original
          className="fixed left-0 top-0 h-4 w-4 rounded-full bg-brand/15 blur-[3px] opacity-0"
          style={{
            willChange: "transform",
            transition: "opacity 0.2s ease-out, scale 0.2s ease-out"
          }}
        />
      ))}
    </div>
  )
}
