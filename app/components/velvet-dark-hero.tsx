"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const charcoal = "#161618"
const velvet = "#1e1e22"
const champagne = "#d4b896"
const champagneDim = "rgba(212,184,150,0.4)"
const amber = "#c4955a"
const muted = "#6b6b70"

export default function VelvetDarkHero() {
  const { colors } = useTheme()
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null)

  return (
    <section
      className="relative py-36 px-6 overflow-hidden"
      style={{ backgroundColor: charcoal }}
    >
      {/* Warm ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(196,149,90,0.06) 0%, transparent 100%)",
        }}
      />

      {/* Subtle vertical lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        {[20, 40, 60, 80].map((pos) => (
          <div
            key={pos}
            className="absolute top-0 bottom-0 w-px"
            style={{ left: `${pos}%`, backgroundColor: champagne }}
          />
        ))}
      </div>

      {/* Top hairline */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-px"
        style={{ background: `linear-gradient(90deg, transparent, rgba(212,184,150,0.15), transparent)` }}
      />

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Asymmetric layout — left-aligned editorial */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 h-px w-16 origin-left"
            style={{ backgroundColor: amber }}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] font-semibold uppercase tracking-[0.3em] mb-6"
            style={{ color: amber }}
          >
            Editorial Collection — Issue 01
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-light tracking-tight mb-4 leading-[1.05]"
            style={{ color: champagne, fontFamily: "'Georgia', serif" }}
          >
            Depth in
            <br />
            <span className="font-bold">Darkness</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-baseline gap-4 mb-8"
          >
            <span
              className="text-6xl md:text-8xl font-bold leading-none"
              style={{ color: "rgba(212,184,150,0.08)", fontFamily: "'Georgia', serif" }}
            >
              01
            </span>
            <div className="h-12 w-px" style={{ backgroundColor: "rgba(212,184,150,0.2)" }} />
            <p
              className="text-base leading-relaxed max-w-sm"
              style={{ color: muted }}
            >
              A curated experience for those who find beauty in subtlety —
              where rich tones and warm accents create an atmosphere of refined intimacy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setHoveredBtn("primary")}
              onMouseLeave={() => setHoveredBtn(null)}
              className="group px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                backgroundColor: hoveredBtn === "primary" ? champagne : amber,
                color: charcoal,
              }}
            >
              <span className="flex items-center justify-center gap-2">
                Read the Issue
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em]"
              style={{
                color: champagne,
                border: "1px solid rgba(212,184,150,0.2)",
                backgroundColor: "transparent",
              }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div
        className="absolute bottom-0 left-[10%] right-[10%] h-px"
        style={{ background: `linear-gradient(90deg, transparent, rgba(212,184,150,0.15), transparent)` }}
      />
    </section>
  )
}
