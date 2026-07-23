"use client"
import { useTheme } from "@/contexts/theme-context"

type P = { value: number; max?: number; showLabel?: boolean }

function Base({ value, max = 100, showLabel = true, trackStyle, barStyle, labelStyle, fontFamily, height = 8, borderRadius = 99 }: P & {
  trackStyle: React.CSSProperties; barStyle: React.CSSProperties; labelStyle: React.CSSProperties
  fontFamily: string; height?: number; borderRadius?: number
}) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div>
      <div style={{ position: 'relative', width: '100%', height, borderRadius, overflow: 'hidden', ...trackStyle }}>
        <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${pct}%`, borderRadius, transition: 'width 0.4s ease', ...barStyle }} />
      </div>
      {showLabel && <div style={{ textAlign: 'right', marginTop: 4, fontSize: '0.75rem', fontFamily, ...labelStyle }}>{pct.toFixed(0)}%</div>}
    </div>
  )
}

// Font: Montserrat — Blocky
export function BlockyProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Montserrat', sans-serif" height={12} borderRadius={2}
    trackStyle={{ backgroundColor: colors.background.dark, border: `2px solid ${colors.border}` }}
    barStyle={{ backgroundColor: colors.primary }}
    labelStyle={{ color: colors.text.secondary, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }} />
}

// Font: Open Sans — Corporate
export function CorporateProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Open Sans', sans-serif" height={8} borderRadius={4}
    trackStyle={{ backgroundColor: colors.background.dark }}
    barStyle={{ backgroundColor: colors.primary }}
    labelStyle={{ color: colors.text.secondary }} />
}

// Font: Poppins — Playful
export function PlayfulProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Poppins', sans-serif" height={14} borderRadius={99}
    trackStyle={{ backgroundColor: colors.background.light, boxShadow: `inset 0 1px 3px ${colors.border}` }}
    barStyle={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`, boxShadow: `0 2px 6px ${colors.primary}44` }}
    labelStyle={{ color: colors.primary, fontWeight: 600 }} />
}

// Font: Inter — Futuristic Clean
export function FuturisticCleanProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Inter', sans-serif" height={6} borderRadius={3}
    trackStyle={{ backgroundColor: colors.background.light, border: `1px solid ${colors.border}44` }}
    barStyle={{ backgroundColor: colors.primary }}
    labelStyle={{ color: colors.text.secondary, fontWeight: 500 }} />
}

// Font: Playfair Display — Elegant Editorial
export function ElegantEditorialProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Playfair Display', serif" height={4} borderRadius={0}
    trackStyle={{ backgroundColor: colors.background.dark }}
    barStyle={{ backgroundColor: colors.secondary }}
    labelStyle={{ color: colors.text.secondary, fontStyle: 'italic' }} />
}

// Font: Nunito — Soft UI
export function SoftUIProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Nunito', sans-serif" height={12} borderRadius={99}
    trackStyle={{ backgroundColor: colors.background.light, boxShadow: `inset 2px 2px 4px ${colors.border}88, inset -1px -1px 3px ${colors.background.main}` }}
    barStyle={{ backgroundColor: colors.primary, boxShadow: `2px 2px 4px ${colors.primary}44` }}
    labelStyle={{ color: colors.text.secondary, fontWeight: 600 }} />
}

// Font: Archivo Narrow — Industrial
export function IndustrialProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Archivo Narrow', sans-serif" height={10} borderRadius={0}
    trackStyle={{ backgroundColor: colors.background.dark, borderLeft: `3px solid ${colors.primary}` }}
    barStyle={{ backgroundColor: colors.primary }}
    labelStyle={{ color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, fontSize: '0.7rem' }} />
}

// Font: Space Grotesk — Experimental
export function ExperimentalProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Space Grotesk', sans-serif" height={14} borderRadius={0}
    trackStyle={{ backgroundColor: 'transparent', border: `2px solid ${colors.border}`, transform: 'rotate(-0.5deg)' }}
    barStyle={{ backgroundColor: colors.accent }}
    labelStyle={{ color: colors.accent, fontWeight: 700 }} />
}

// Font: Satoshi — Oxyn & Gold
export function OxynGoldProgress(p: P) {
  const { colors } = useTheme()
  const gold = '#C9A84C'
  return <Base {...p} fontFamily="'Satoshi', sans-serif" height={6} borderRadius={3}
    trackStyle={{ backgroundColor: colors.background.dark, border: `1px solid ${gold}22` }}
    barStyle={{ backgroundColor: gold }}
    labelStyle={{ color: gold, fontWeight: 600 }} />
}

// Font: Cormorant Garamond — Marble Stone
export function MarbleStoneProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Cormorant Garamond', serif" height={6} borderRadius={99}
    trackStyle={{ backgroundColor: colors.background.light, border: `1px solid ${colors.border}` }}
    barStyle={{ backgroundColor: colors.secondary }}
    labelStyle={{ color: colors.text.secondary, fontSize: '0.8rem' }} />
}

// Font: Cinzel — Art Deco
export function ArtDecoProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Cinzel', serif" height={8} borderRadius={0}
    trackStyle={{ backgroundColor: 'transparent', border: `2px solid ${colors.secondary}` }}
    barStyle={{ backgroundColor: colors.secondary }}
    labelStyle={{ color: colors.secondary, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.7rem', fontWeight: 700 }} />
}

// Font: Nunito Sans — Ocean Pearl
export function OceanPearlProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Nunito Sans', sans-serif" height={10} borderRadius={99}
    trackStyle={{ backgroundColor: colors.background.light, border: `1px solid ${colors.border}44` }}
    barStyle={{ backgroundColor: colors.primary, boxShadow: `0 2px 8px ${colors.primary}44` }}
    labelStyle={{ color: colors.text.secondary, fontWeight: 600 }} />
}

