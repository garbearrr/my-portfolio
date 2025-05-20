'use client'

import Image from 'next/image'
import React, { CSSProperties, useMemo } from 'react'

type StarAnimation = 'scale' | 'rotate' | null

type SteppedLinearGradientWithStarsProps = {
  color1: string
  color2: string
  segments: number
  starImages: string[]
  starCount: number
  starAreaPercent?: number
  children?: React.ReactNode
}

// 1) background + stars
const fixedLayerStyle: CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: -1,
  overflow: 'hidden',        // stars can sit outside viewport safely
};

// 2) SCROLL layer for everything else
const scrollLayerStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
};

function hexToRgb(hex: string) {
  const h = hex.replace(/^#/, '')
  const i = parseInt(h, 16)
  return { r: (i >> 16) & 0xff, g: (i >> 8) & 0xff, b: i & 0xff }
}

function rgbToHex({ r, g, b }: { r: number; g: number; b: number }) {
  const to2 = (v: number) => v.toString(16).padStart(2, '0')
  return `#${to2(r)}${to2(g)}${to2(b)}`
}

function interpolateColor(c1: string, c2: string, t: number) {
  const a = hexToRgb(c1), b = hexToRgb(c2)
  return rgbToHex({
    r: Math.round(a.r + (b.r - a.r) * t),
    g: Math.round(a.g + (b.g - a.g) * t),
    b: Math.round(a.b + (b.b - a.b) * t),
  })
}

export const SteppedLinearGradientWithStars: React.FC<SteppedLinearGradientWithStarsProps> = ({
  color1,
  color2,
  segments,
  starImages,
  starCount,
  starAreaPercent = 0.4,
  children,
}) => {
  // 1) build the gradient stops
  const N = Math.max(2, Math.floor(segments))
  const stops: string[] = []
  for (let i = 0; i < N; i++) {
    const p0 = ( i    ) / N * 100
    const p1 = ( i + 1) / N * 100
    const col = interpolateColor(color1, color2, i / (N - 1))
    stops.push(`${col} ${p0.toFixed(2)}%`, `${col} ${p1.toFixed(2)}%`)
  }

  // 2) randomly generate star positions + animation once
  const stars = useMemo(() => {
    const numScale  = Math.floor(starCount * 0.35)
    const numRotate = Math.floor(starCount * 0.35)
    const picks = Array.from({ length: starCount }, (_, i) => i)
    const shuffle = [...picks].sort(() => Math.random() - 0.5)
    const scaleSet  = new Set(shuffle.slice(0, numScale))
    const rotateSet = new Set(shuffle.slice(numScale, numScale + numRotate))

    return picks.map(i => {
      const src  = starImages[Math.floor(Math.random() * starImages.length)]
      const x    = Math.random()
      const y    = Math.random() * starAreaPercent
      const size = 8 + Math.random() * 8

      let anim: StarAnimation = null
      if (scaleSet.has(i))  anim = 'scale'
      else if (rotateSet.has(i)) anim = 'rotate'

      const duration = anim ? 1 + Math.random() * 3 : 0
      const delay    = anim ? Math.random() * 3     : 0

      return { src, x, y, size, anim, duration, delay }
    })
  }, [starCount, starImages, starAreaPercent])

  // 3) styles
  const fixedBgStyle: CSSProperties = {
    position:         'fixed',
    inset:            0,
    backgroundImage:  `linear-gradient(to bottom, ${stops.join(', ')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:   'cover',
    zIndex:           -1,
  }

/*   const scrollContainerStyle: CSSProperties = {
    position:   'relative',
    width:      '100%',
    minHeight:  '100vh',
    overflowY:  'auto',
    overflowX:  'hidden',
  } */

  return (
    <>
      {/* === FIXED LAYER (gradient + stars) === */}
      <div style={fixedLayerStyle}>
        {/* gradient strip */}
        <div style={fixedBgStyle} />
  
        {/* every star lives in the fixed layer so it never scrolls */}
        {stars.map((star, i) => {
          const animStyle = star.anim
            ? {
                animationName:
                  star.anim === 'scale' ? 'star-scale' : 'star-rotate',
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.delay}s`,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out',
                animationDirection: 'alternate',
              }
            : {};
  
          return (
            <Image
              key={i}
              src={star.src}
              alt="star"
              width={star.size}
              height={star.size}
              style={{
                position: 'absolute',
                left: `${(star.x * 100).toFixed(2)}%`,
                top: `${(star.y * 100).toFixed(2)}%`,
                transform: 'translate(-50%,-50%)',
                pointerEvents: 'none',
                userSelect: 'none',
                ...animStyle,
              }}
            />
          );
        })}
      </div>
  
      {/* === SCROLL LAYER (moon + page content) === */}
      <div style={scrollLayerStyle}>
        {/* moon scrolls away with the page */}
        <Image
          src="/images/moon.png"
          alt="moon"
          width={100}
          height={100}
          style={{
            position: 'absolute',
            top: '5vh',
            right: '5vw',
            width: '10%',
            height: 'auto',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 2,
            filter: 'drop-shadow(5px 5px 8px rgba(0,0,0,0.4))',
          }}
        />
  
        {/* whatever pass as children*/}
        {children}
      </div>
  
      {/* keyframes stay exactly the same */}
      <style jsx>{`
        @keyframes star-scale {
          from {
            transform: translate(-50%, -50%) scale(1);
          }
          to {
            transform: translate(-50%, -50%) scale(1.4);
          }
        }
        @keyframes star-rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(20deg);
          }
        }
      `}</style>
    </>
  );
  
}
