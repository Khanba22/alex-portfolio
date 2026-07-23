"use client"

import type React from "react"
import { useState, useId } from "react"
import { useTheme } from "@/contexts/theme-context"
import { type ThemedInputProps } from "./luxury-input"

export function VelvetInput({
  label = "Label",
  placeholder = "Type here...",
  value: controlledValue,
  onChange: controlledOnChange,
}: ThemedInputProps) {
  const { colors } = useTheme()
  const [internal, setInternal] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const uid = useId().replace(/:/g, "")

  const isControlled = controlledValue !== undefined
  const val = isControlled ? controlledValue : internal
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (controlledOnChange) controlledOnChange(e)
    if (!isControlled) setInternal(e.target.value)
  }
  const hasValue = val.length > 0

  const velvetDark = "#5c1a33"
  const velvetMid = "#8a3050"
  const velvetAccent = "#a8465c"

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", position: "relative", paddingTop: 22 }}>
      <style>{`
        @keyframes velvetSheen-${uid} {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
      `}</style>

      {/* Rich italic serif label that floats */}
      <label
        style={{
          position: "absolute",
          left: 4,
          top: isFocused || hasValue ? 0 : 32,
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: isFocused || hasValue ? "0.72rem" : "0.88rem",
          fontWeight: 400,
          fontStyle: "italic",
          color: isFocused ? velvetAccent : colors.text.muted,
          letterSpacing: "0.04em",
          transition: "all 0.45s cubic-bezier(0.25, 0.1, 0.25, 1)",
          pointerEvents: "none",
        }}
      >
        {label}
      </label>

      {/* Velvet-textured input */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <input
          value={val}
          onChange={handleChange}
          placeholder={isFocused ? placeholder : ""}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "12px 4px",
            backgroundColor: "transparent",
            color: colors.text.primary,
            border: "none",
            borderBottom: `1px solid ${isFocused ? velvetAccent + "88" : colors.border}`,
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 300,
            outline: "none",
            transition: "border-color 0.45s ease",
          }}
        />

        {/* Rich velvet accent line — thicker, gradient */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: 2,
            width: isFocused ? "100%" : "0%",
            background: `linear-gradient(90deg, ${velvetDark}, ${velvetMid}, ${velvetAccent}, ${velvetMid}, ${velvetDark})`,
            transition: "width 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        />

        {/* Velvet fabric sheen sweep on focus */}
        {isFocused && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "30%",
              height: 2,
              background: `linear-gradient(90deg, transparent, ${velvetAccent}66, transparent)`,
              animation: `velvetSheen-${uid} 2s ease-in-out 0.5s infinite`,
              pointerEvents: "none",
            }}
          />
        )}
      </div>

      {/* Velvet glow underneath — richer, wider */}
      <div
        style={{
          position: "relative",
          marginTop: -1,
          height: 12,
          background: isFocused
            ? `linear-gradient(180deg, ${velvetAccent}18, ${velvetDark}08, transparent)`
            : "transparent",
          pointerEvents: "none",
          transition: "background 0.45s ease",
          filter: "blur(1px)",
        }}
      />
    </div>
  )
}

export default VelvetInput
