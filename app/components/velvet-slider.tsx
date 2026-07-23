"use client"
import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import type { SliderProps } from "./slider-props"

// Velvet: lush but restrained, soft track + gentle fill, italic label.
export function VelvetSlider({
  label,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
}: SliderProps) {
  const { colors } = useTheme()
  const [val, setVal] = useState(defaultValue)
  const [focused, setFocused] = useState(false)
  const pct = ((val - min) / (max - min)) * 100

  return (
    <div style={{ width: "100%", maxWidth: 520, fontFamily: "'Playfair Display', serif", opacity: disabled ? 0.65 : 1 }}>
      {(label ?? "").length > 0 && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, alignItems: "baseline" }}>
          <span style={{ color: colors.text.secondary, fontStyle: "italic" }}>{label}</span>
          <span style={{ color: colors.text.primary, fontVariantNumeric: "tabular-nums" }}>{val}</span>
        </div>
      )}

      <div style={{ position: "relative", height: 48 }}>
        <div style={{ position: "absolute", left: 0, right: 0, top: "50%", transform: "translateY(-50%)", height: 10, borderRadius: 999, background: colors.background.dark, opacity: 0.9 }} />
        <div
          style={{
            position: "absolute",
            left: 0,
            width: `${pct}%`,
            top: "50%",
            transform: "translateY(-50%)",
            height: 10,
            borderRadius: 999,
            background: disabled ? colors.text.muted : `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
            transition: "width 180ms ease",
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={val}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setVal(Number(e.target.value))}
          aria-label={label ?? "Velvet slider"}
          style={{ position: "absolute", inset: 0, opacity: 0, width: "100%", height: "100%", margin: 0, cursor: disabled ? "not-allowed" : "pointer" }}
        />

        <div
          style={{
            position: "absolute",
            left: `calc(${pct}% - 12px)`,
            top: "50%",
            transform: "translateY(-50%)",
            width: 24,
            height: 24,
            borderRadius: 999,
            background: "#fff",
            border: `1px solid ${colors.primary}`,
            boxShadow: "0 12px 22px rgba(0,0,0,0.18)",
            pointerEvents: "none",
            transition: "left 180ms ease",
          }}
        />

        {focused && !disabled && (
          <div
            style={{
              position: "absolute",
              left: `calc(${pct}% - 18px)`,
              top: "50%",
              transform: "translateY(-50%)",
              width: 36,
              height: 36,
              borderRadius: 999,
              background: colors.primary,
              opacity: 0.1,
              filter: "blur(1px)",
              pointerEvents: "none",
              transition: "left 180ms ease",
            }}
          />
        )}
      </div>
    </div>
  )
}

export default VelvetSlider
