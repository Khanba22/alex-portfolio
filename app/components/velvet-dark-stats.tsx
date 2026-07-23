"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { TrendingUp } from "lucide-react"

const charcoal = "#161618"
const velvet = "#1e1e22"
const champagne = "#d4b896"
const amber = "#c4955a"
const muted = "#6b6b70"
const cream = "#e8ddd0"

const stats = [
  { value: "2,400+", label: "Teams worldwide", delta: "+18% YoY" },
  { value: "18M", label: "Daily requests", delta: "+42% YoY" },
  { value: "120ms", label: "Avg. response", delta: "-23% YoY" },
  { value: "4.9/5", label: "Customer rating", delta: "+0.3 YoY" },
]

export default function VelvetDarkStats() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-28 px-6" style={{ backgroundColor: charcoal }}>
      <div className="mx-auto max-w-5xl">
        {/* Top accent */}
        <div
          className="h-px w-full mb-16"
          style={{ background: `linear-gradient(90deg, transparent, ${amber}, transparent)` }}
        />

        {/* Header */}
        <div className="mb-14">
          <p
            className="text-xs font-medium uppercase tracking-[0.25em] mb-4"
            style={{ color: amber }}
          >
            Performance
          </p>
          <h2
            className="text-3xl md:text-4xl font-light tracking-tight mb-4"
            style={{ color: cream, fontFamily: "'Georgia', serif" }}
          >
            Numbers that matter
          </h2>
          <p
            className="text-sm max-w-lg leading-relaxed"
            style={{ color: muted }}
          >
            Key metrics that demonstrate our platform&rsquo;s reliability and growth trajectory.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="relative p-7 rounded-lg overflow-hidden"
              style={{
                backgroundColor: velvet,
                border: `1px solid ${hovered === i ? "rgba(196,149,90,0.2)" : "rgba(212,184,150,0.06)"}`,
                transition: "border-color 0.4s",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: "radial-gradient(ellipse at 50% 0%, rgba(196,149,90,0.05) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                <p
                  className="text-3xl font-light mb-1"
                  style={{ color: cream, fontFamily: "'Georgia', serif" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs font-medium uppercase tracking-[0.15em] mb-3"
                  style={{ color: muted }}
                >
                  {stat.label}
                </p>
                <div className="flex items-center gap-1.5">
                  <TrendingUp size={12} style={{ color: amber }} />
                  <p className="text-xs font-medium" style={{ color: amber }}>
                    {stat.delta}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
