"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"

const faqs = [
  { q: "What defines the Enterprise experience?", a: "Dedicated infrastructure, a named account team, custom SLAs with financial backing, priority roadmap input, and quarterly business reviews tailored to your KPIs." },
  { q: "How is billing handled at scale?", a: "Consolidated invoicing for multi-entity organizations, PO-based procurement support, and flexible payment terms (net-30/60/90). Volume discounts applied automatically." },
  { q: "What compliance frameworks do you support?", a: "SOC 2 Type II, ISO 27001, HIPAA BAA, GDPR, and FedRAMP Moderate (in progress). Audit artifacts available in our Trust Center upon NDA." },
  { q: "Can the platform be white-labeled?", a: "Full brand customization: domain, logo, colors, email identity, and login page. Your customers interact with your brand—our infrastructure stays invisible." },
  { q: "What does the migration process look like?", a: "A dedicated solutions engineer maps your current workflows, runs a parallel pilot, and executes the cutover with zero downtime. Average migration: 2–4 weeks." },
]

export default function DarkLuxuryFaqSection() {
  const { colors } = useTheme()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      className="py-28 px-6"
      style={{ backgroundColor: "#0c0c0e" }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-4"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Questions & Answers
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Clarity at every level
          </h2>
          <p className="mt-3 text-sm text-neutral-500 max-w-md mx-auto">
            Thoughtful answers for discerning teams evaluating a long-term platform partner.
          </p>
        </div>

        <div className="space-y-px rounded-2xl overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  backgroundColor: isOpen ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left"
                >
                  <span className="text-sm font-medium text-neutral-200">{faq.q}</span>
                  <span
                    className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{
                      background: isOpen
                        ? `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
                        : "rgba(255,255,255,0.08)",
                      color: isOpen ? "white" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-8 pb-6 text-sm leading-relaxed text-neutral-400">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-600">
            Need a bespoke answer?{" "}
            <button
              className="font-medium underline underline-offset-2"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Schedule a private consultation
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
