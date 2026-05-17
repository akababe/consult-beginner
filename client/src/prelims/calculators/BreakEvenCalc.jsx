import { useState, useMemo } from 'react'
import {
  Chart as ChartJS,
  LineElement, PointElement,
  LinearScale, CategoryScale,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip)

const toM = (n) => n / 1_000_000

const fmtProfit = (n) => {
  const abs = Math.abs(n)
  const sign = n < 0 ? '−' : '+'
  if (abs >= 1_000_000) return `${sign}IDR ${(abs / 1_000_000).toFixed(1)}M`
  if (abs >= 1_000)     return `${sign}IDR ${Math.round(abs / 1_000)}K`
  return `${sign}IDR ${abs.toFixed(0)}`
}

const sliders = (fixed, price, vc, volume) => [
  {
    label: 'Fixed costs (IDR/month)',
    val: fixed,  min: 1_000_000, max: 15_000_000, step: 100_000,
    display: `IDR ${(fixed / 1_000_000).toFixed(1)}M`,
    key: 'fixed',
  },
  {
    label: 'Selling price per cup',
    val: price,  min: 5_000, max: 50_000, step: 1_000,
    display: `IDR ${Math.round(price / 1_000)}K`,
    key: 'price',
  },
  {
    label: 'Variable cost per cup',
    val: vc,     min: 1_000, max: 40_000, step: 1_000,
    display: `IDR ${Math.round(vc / 1_000)}K`,
    key: 'vc',
  },
  {
    label: 'Current volume (cups/month)',
    val: volume, min: 50,  max: 1_500, step: 10,
    display: `${volume} cups`,
    key: 'volume',
  },
]

export default function BreakEvenCalc() {
  const [fixed,  setFixed]  = useState(4_200_000)
  const [price,  setPrice]  = useState(20_000)
  const [vc,     setVc]     = useState(9_000)
  const [volume, setVolume] = useState(400)

  const setters = { fixed: setFixed, price: setPrice, vc: setVc, volume: setVolume }

  const cm      = price - vc
  const beVol   = cm > 0 ? fixed / cm : Infinity
  const revenue = volume * price
  const totCost = fixed + volume * vc
  const profit  = revenue - totCost
  const safety  = volume - beVol

  const maxX = useMemo(() => {
    const base = cm > 0 ? Math.ceil(beVol * 1.8) : volume * 2
    return Math.max(base, volume + 150, 300)
  }, [cm, beVol, volume])

  const pts = useMemo(() => {
    const step = Math.max(10, Math.ceil(maxX / 80))
    return Array.from({ length: Math.floor(maxX / step) + 1 }, (_, i) => i * step)
  }, [maxX])

  const chartData = {
    labels: pts,
    datasets: [
      {
        label: 'Revenue',
        data: pts.map(x => toM(x * price)),
        borderColor: '#2A5C8B',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0,
      },
      {
        label: 'Total Cost',
        data: pts.map(x => toM(fixed + x * vc)),
        borderColor: '#C4472A',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 120 },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          title: (ctx) => `${ctx[0].label} cups/month`,
          label: (ctx) => `${ctx.dataset.label}: IDR ${ctx.parsed.y.toFixed(2)}M`,
        },
      },
    },
    scales: {
      x: {
        title: { display: true, text: 'Volume (cups / month)', font: { size: 11 }, color: '#9A9088' },
        ticks: { maxTicksLimit: 8, font: { size: 10 }, color: '#9A9088' },
        grid: { color: 'rgba(128,120,112,0.1)' },
      },
      y: {
        title: { display: true, text: 'IDR (millions)', font: { size: 11 }, color: '#9A9088' },
        ticks: {
          callback: (v) => `${v.toFixed(1)}M`,
          font: { size: 10 },
          color: '#9A9088',
        },
        grid: { color: 'rgba(128,120,112,0.1)' },
      },
    },
  }

  const isViable  = cm > 0
  const isProfit  = profit >= 0
  const okColor   = 'var(--accent-3)'
  const badColor  = 'var(--accent)'
  const statusColor = !isViable ? badColor : isProfit ? okColor : badColor

  const insight = !isViable
    ? 'Price is at or below variable cost — every cup sold deepens the loss. Raise the price or reduce variable costs first.'
    : profit < 0
    ? `At ${volume} cups/month, the business covers ${fmtProfit(volume * cm)} of its ${(fixed / 1_000_000).toFixed(1)}M fixed costs. It needs ${Math.ceil(beVol - volume)} more cups/month to break even.`
    : `At ${volume} cups/month, the business earns ${fmtProfit(profit)}/month — ${Math.round(safety)} cups above break-even. Every 100 extra cups adds ${fmtProfit(cm * 100)}.`

  return (
    <div className="calc-block">
      <div className="calc-label" style={{ color: 'var(--accent-2)' }}>
        Interactive Break-Even Visualiser
      </div>

      <div className="calc-sliders">
        {sliders(fixed, price, vc, volume).map(({ label, val, min, max, step, display, key }) => (
          <div key={key} className="calc-row">
            <label className="calc-row__label">{label}</label>
            <input
              type="range" min={min} max={max} step={step} value={val}
              className="calc-row__range"
              style={{ accentColor: 'var(--accent-2)' }}
              onChange={(e) => setters[key](Number(e.target.value))}
            />
            <span className="calc-row__val">{display}</span>
          </div>
        ))}
      </div>

      <div className="calc-legend">
        <span><span className="calc-legend__dot" style={{ background: '#2A5C8B' }} />Revenue</span>
        <span><span className="calc-legend__dot" style={{ background: '#C4472A' }} />Total Cost</span>
      </div>

      <div className="calc-chart">
        <Line data={chartData} options={chartOptions} />
      </div>

      <div className="calc-metrics">
        {[
          {
            label: 'Break-even',
            value: isViable ? `${Math.ceil(beVol)} cups` : '—',
            color: 'var(--accent-2)',
          },
          {
            label: 'Monthly profit',
            value: fmtProfit(profit),
            color: statusColor,
          },
          {
            label: 'Safety margin',
            value: isViable ? `${safety >= 0 ? '+' : ''}${Math.round(safety)} cups` : '—',
            color: statusColor,
          },
          {
            label: 'Status',
            value: !isViable ? 'Unviable' : profit < 0 ? 'Below B/E' : 'Above B/E',
            color: statusColor,
          },
        ].map(({ label, value, color }) => (
          <div key={label} className="calc-metric">
            <div className="calc-metric__label">{label}</div>
            <div className="calc-metric__value" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>

      <div className="calc-insight">{insight}</div>
    </div>
  )
}
