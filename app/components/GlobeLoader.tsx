"use client"

import { useEffect, useRef } from "react"

type Point = [number, number]

const POLYS: Point[][] = [
  // North America — mainland US/Canada/Alaska
  [[-168,66],[-156,71],[-141,70],[-128,70],[-110,72],[-95,74],[-82,73],[-75,78],[-65,82],[-55,83],
   [-25,83],[-18,76],[-22,70],[-40,60],[-55,53],[-60,47],[-67,45],[-70,42],[-74,40],[-76,38],
   [-78,35],[-81,31],[-82,27],[-80,25],[-83,28],[-87,30],[-91,29],[-94,29],[-97,28],[-97,26],
   [-99,22],[-104,19],[-106,23],[-110,23],[-114,28],[-117,32],[-122,37],[-124,42],[-124,48],
   [-130,54],[-135,58],[-145,60],[-152,58],[-158,56],[-165,55],[-168,60],[-168,66]],
  // Greenland
  [[-55,60],[-42,60],[-25,68],[-20,75],[-22,80],[-30,83],[-45,83],[-58,82],[-68,80],[-72,76],
   [-65,68],[-58,62],[-55,60]],
  // Mexico/Central America
  [[-97,18],[-94,16],[-90,15],[-87,14],[-83,9],[-79,9],[-77,8],[-82,12],[-87,17],[-92,18],[-97,18]],
  // South America
  [[-77,8],[-72,11],[-66,11],[-60,8],[-52,5],[-48,0],[-43,-5],[-38,-9],[-35,-7],[-39,-15],
   [-39,-22],[-44,-23],[-48,-28],[-54,-34],[-58,-39],[-65,-42],[-68,-46],[-71,-50],[-74,-52],
   [-72,-46],[-74,-40],[-72,-34],[-71,-28],[-70,-22],[-70,-18],[-72,-13],[-78,-6],[-80,-3],
   [-79,1],[-77,4],[-77,8]],
  // Africa
  [[-17,21],[-16,28],[-10,32],[-3,35],[5,36],[10,33],[15,32],[20,32],[25,31],[30,31],[33,31],
   [35,28],[37,22],[40,15],[43,11],[51,12],[51,8],[48,3],[42,-1],[40,-5],[40,-13],[36,-18],
   [33,-25],[32,-29],[28,-34],[22,-34],[18,-34],[14,-23],[12,-15],[9,-5],[10,2],[6,4],
   [0,4],[-7,5],[-14,11],[-17,15],[-17,21]],
  // Europe mainland
  [[-10,36],[-9,43],[-2,43],[2,49],[-2,49],[-5,55],[2,58],[7,58],[10,58],[14,68],[20,70],
   [27,70],[31,69],[40,68],[46,67],[50,68],[55,67],[60,67],[60,55],[55,50],[48,45],
   [40,43],[35,40],[28,40],[24,40],[20,42],[14,45],[12,42],[15,40],[18,40],[18,43],
   [13,45],[8,44],[3,42],[-2,38],[-9,37],[-10,36]],
  // Britain
  [[-6,50],[-3,50],[1,52],[1,55],[-3,58],[-5,58],[-6,55],[-6,50]],
  // Scandinavia
  [[5,58],[10,60],[12,65],[18,68],[24,70],[28,71],[20,69],[15,67],[12,63],[8,60],[5,58]],
  // Siberia
  [[60,67],[80,73],[100,76],[115,77],[140,76],[160,71],[170,68],[180,68],[180,75],[160,80],
   [120,80],[80,80],[55,80],[45,75],[50,70],[60,67]],
  // Asia main
  [[40,43],[45,42],[50,40],[53,37],[58,37],[65,40],[72,40],[78,42],[85,46],[92,49],[100,51],
   [110,52],[120,53],[130,52],[135,48],[140,45],[140,38],[125,32],[122,30],[122,24],[115,22],
   [108,20],[105,11],[107,5],[100,5],[97,15],[92,21],[88,21],[80,8],[77,8],[73,15],[68,23],
   [60,25],[57,25],[52,25],[48,29],[45,33],[42,37],[40,40],[40,43]],
  // Arabian peninsula
  [[35,28],[40,30],[48,30],[55,25],[55,16],[52,13],[48,12],[43,12],[40,15],[37,22],[35,28]],
  // Japan
  [[131,32],[136,34],[141,40],[145,44],[141,42],[136,36],[132,33],[131,32]],
  // Indonesia/SE Asia
  [[95,5],[100,2],[110,-1],[120,-3],[130,-3],[140,-2],[140,-8],[130,-8],[120,-10],[110,-7],[100,-2],[95,5]],
  [[120,5],[124,11],[126,17],[122,18],[120,12],[120,5]],
  // Australia
  [[114,-22],[122,-18],[130,-12],[137,-12],[142,-11],[146,-19],[150,-25],[153,-28],[150,-37],
   [144,-38],[140,-38],[135,-35],[125,-33],[115,-34],[114,-22]],
  // New Zealand
  [[166,-46],[170,-41],[174,-37],[178,-39],[174,-46],[170,-47],[166,-46]],
  // Antarctica
  [[-180,-65],[-150,-72],[-100,-72],[-60,-65],[-30,-70],[0,-68],[40,-68],[80,-65],[120,-65],
   [160,-75],[180,-78],[180,-90],[-180,-90],[-180,-65]],
]

