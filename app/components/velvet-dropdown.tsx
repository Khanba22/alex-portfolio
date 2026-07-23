"use client"

import { useState, useRef, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"

export function VelvetDropdown({ options, placeholder = "Select" }: { options: string[]; placeholder?: string }) {
  const { colors } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const [hoveredIdx, setHoveredIdx] = useState(-1)
  const ref = useRef<HTMLDivElement>(null)
  const uid = "velvet-dd"

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <>
      <style>{`
        @keyframes ${uid}-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .${uid}-panel { animation: ${uid}-fade 0.5s linear forwards; }
      `}</style>
      <div ref={ref} style={{ position: "relative", display: "inline-block", fontFamily: "'Playfair Display', 'Georgia', serif" }}>
        <div style={{ fontSize: "0.78rem", fontStyle: "italic", color: colors.text.secondary, marginBottom: 6, fontWeight: 400 }}>
          Select
        </div>
        <button onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between", width: 220,
            padding: "8px 4px", fontSize: "0.88rem", fontWeight: 500,
            backgroundColor: "transparent", color: selected ? colors.text.primary : colors.text.muted,
            border: "none", borderBottom: `1px solid ${isOpen ? colors.accent : colors.text.muted + "33"}`,
            borderRadius: 0, cursor: "pointer", outline: "none", fontStyle: "italic",
            transition: "border-color 0.3s ease",
          }}
        >
          <span>{selected || placeholder}</span>
          <span style={{ fontSize: "0.5rem", color: colors.text.muted, opacity: 0.5 }}>▾</span>
        </button>
        {isOpen && (
          <div className={`${uid}-panel`} style={{
            position: "absolute", zIndex: 40, width: 220, marginTop: 6,
            backgroundColor: colors.background.dark, borderRadius: 0,
            boxShadow: `0 10px 36px ${colors.shadow}`,
            maxHeight: 200, overflowY: "auto",
          }}>
            {options.map((opt, i) => {
              const isSel = opt === selected
              const isHov = i === hoveredIdx
              return (
                <button key={opt} onClick={() => { setSelected(opt); setIsOpen(false) }}
                  onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(-1)}
                  style={{
                    display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left",
                    padding: "10px 14px", fontSize: "0.84rem", cursor: "pointer", border: "none",
                    fontFamily: "'Playfair Display', serif",
                    borderLeft: isHov ? `2px solid ${colors.accent}` : "2px solid transparent",
                    backgroundColor: "transparent",
                    color: isHov ? colors.text.primary : colors.text.secondary,
                    transition: "all 0.2s ease",
                  }}
                >
                  {isSel && <span style={{
                    width: 5, height: 5, borderRadius: "50%", backgroundColor: colors.accent, flexShrink: 0,
                  }} />}
                  <span>{opt}</span>
                </button>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default VelvetDropdown
