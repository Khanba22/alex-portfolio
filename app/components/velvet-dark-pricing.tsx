"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import { Check } from "lucide-react"
import { useState } from "react"

const charcoal = "#161618"
const velvet = "#1e1e22"
const champagne = "#d4b896"
const amber = "#c4955a"
const muted = "#6b6b70"

const tiers = [
  {
    name: "Evening",
    price: "$39",
    period: "/month",
    tagline: "A warm introduction.",
    features: [
      "5 editorial projects",
      "Core palette access",
      "Community lounge",
      "Monthly digest",
    ],
    highlighted: false,
  },
  {
    name: "Midnight",
    price: "$119",
    period: "/month",
    tagline: "The full editorial experience.",
    features: [
      "Unlimited projects",
      "Complete palette library",
      "Private lounge access",
      "Weekly editorial calls",
      "Custom typography suite",
      "Early access to issues",
    ],
    highlighted: true,
  },
  {
    name: "After Hours",
    price: "$279",
    period: "/month",
    tagline: "Beyond the velvet rope.",
    features: [
      "Everything in Midnight",
      "Dedicated art director",
      "Bespoke brand systems",
      "Private events access",
      "Printed lookbooks",
      "Archival storage",
    ],
    highlighted: false,
  },
]

export default function VelvetDarkPricing() {
  const { colors } = useTheme()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-28 px-6" style={{ backgroundColor: charcoal }}>
      <div className="mx-auto max-w-6xl relative">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-6 h-px w-12"
            style={{ backgroundColor: amber }}
          />
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.3em] mb-4"
            style={{ color: amber }}
          >
            Membership
          </p>
          <h2
            className="text-3xl font-light tracking-tight md:text-5xl"
            style={{ color: champagne, fontFamily: "'Georgia', serif" }}
          >
            Find Your <span className="font-bold">Hour</span>
          </h2>
          <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: muted }}>
            Every membership is an invitation into a deeper, warmer creative world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex flex-col p-8 transition-all duration-500"
              style={{
                backgroundColor: tier.highlighted ? velvet : "transparent",
                border: `1px solid ${
                  tier.highlighted
                    ? "rgba(212,184,150,0.15)"
                    : hoveredIndex === i
                    ? "rgba(212,184,150,0.08)"
                    : "rgba(255,255,255,0.04)"
                }`,
              }}
            >
              {/* Warm glow on highlighted */}
              {tier.highlighted && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 0%, rgba(196,149,90,0.06) 0%, transparent 60%)",
                  }}
                />
              )}

              {/* Top accent */}
              {tier.highlighted && (
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ backgroundColor: amber }}
                />
              )}

              {tier.highlighted && (
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-6 relative"
                  style={{ color: amber }}
                >
                  Most Popular
                </span>
              )}

              <h3
                className="text-xl font-light mb-1 relative"
                style={{ color: champagne, fontFamily: "'Georgia', serif" }}
              >
                {tier.name}
              </h3>
              <p className="text-sm mb-6 relative" style={{ color: muted }}>
                {tier.tagline}
              </p>

              <div className="flex items-baseline gap-1 mb-8 relative">
                <span
                  className="text-4xl font-bold"
                  style={{
                    color: tier.highlighted ? amber : champagne,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {tier.price}
                </span>
                <span className="text-sm" style={{ color: muted }}>
                  {tier.period}
                </span>
              </div>

              <div
                className="h-px w-full mb-8 relative"
                style={{ backgroundColor: "rgba(212,184,150,0.08)" }}
              />

              <ul className="space-y-4 mb-10 flex-1 relative">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={14}
                      style={{ color: tier.highlighted ? amber : muted }}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm" style={{ color: champagne, opacity: 0.7 }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 text-sm font-semibold uppercase tracking-[0.2em] transition-colors relative"
                style={
                  tier.highlighted
                    ? { backgroundColor: amber, color: charcoal }
                    : {
                        border: "1px solid rgba(212,184,150,0.15)",
                        color: champagne,
                        backgroundColor: "transparent",
                      }
                }
              >
                Join
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex items-center gap-4 justify-center">
          <div
            className="h-px w-12"
            style={{ background: "rgba(212,184,150,0.1)" }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: amber, opacity: 0.4 }}
          />
          <div
            className="h-px w-12"
            style={{ background: "rgba(212,184,150,0.1)" }}
          />
        </div>
      </div>
    </section>
  )
}
