"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, Mail, MapPin, Phone } from "lucide-react"

const charcoal = "#161618"
const velvet = "#1e1e22"
const champagne = "#d4b896"
const amber = "#c4955a"
const muted = "#6b6b70"
const cream = "#e8ddd0"

export default function VelvetDarkContact() {
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const contactDetails = [
    { icon: Mail, label: "Email", value: "hello@studio.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 000-1234" },
    { icon: MapPin, label: "Office", value: "140 Broadway, New York" },
  ]

  return (
    <section className="py-28 px-6" style={{ backgroundColor: charcoal }}>
      {/* Top accent line */}
      <div
        className="mx-auto max-w-5xl mb-16"
      >
        <div
          className="h-px w-full"
          style={{ background: `linear-gradient(90deg, transparent, ${amber}, transparent)` }}
        />
      </div>

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-14">
            <p
              className="text-xs font-medium uppercase tracking-[0.25em] mb-4"
              style={{ color: amber }}
            >
              Get in Touch
            </p>
            <h2
              className="text-4xl md:text-5xl font-light tracking-tight mb-4"
              style={{ color: cream, fontFamily: "'Georgia', serif" }}
            >
              Start a conversation
            </h2>
            <p
              className="text-base max-w-xl leading-relaxed"
              style={{ color: muted }}
            >
              We&rsquo;d love to hear about your project. Send us a message and
              our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="md:col-span-2 space-y-8">
              {contactDetails.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: `rgba(196,149,90,0.08)`,
                      border: `1px solid rgba(196,149,90,0.12)`,
                    }}
                  >
                    <item.icon size={16} style={{ color: amber }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-[0.15em] mb-1"
                      style={{ color: muted }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: champagne }}
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}

              <div
                className="mt-8 p-6 rounded-lg"
                style={{
                  backgroundColor: velvet,
                  border: "1px solid rgba(212,184,150,0.06)",
                }}
              >
                <p
                  className="text-sm italic leading-relaxed"
                  style={{ color: muted, fontFamily: "'Georgia', serif" }}
                >
                  &ldquo;We believe every great partnership begins with a simple
                  conversation. No pressure, no obligations.&rdquo;
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 rounded-lg"
                  style={{
                    backgroundColor: velvet,
                    border: "1px solid rgba(212,184,150,0.08)",
                  }}
                >
                  <CheckCircle size={32} style={{ color: amber }} />
                  <p
                    className="mt-4 text-lg font-light"
                    style={{ color: cream, fontFamily: "'Georgia', serif" }}
                  >
                    Message received
                  </p>
                  <p className="mt-2 text-sm" style={{ color: muted }}>
                    We&rsquo;ll be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {["Name", "Email"].map((field) => (
                      <div key={field}>
                        <label
                          className="block text-xs font-medium uppercase tracking-[0.15em] mb-2"
                          style={{ color: muted }}
                        >
                          {field}
                        </label>
                        <input
                          type={field === "Email" ? "email" : "text"}
                          required
                          onFocus={() => setFocused(field)}
                          onBlur={() => setFocused(null)}
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors duration-300"
                          style={{
                            backgroundColor: velvet,
                            color: cream,
                            border: `1px solid ${focused === field ? amber : "rgba(212,184,150,0.1)"}`,
                          }}
                          placeholder={field === "Email" ? "you@company.com" : "Your name"}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label
                      className="block text-xs font-medium uppercase tracking-[0.15em] mb-2"
                      style={{ color: muted }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused(null)}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors duration-300"
                      style={{
                        backgroundColor: velvet,
                        color: cream,
                        border: `1px solid ${focused === "subject" ? amber : "rgba(212,184,150,0.1)"}`,
                      }}
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-medium uppercase tracking-[0.15em] mb-2"
                      style={{ color: muted }}
                    >
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none transition-colors duration-300"
                      style={{
                        backgroundColor: velvet,
                        color: cream,
                        border: `1px solid ${focused === "message" ? amber : "rgba(212,184,150,0.1)"}`,
                      }}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide rounded-lg transition-colors duration-300"
                    style={{
                      backgroundColor: amber,
                      color: charcoal,
                    }}
                  >
                    <Send size={14} />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
