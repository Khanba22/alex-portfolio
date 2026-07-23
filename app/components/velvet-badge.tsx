"use client"
import type React from "react"
import { useTheme } from "@/contexts/theme-context"

// Font: Playfair Display — Imported via globals.css

interface VelvetBadgeProps {
  children: React.ReactNode
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error"
  size?: "sm" | "md" | "lg"
}

export default function VelvetBadge({ children, variant = "default", size = "md" }: VelvetBadgeProps) {
  const { colors } = useTheme()
  const colorMap: Record<string, { bg: string; text: string }> = {
    default: { bg: `${colors.primary}12`, text: colors.primary },
    primary: { bg: `${colors.primary}18`, text: colors.primary },
    secondary: { bg: `${colors.secondary}18`, text: colors.secondary },
    success: { bg: `${colors.semantic?.success?.border || "#10b981"}15`, text: colors.semantic?.success?.text || "#10b981" },
    warning: { bg: `${colors.semantic?.warning?.border || "#f59e0b"}15`, text: colors.semantic?.warning?.text || "#f59e0b" },
    error: { bg: `${colors.semantic?.error?.border || "#ef4444"}15`, text: colors.semantic?.error?.text || "#ef4444" },
  }
  const c = colorMap[variant]
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: size === "sm" ? "2px 10px" : size === "lg" ? "6px 18px" : "4px 14px",
      backgroundColor: c.bg, color: c.text,
      border: `1px solid ${c.text}18`,
      borderRadius: "9999px",
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: size === "sm" ? "0.7rem" : size === "lg" ? "0.9rem" : "0.8rem",
      fontWeight: 500, fontStyle: "italic", letterSpacing: "0.02em",
    }}>
      {children}
    </span>
  )
}
