'use client'

interface SparkLineProps {
  values: number[]
  color?: string
  width?: number
  height?: number
}

/* Grafico sparkline SVG inline — porta del sparkSVG dal business-dashboard */
export function SparkLine({ values, color = '#A8843A', width = 80, height = 28 }: SparkLineProps) {
  if (!values || values.length < 2) return null
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1
  const pad = 4
  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * width
    const y = (height - pad) - ((v - min) / range) * (height - pad * 2) + pad
    return `${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')
  const lastV = values[values.length - 1]
  const lastX = width
  const lastY = ((height - pad) - ((lastV - min) / range) * (height - pad * 2) + pad).toFixed(1)

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <polyline
        points={points}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={lastX} cy={lastY} r="2.5" fill={color} />
    </svg>
  )
}