const W = 360, H = 180
const mask = new Uint8Array(W * H)
let maskBuilt = false

function fillPoly(poly: Point[]) {
  let minLat = 90, maxLat = -90
  for (const [, lat] of poly) {
    if (lat < minLat) minLat = lat
    if (lat > maxLat) maxLat = lat
  }
  const yMin = Math.max(0, Math.floor(90 - maxLat))
  const yMax = Math.min(H - 1, Math.ceil(90 - minLat))
  for (let y = yMin; y <= yMax; y++) {
    const lat = 90 - y - 0.5
    const xs: number[] = []
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [lng1, lat1] = poly[i]
      const [lng2, lat2] = poly[j]
      if ((lat1 > lat) !== (lat2 > lat)) {
        const t = (lat - lat1) / (lat2 - lat1)
        xs.push(lng1 + t * (lng2 - lng1))
      }
    }
    xs.sort((a, b) => a - b)
    for (let i = 0; i < xs.length; i += 2) {
      const x1 = Math.floor(xs[i] + 180)
      const x2 = Math.ceil(xs[i + 1] + 180)
      for (let x = Math.max(0, x1); x <= Math.min(W - 1, x2); x++) {
        mask[y * W + x] = 1
      }
    }
  }
}

function buildMask() {
  if (!maskBuilt) {
    for (const p of POLYS) fillPoly(p)
    maskBuilt = true
  }
}

function sampleLand(latDeg: number, lngDeg: number): boolean {
  const lng = ((lngDeg + 180) % 360 + 360) % 360 - 180
  const lat = Math.max(-89.999, Math.min(89.999, latDeg))
  return mask[Math.floor(90 - lat) * W + Math.floor(lng + 180)] === 1
}

const COLS = 50, ROWS = 28, RADIUS = 13.5
const CX = COLS / 2 - 0.5, CY = ROWS / 2 - 0.5
const WATER = ['/', '/', ' ', '/']
const LAND = ['#', '█', '▓', '#']
const PI = Math.PI

function renderFrame(rotDeg: number, cellAspect: number): string {
  const rows: string[] = []
  for (let r = 0; r < ROWS; r++) {
    let line = ''
    for (let c = 0; c < COLS; c++) {
      const dx = (c - CX) * cellAspect, dy = r - CY
      const rr = Math.hypot(dx, dy)
      if (rr > RADIUS) { line += ' '; continue }
      const nx = dx / RADIUS, ny = dy / RADIUS
      const nz = Math.sqrt(Math.max(0, 1 - nx * nx - ny * ny))
      const lat = Math.asin(-ny) * 180 / PI
      const lng = Math.atan2(nx, nz) * 180 / PI + rotDeg
      const k = (r * 31 + c * 17) & 3
      line += sampleLand(lat, lng) ? LAND[k] : WATER[k]
    }
    rows.push(line)
  }
  return rows.join('\n')
}

interface GlobeLoaderProps {
  fontSize?: number
  speed?: number
  className?: string
}

export default function GlobeLoader({ fontSize = 7, speed = 50, className = '' }: GlobeLoaderProps) {
  const preRef = useRef<HTMLPreElement>(null)
  const rafRef = useRef<number>(0)
  const rotRef = useRef(0)
  const lastRef = useRef(0)
  const aspectRef = useRef(0.6)

  useEffect(() => {
    buildMask()

    const probe = document.createElement('pre')
    Object.assign(probe.style, {
      position: 'absolute',
      visibility: 'hidden',
      fontSize: `${fontSize}px`,
      lineHeight: '1',
      letterSpacing: '0',
      fontWeight: '700',
      fontFamily: '"JetBrains Mono", "Consolas", ui-monospace, monospace',
      whiteSpace: 'pre',
    })
    probe.textContent = '##########\n##########\n##########\n##########\n##########'
    document.body.appendChild(probe)
    const rect = probe.getBoundingClientRect()
    document.body.removeChild(probe)
    aspectRef.current = (rect.width / 10) / (rect.height / 5)

    lastRef.current = performance.now()

    function tick(now: number) {
      const dt = (now - lastRef.current) / 1000
      lastRef.current = now
      rotRef.current = (rotRef.current + speed * dt) % 360
      if (preRef.current) {
        preRef.current.textContent = renderFrame(rotRef.current, aspectRef.current)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [fontSize, speed])

  return (
    <div className={`flex items-center justify-center ${className}`} aria-label="Spinning globe animation">
      <pre
        ref={preRef}
        style={{
          margin: 0,
          lineHeight: 1,
          letterSpacing: 0,
          fontSize: `${fontSize}px`,
          fontWeight: 700,
          fontFamily: '"JetBrains Mono", "Consolas", ui-monospace, monospace',
          userSelect: 'none',
          whiteSpace: 'pre',
          color: 'inherit',
        }}
      />
    </div>
  )
}
