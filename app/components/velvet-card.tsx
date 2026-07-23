"use client"

import type React from "react"
import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"

// Font: Playfair Display (resting), Inter (active)
// Imported in app/globals.css

interface VelvetCardProps {
  title: string
  description: string
  children?: React.ReactNode
  footer?: React.ReactNode
}

export const VelvetCard: React.FC<VelvetCardProps> = ({ title, description, children, footer }) => {
  const { colors } = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: colors.background.light,
        border: `1px solid ${isHovered ? colors.primary : colors.border}`,
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: isHovered
          ? `0 6px 28px ${colors.primary}18, 0 0 12px ${colors.primary}10`
          : colors.shadow,
        transition: "all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      <div style={{ padding: "26px 26px 16px" }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.375rem",
            fontWeight: 600,
            fontStyle: "italic",
            color: colors.text.primary,
            marginBottom: "8px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 400,
            color: colors.text.secondary,
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      </div>
      <div
        style={{
          padding: "0 26px 26px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.9375rem",
          lineHeight: 1.7,
          color: colors.text.secondary,
          backgroundColor: isHovered ? `${colors.background.dark}40` : "transparent",
          transition: "background-color 0.6s ease",
        }}
      >
        {children || <p>Rich, deep, and enveloping — luxury expressed through texture.</p>}
      </div>
      {footer && (
        <div
          style={{
            padding: "16px 26px",
            borderTop: `1px solid ${colors.border}20`,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  )
}
