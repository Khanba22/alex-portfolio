"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import { useState } from "react"

const charcoal = "#161618"
const velvet = "#1e1e22"
const champagne = "#d4b896"
const amber = "#c4955a"
const muted = "#6b6b70"

const testimonials = [
  {
    name: "Camille Laurent",
    role: "Editor, Maison Noire Magazine",
    quote: "There is something deeply intimate about this aesthetic — like reading by candlelight. It wraps you in warmth while maintaining absolute clarity.",
    initials: "CL",
    issue: "Feature — Issue 14",
  },
  {
    name: "Marcus Ashford",
    role: "Brand Director, Velour Group",
    quote: "We searched for two years for a design language that matched our brand's DNA. This was it — sophisticated, warm, unapologetically luxurious.",
    initials: "MA",
    issue: "Feature — Issue 22",
  },
  {
    name: "Dominique Rêverie",
    role: "Founder, Atelier du Soir",
    quote: "Most dark interfaces feel cold. This one feels like a private members' lounge — every detail whispers quality without ever raising its voice.",
    initials: "DR",
    issue: "Feature — Issue 31",
  },
]

export default function VelvetDarkTestimonials() {
  const { colors } = useTheme()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-28 px-6" style={{ backgroundColor: charcoal }}>
      {/* Warm ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(196,149,90,0.03) 0%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-6xl relative">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 h-px w-12 origin-left"
            style={{ backgroundColor: amber }}
          />
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.3em] mb-4"
            style={{ color: amber }}
          >
            As Featured In
          </p>
          <h2
            className="text-3xl font-light tracking-tight md:text-4xl"
            style={{ color: champagne, fontFamily: "'Georgia', serif" }}
          >
            What They&apos;re <span className="font-bold">Saying</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative p-8 transition-all duration-500"
              style={{
                backgroundColor: hoveredIndex === i ? velvet : "transparent",
                border: `1px solid ${
                  hoveredIndex === i
                    ? "rgba(212,184,150,0.12)"
                    : "rgba(255,255,255,0.04)"
                }`,
              }}
            >
              {/* Issue tag */}
              <p
                className="text-[10px] uppercase tracking-[0.25em] mb-6"
                style={{ color: muted }}
              >
                {t.issue}
              </p>

              {/* Quote */}
              <p
                className="text-base leading-relaxed mb-8"
                style={{
                  color: champagne,
                  fontFamily: "'Georgia', serif",
                  fontStyle: "italic",
                  opacity: 0.8,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div
                className="h-px w-10 mb-6"
                style={{ backgroundColor: amber, opacity: 0.4 }}
              />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold tracking-wider"
                  style={{
                    backgroundColor: velvet,
                    color: champagne,
                    border: "1px solid rgba(212,184,150,0.15)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: champagne }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[11px] tracking-wide mt-0.5"
                    style={{ color: amber, opacity: 0.7 }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex items-center gap-4">
          <div
            className="flex-1 h-px"
            style={{ background: `linear-gradient(90deg, rgba(212,184,150,0.12), transparent)` }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: amber, opacity: 0.4 }}
          />
          <div
            className="flex-1 h-px"
            style={{ background: `linear-gradient(90deg, transparent, rgba(212,184,150,0.12))` }}
          />
        </div>
      </div>
    </section>
  )
}
