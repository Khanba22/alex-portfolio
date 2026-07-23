"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const charcoal = "#161618"
const velvet = "#1e1e22"
const champagne = "#d4b896"
const amber = "#c4955a"
const muted = "#6b6b70"
const cream = "#e8ddd0"

const people = [
  { name: "Alex Johnson", role: "CEO & Co-Founder", bio: "Product-focused leader obsessed with delightful user experiences.", initials: "AJ" },
  { name: "Maria Rodriguez", role: "Head of Engineering", bio: "Leads the platform architecture and performance initiatives.", initials: "MR" },
  { name: "David Kim", role: "Design Director", bio: "Owns the design system and brand visual language.", initials: "DK" },
  { name: "Priya Patel", role: "Lead Product Manager", bio: "Connects customer problems to clear product roadmaps.", initials: "PP" },
  { name: "Ethan Chen", role: "Senior Backend Engineer", bio: "Scales the infrastructure and core APIs.", initials: "EC" },
  { name: "Sarah Williams", role: "Customer Success Lead", bio: "Helps teams unlock the full value of the platform.", initials: "SW" },
]

export default function VelvetDarkTeam() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-28 px-6" style={{ backgroundColor: charcoal }}>
      <div className="mx-auto max-w-6xl">
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
            Our Team
          </p>
          <h2
            className="text-3xl md:text-4xl font-light tracking-tight mb-4"
            style={{ color: cream, fontFamily: "'Georgia', serif" }}
          >
            The people behind the product
          </h2>
          <p
            className="text-sm max-w-lg leading-relaxed"
            style={{ color: muted }}
          >
            A multidisciplinary group of builders, designers, and operators
            working together to ship world-class products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {people.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="relative p-7 rounded-lg overflow-hidden"
              style={{
                backgroundColor: velvet,
                border: `1px solid ${hovered === i ? "rgba(196,149,90,0.2)" : "rgba(212,184,150,0.06)"}`,
                transition: "border-color 0.4s",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Warm glow on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: "radial-gradient(ellipse at 50% 0%, rgba(196,149,90,0.05) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: "rgba(196,149,90,0.08)",
                      color: amber,
                      border: "1px solid rgba(196,149,90,0.15)",
                    }}
                  >
                    {person.initials}
                  </div>
                  <div>
                    <h3
                      className="text-base font-medium"
                      style={{ color: cream }}
                    >
                      {person.name}
                    </h3>
                    <p
                      className="text-xs font-medium uppercase tracking-[0.15em]"
                      style={{ color: amber, opacity: 0.7 }}
                    >
                      {person.role}
                    </p>
                  </div>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: muted }}
                >
                  {person.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
