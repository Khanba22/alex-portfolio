"use client"

import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"

interface TabItem { id: string; label: string }
type Props = { tabs: TabItem[]; initialActiveTab?: string; onChange?: (id: string) => void }

export function VelvetTabs({ tabs, initialActiveTab, onChange }: Props) {
  const { colors } = useTheme()
  const [active, setActive] = useState(initialActiveTab || tabs[0]?.id || "")
  const uid = "velvet-tabs"

  const handle = (id: string) => { setActive(id); onChange?.(id) }

  return (
    <>
      <style>{`
        @keyframes ${uid}-mark { from { opacity: 0; width: 0; } to { opacity: 1; width: 60%; } }
      `}</style>
      <div style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
        <div style={{ display: "inline-flex", gap: 0, borderBottom: `1px solid ${colors.border}22` }}>
          {tabs.map(tab => {
            const isActive = active === tab.id
            return (
              <button key={tab.id} onClick={() => handle(tab.id)}
                style={{
                  padding: "14px 28px", fontSize: "0.9rem", fontStyle: "italic",
                  fontFamily: "'Playfair Display', serif",
                  backgroundColor: "transparent", border: "none", cursor: "pointer", outline: "none",
                  color: isActive ? colors.primary : colors.text.muted,
                  position: "relative",
                  transition: "color 0.3s ease",
                }}
              >
                {tab.label}
                {isActive && (
                  <span style={{
                    position: "absolute", bottom: -1, left: "50%", transform: "translateX(-50%)",
                    height: 2, backgroundColor: colors.primary,
                    animation: `${uid}-mark 0.4s ease forwards`,
                  }} />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default VelvetTabs