// Font: Playfair Display — Velvet
export function VelvetProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Playfair Display', serif" height={8} borderRadius={99}
    trackStyle={{ backgroundColor: colors.background.dark }}
    barStyle={{ backgroundColor: colors.primary, boxShadow: `0 2px 8px ${colors.primary}33` }}
    labelStyle={{ color: colors.text.secondary, fontStyle: 'italic' }} />
}

// Font: Libre Baskerville — Cinematic Noir
export function CinematicNoirProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Libre Baskerville', serif" height={4} borderRadius={0}
    trackStyle={{ backgroundColor: colors.background.dark }}
    barStyle={{ backgroundColor: colors.text.primary }}
    labelStyle={{ color: colors.text.muted, fontStyle: 'italic' }} />
}

// Font: Satoshi — Obsidian
export function ObsidianProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Satoshi', sans-serif" height={8} borderRadius={2}
    trackStyle={{ backgroundColor: colors.background.dark, border: `1px solid ${colors.border}` }}
    barStyle={{ backgroundColor: colors.primary }}
    labelStyle={{ color: colors.text.secondary, fontWeight: 700, fontSize: '0.7rem' }} />
}

// Font: Rajdhani — Liquid Chrome
export function LiquidChromeProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Rajdhani', sans-serif" height={10} borderRadius={5}
    trackStyle={{ background: `linear-gradient(135deg, ${colors.background.dark}, ${colors.background.main})`, border: `1px solid ${colors.border}44` }}
    barStyle={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }}
    labelStyle={{ color: colors.text.secondary, fontWeight: 600, letterSpacing: '0.04em' }} />
}

// Font: Inter — Frosted Ice
export function FrostedIceProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Inter', sans-serif" height={8} borderRadius={99}
    trackStyle={{ backgroundColor: colors.background.light + 'cc', border: `1px solid ${colors.border}55`, backdropFilter: 'blur(8px)' }}
    barStyle={{ backgroundColor: colors.primary }}
    labelStyle={{ color: colors.text.secondary }} />
}

// Font: Quicksand — Clay
export function ClayProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Quicksand', sans-serif" height={12} borderRadius={99}
    trackStyle={{ backgroundColor: colors.background.light, boxShadow: `inset 3px 3px 6px ${colors.border}88, inset -2px -2px 4px ${colors.background.main}` }}
    barStyle={{ backgroundColor: colors.primary, boxShadow: `2px 2px 4px ${colors.primary}44` }}
    labelStyle={{ color: colors.text.secondary, fontWeight: 600 }} />
}

// Font: Inter — Aurora
export function AuroraProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Inter', sans-serif" height={8} borderRadius={99}
    trackStyle={{ backgroundColor: colors.background.light, border: `1px solid ${colors.border}33` }}
    barStyle={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})` }}
    labelStyle={{ color: colors.text.secondary }} />
}

// Font: Archivo Narrow — Carbon Fiber
export function CarbonFiberProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Archivo Narrow', sans-serif" height={8} borderRadius={2}
    trackStyle={{ backgroundColor: colors.background.dark, border: `1px solid ${colors.border}` }}
    barStyle={{ backgroundColor: colors.primary }}
    labelStyle={{ color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, fontSize: '0.7rem' }} />
}

// Font: Exo 2 — Holographic
export function HolographicProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Exo 2', sans-serif" height={10} borderRadius={5}
    trackStyle={{ background: `linear-gradient(135deg, ${colors.background.dark}ee, ${colors.background.main}dd)`, border: `1px solid ${colors.primary}33` }}
    barStyle={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})` }}
    labelStyle={{ color: colors.text.secondary }} />
}

// Font: Nunito Sans — Sand
export function SandProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Nunito Sans', sans-serif" height={8} borderRadius={99}
    trackStyle={{ backgroundColor: colors.background.light }}
    barStyle={{ backgroundColor: colors.primary }}
    labelStyle={{ color: colors.text.secondary, fontWeight: 600 }} />
}

// Font: Nunito Sans — Silk
export function SilkProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Nunito Sans', sans-serif" height={6} borderRadius={99}
    trackStyle={{ backgroundColor: colors.background.main, border: `1px solid ${colors.border}44` }}
    barStyle={{ backgroundColor: colors.primary }}
    labelStyle={{ color: colors.text.secondary }} />
}

// Font: Satoshi — Prism
export function PrismProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Satoshi', sans-serif" height={10} borderRadius={5}
    trackStyle={{ backgroundColor: colors.background.main, border: `1px solid ${colors.border}55` }}
    barStyle={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.accent})` }}
    labelStyle={{ color: colors.text.secondary, fontWeight: 700 }} />
}

// Font: Satoshi — Cosmic
export function CosmicProgress(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Satoshi', sans-serif" height={8} borderRadius={99}
    trackStyle={{ backgroundColor: colors.background.dark }}
    barStyle={{ backgroundColor: colors.primary, boxShadow: `0 0 12px ${colors.primary}44` }}
    labelStyle={{ color: colors.text.secondary }} />
}
