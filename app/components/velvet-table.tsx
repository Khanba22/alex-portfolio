"use client"

import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"

const data = [
  { name: "Alice Johnson", role: "Designer", status: "Active", email: "alice@co.io" },
  { name: "Bob Smith", role: "Developer", status: "Away", email: "bob@co.io" },
  { name: "Carol Davis", role: "Manager", status: "Active", email: "carol@co.io" },
  { name: "Dan Wilson", role: "Analyst", status: "Offline", email: "dan@co.io" },
]
const cols: (keyof typeof data[0])[] = ["name", "role", "status", "email"]
const headers = ["Name", "Role", "Status", "Email"]

export function VelvetTable() {
  const { colors } = useTheme()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: colors.background.dark,
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: colors.text.secondary,
                  backgroundColor: `${colors.background.dark}`,
                  borderBottom: `1px solid ${colors.border}33`,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, ri) => (
            <tr
              key={ri}
              onMouseEnter={() => setHovered(ri)}
              onMouseLeave={() => setHovered(null)}
              style={{
                backgroundColor: hovered === ri ? `${colors.primary}15` : "transparent",
                transition: "background-color 0.4s ease",
              }}
            >
              {cols.map((col, ci) => (
                <td
                  key={ci}
                  style={{
                    padding: "12px 16px",
                    fontSize: "0.8rem",
                    color: colors.text.primary,
                    borderBottom: `1px solid ${colors.border}22`,
                  }}
                >
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VelvetTable
