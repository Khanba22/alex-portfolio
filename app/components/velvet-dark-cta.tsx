"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const charcoal = "#161618"
const velvet = "#1e1e22"
const champagne = "#d4b896"
const amber = "#c4955a"
const muted = "#6b6b70"

export default function VelvetDarkCta() {
  const { colors } = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-28 px-6" style={{ backgroundColor: charcoal }}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative py-20 px-8 md:px-16 overflow-hidden"
          style={{
            backgroundColor: velvet,
            border: "1px solid rgba(212,184,150,0.08)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${amber}, transparent)` }}
          />

          {/* Warm ambient glow on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background: "radial-gradient(ellipse at 50% 40%, rgba(196,149,90,0.06) 0%, transparent 70%)",
            }}
          />

          {/* Large background issue number */}
          <div
            className="absolute -right-4 top-1/2 -translate-y-1/2 text-[12rem] font-bold leading-none pointer-events-none select-none"
            style={{
              color: "rgba(212,184,150,0.03)",
              fontFamily: "'Georgia', serif",
            }}
          >
            01
          </div>

          <div className="relative z-10">
            {/* Two-column layout */}
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <div className="flex-1">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6 h-px w-12 origin-left"
                  style={{ backgroundColor: amber }}
                />

                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.3em] mb-5"
                  style={{ color: amber }}
                >
                  Limited Enrollment
                </p>

                <h2
                  className="text-3xl md:text-4xl font-light tracking-tight mb-4"
                  style={{ color: champagne, fontFamily: "'Georgia', serif" }}
                >
                  The Night Is
                  <br />
                  <span className="font-bold">Still Young</span>
                </h2>

                <p
                  className="text-base leading-relaxed max-w-md"
                  style={{ color: muted }}
                >
                  Step behind the curtain and join a creative community that
                  values depth over noise, warmth over flash, and substance
                  over spectacle.
                </p>
              </div>

              <div className="flex flex-col gap-4 md:items-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-colors"
                  style={{ backgroundColor: amber, color: charcoal }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Apply Now
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em]"
                  style={{
                    color: champagne,
                    border: "1px solid rgba(212,184,150,0.15)",
                    backgroundColor: "transparent",
                  }}
                >
                  Read the Manifesto
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
