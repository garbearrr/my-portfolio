'use client'
import { useEffect, useRef } from 'react'

export function useScrollFade(threshold = 0.6) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        // 0 = fully gone, 1 = fully visible
        const ratio = entry.intersectionRatio
        const opacity = Math.min(1, ratio / threshold)
        el.style.opacity = opacity.toString()
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i / 10) }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return ref
}
