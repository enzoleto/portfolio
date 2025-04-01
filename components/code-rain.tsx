"use client"

import { useEffect, useRef } from "react"

export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Matrix characters - using 0s and 1s for a digital look
    const chars = "01"
    const fontSize = 14
    let columns: number[] = []
    let drops: number[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Calculate columns and initialize drops
      const columnsCount = Math.floor(canvas.width / fontSize)
      columns = Array.from({ length: columnsCount })
      drops = Array.from({ length: columnsCount }, () => 1)
    }

    const draw = () => {
      // Add semi-transparent black rectangle to create fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set text color and font
      ctx.fillStyle = "#00ff55"
      ctx.font = `${fontSize}px monospace`

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Choose a random character
        const char = chars.charAt(Math.floor(Math.random() * chars.length))

        // Draw the character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        // Move the drop down
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }

      animationFrameId.current = requestAnimationFrame(draw)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 opacity-10 pointer-events-none" />
}

