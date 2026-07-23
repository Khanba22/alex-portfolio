"use client"
import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"
interface TabItem { id: string; label: string }
type Props = { tabs: TabItem[]; initialActiveTab?: string; onChange?: (id: string) => void }
export function VelvetVerticalTabs({ tabs, initialActiveTab, onChange }: Props) {
  const { colors } = useTheme()
  const [active, setActive] = useState(initialActiveTab || tabs[0]?.id || "")
  const handle = (id: string) => { setActive(id); onChange?.(id) }
  return (
    <div style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, borderLeft: `1px solid ${colors.border}22` }}>
        {tabs.map(tab => {
          const isActive = active === tab.id
          return (
            <button key={tab.id} onClick={() => handle(tab.id)} style={{
              padding: "14px 20px", fontSize: "0.9rem", fontStyle: "italic",
              fontFamily: "'Playfair Display', serif",
              backgroundColor: "transparent", border: "none", cursor: "pointer", outline: "none",
              color: isActive ? colors.primary : colors.text.muted, textAlign: "left",
              borderLeft: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
              marginLeft: -1, transition: "color 0.3s ease",
            }}>{tab.label}</button>
          )
        })}
      </div>
    </div>
  )
}
export default VelvetVerticalTabs
