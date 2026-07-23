"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"

type P = { initialState?: boolean; onChange?: (s: boolean) => void; label?: string }

function Base({ initialState = false, onChange, label, trackOn, trackOff, thumbOn, thumbOff, borderRadius, thumbSize = 20, trackW = 52, trackH = 28, thumbOffset = 4, fontFamily }: P & {
  trackOn: React.CSSProperties; trackOff: React.CSSProperties; thumbOn: React.CSSProperties; thumbOff: React.CSSProperties
  borderRadius: number; thumbSize?: number; trackW?: number; trackH?: number; thumbOffset?: number; fontFamily: string
}) {
  const [on, setOn] = useState(initialState)
  const toggle = () => { const v = !on; setOn(v); onChange?.(v) }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <button type="button" role="switch" aria-checked={on} onClick={toggle}
        style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', width: trackW, height: trackH, borderRadius, cursor: 'pointer', transition: 'all 0.25s ease', ...(on ? trackOn : trackOff) }}>
        <motion.span
          style={{ display: 'block', width: thumbSize, height: thumbSize, borderRadius: borderRadius - 2, position: 'absolute', ...(on ? thumbOn : thumbOff) }}
          initial={false}
          animate={{ x: on ? trackW - thumbSize - thumbOffset : thumbOffset }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }} />
      </button>
      {label && <span style={{ fontFamily, fontSize: '0.85rem', color: on ? trackOn.color || '#fff' : trackOff.color || '#888' }}>{label}</span>}
    </div>
  )
}

// Font: Playfair Display — Luxury
export function LuxuryToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Playfair Display', serif" borderRadius={14}
    trackOn={{ backgroundColor: colors.primary, border: 'none' }} trackOff={{ backgroundColor: colors.background.dark, border: `1px solid ${colors.border}` }}
    thumbOn={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }} thumbOff={{ backgroundColor: colors.text.muted, boxShadow: 'none' }} />
}

// Font: Montserrat — Blocky
export function BlockyToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Montserrat', sans-serif" borderRadius={4} thumbSize={18} trackW={50} trackH={26}
    trackOn={{ backgroundColor: colors.primary, border: 'none' }} trackOff={{ backgroundColor: colors.background.dark, border: `2px solid ${colors.border}` }}
    thumbOn={{ backgroundColor: '#fff', borderRadius: 2 }} thumbOff={{ backgroundColor: colors.text.muted, borderRadius: 2 }} />
}

// Font: Inter — Minimal
export function MinimalToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Inter', sans-serif" borderRadius={14}
    trackOn={{ backgroundColor: colors.primary, border: 'none' }} trackOff={{ backgroundColor: colors.background.light, border: `1px solid ${colors.border}44` }}
    thumbOn={{ backgroundColor: '#fff' }} thumbOff={{ backgroundColor: colors.text.muted }} />
}

// Font: Space Grotesk — Brutalist
export function BrutalistToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Space Grotesk', sans-serif" borderRadius={0} thumbSize={20} trackW={52} trackH={28}
    trackOn={{ backgroundColor: colors.text.primary, border: `2px solid ${colors.text.primary}` }} trackOff={{ backgroundColor: 'transparent', border: `2px solid ${colors.text.primary}` }}
    thumbOn={{ backgroundColor: colors.background.main, borderRadius: 0 }} thumbOff={{ backgroundColor: colors.text.primary, borderRadius: 0 }} />
}

// Font: Press Start 2P — Retro
export function RetroToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Press Start 2P', cursive" borderRadius={0} thumbSize={18} trackW={50} trackH={26}
    trackOn={{ backgroundColor: colors.primary, border: `2px solid ${colors.primary}` }} trackOff={{ backgroundColor: colors.background.dark, border: `2px solid ${colors.primary}` }}
    thumbOn={{ backgroundColor: '#fff', borderRadius: 0 }} thumbOff={{ backgroundColor: colors.primary, borderRadius: 0 }} />
}

// Font: Open Sans — Corporate
export function CorporateToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Open Sans', sans-serif" borderRadius={14}
    trackOn={{ backgroundColor: colors.primary, border: 'none' }} trackOff={{ backgroundColor: colors.background.dark, border: `1px solid ${colors.border}` }}
    thumbOn={{ backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }} thumbOff={{ backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }} />
}

// Font: Poppins — Playful
export function PlayfulToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Poppins', sans-serif" borderRadius={16} thumbSize={22} trackW={54} trackH={30}
    trackOn={{ backgroundColor: colors.primary, border: 'none', boxShadow: `0 2px 8px ${colors.primary}44` }} trackOff={{ backgroundColor: colors.background.light, border: `1px solid ${colors.border}` }}
    thumbOn={{ backgroundColor: '#fff', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }} thumbOff={{ backgroundColor: colors.text.muted }} />
}

// Font: Inter — Futuristic Clean
export function FuturisticCleanToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Inter', sans-serif" borderRadius={14}
    trackOn={{ backgroundColor: colors.primary, border: `1px solid ${colors.primary}` }} trackOff={{ backgroundColor: colors.background.main, border: `1px solid ${colors.border}44` }}
    thumbOn={{ backgroundColor: '#fff' }} thumbOff={{ backgroundColor: colors.text.muted }} />
}

// Font: JetBrains Mono — Monospace
export function MonospaceToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'JetBrains Mono', monospace" borderRadius={4} thumbSize={18} trackW={50} trackH={26}
    trackOn={{ backgroundColor: colors.primary, border: `1px solid ${colors.primary}` }} trackOff={{ backgroundColor: colors.background.dark, border: `1px solid ${colors.border}` }}
    thumbOn={{ backgroundColor: '#fff', borderRadius: 2 }} thumbOff={{ backgroundColor: colors.text.muted, borderRadius: 2 }} />
}

// Font: Playfair Display — Elegant Editorial
export function ElegantEditorialToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Playfair Display', serif" borderRadius={14}
    trackOn={{ backgroundColor: colors.secondary, border: 'none' }} trackOff={{ backgroundColor: colors.background.light, border: `1px solid ${colors.border}` }}
    thumbOn={{ backgroundColor: '#fff' }} thumbOff={{ backgroundColor: colors.text.muted }} />
}

// Font: Nunito — Soft UI
export function SoftUIToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Nunito', sans-serif" borderRadius={16} thumbSize={22} trackW={54} trackH={30}
    trackOn={{ backgroundColor: colors.primary, border: 'none', boxShadow: `inset 2px 2px 4px ${colors.primary}88` }} trackOff={{ backgroundColor: colors.background.light, border: 'none', boxShadow: `inset 2px 2px 5px ${colors.border}88, inset -2px -2px 5px ${colors.background.main}` }}
    thumbOn={{ backgroundColor: '#fff', boxShadow: `2px 2px 4px ${colors.primary}44` }} thumbOff={{ backgroundColor: '#fff', boxShadow: `2px 2px 4px ${colors.border}66` }} />
}

// Font: Archivo Narrow — Industrial
export function IndustrialToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Archivo Narrow', sans-serif" borderRadius={4} thumbSize={18} trackW={50} trackH={26}
    trackOn={{ backgroundColor: colors.primary, borderLeft: `3px solid ${colors.primary}` }} trackOff={{ backgroundColor: colors.background.dark, borderLeft: `3px solid ${colors.border}` }}
    thumbOn={{ backgroundColor: '#fff', borderRadius: 2 }} thumbOff={{ backgroundColor: colors.text.muted, borderRadius: 2 }} />
}

// Font: Orbitron — Gaming HUD
export function GamingHudToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Orbitron', sans-serif" borderRadius={2} thumbSize={18} trackW={50} trackH={26}
    trackOn={{ backgroundColor: colors.background.dark, border: `1px solid ${colors.primary}`, boxShadow: `0 0 8px ${colors.primary}44, inset 0 0 12px ${colors.primary}22` }} trackOff={{ backgroundColor: colors.background.dark, border: `1px solid ${colors.border}` }}
    thumbOn={{ backgroundColor: colors.primary, borderRadius: 1, boxShadow: `0 0 6px ${colors.primary}66` }} thumbOff={{ backgroundColor: colors.text.muted, borderRadius: 1 }} />
}

// Font: Space Grotesk — Experimental
export function ExperimentalToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Space Grotesk', sans-serif" borderRadius={0}
    trackOn={{ backgroundColor: colors.accent, border: `2px solid ${colors.accent}`, transform: 'rotate(-1deg)' }} trackOff={{ backgroundColor: 'transparent', border: `2px solid ${colors.border}`, transform: 'rotate(1deg)' }}
    thumbOn={{ backgroundColor: colors.background.main, borderRadius: 0 }} thumbOff={{ backgroundColor: colors.accent, borderRadius: 0 }} />
}

// Font: Satoshi — Oxyn & Gold
export function OxynGoldToggle(p: P) {
  const { colors } = useTheme()
  const gold = '#C9A84C'
  return <Base {...p} fontFamily="'Satoshi', sans-serif" borderRadius={4}
    trackOn={{ backgroundColor: gold, border: `1px solid ${gold}` }} trackOff={{ backgroundColor: colors.background.dark, border: `1px solid ${gold}33` }}
    thumbOn={{ backgroundColor: colors.background.dark }} thumbOff={{ backgroundColor: gold + '88' }} />
}

// Font: Cormorant Garamond — Marble Stone
export function MarbleStoneToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Cormorant Garamond', serif" borderRadius={14}
    trackOn={{ backgroundColor: colors.secondary, border: 'none' }} trackOff={{ backgroundColor: colors.background.light, border: `1px solid ${colors.border}` }}
    thumbOn={{ backgroundColor: '#fff' }} thumbOff={{ backgroundColor: colors.text.muted }} />
}

// Font: Cinzel — Art Deco
export function ArtDecoToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Cinzel', serif" borderRadius={2}
    trackOn={{ backgroundColor: colors.secondary, border: `2px solid ${colors.secondary}` }} trackOff={{ backgroundColor: 'transparent', border: `2px solid ${colors.secondary}` }}
    thumbOn={{ backgroundColor: '#fff', borderRadius: 1 }} thumbOff={{ backgroundColor: colors.secondary, borderRadius: 1 }} />
}

// Font: Nunito Sans — Ocean Pearl
export function OceanPearlToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Nunito Sans', sans-serif" borderRadius={16} thumbSize={22} trackW={54} trackH={30}
    trackOn={{ backgroundColor: colors.primary, border: 'none', boxShadow: `0 2px 8px ${colors.primary}44` }} trackOff={{ backgroundColor: colors.background.light, border: `1px solid ${colors.border}44` }}
    thumbOn={{ backgroundColor: '#fff' }} thumbOff={{ backgroundColor: colors.text.muted }} />
}

// Font: Playfair Display — Velvet
export function VelvetToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Playfair Display', serif" borderRadius={14}
    trackOn={{ backgroundColor: colors.primary, border: 'none', boxShadow: `0 4px 12px ${colors.primary}33` }} trackOff={{ backgroundColor: colors.background.dark, border: 'none', boxShadow: `0 2px 6px rgba(0,0,0,0.1)` }}
    thumbOn={{ backgroundColor: '#fff' }} thumbOff={{ backgroundColor: colors.text.muted }} />
}

// Font: Libre Baskerville — Cinematic Noir
export function CinematicNoirToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Libre Baskerville', serif" borderRadius={14}
    trackOn={{ backgroundColor: colors.text.primary, border: 'none' }} trackOff={{ backgroundColor: 'transparent', border: `1px solid ${colors.text.muted}44` }}
    thumbOn={{ backgroundColor: colors.background.main }} thumbOff={{ backgroundColor: colors.text.muted }} />
}

// Font: Satoshi — Obsidian
export function ObsidianToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Satoshi', sans-serif" borderRadius={6}
    trackOn={{ backgroundColor: colors.primary, border: `1px solid ${colors.primary}` }} trackOff={{ backgroundColor: colors.background.dark, border: `1px solid ${colors.border}` }}
    thumbOn={{ backgroundColor: '#fff', borderRadius: 4 }} thumbOff={{ backgroundColor: colors.text.muted, borderRadius: 4 }} />
}

// Font: Inter — Frosted Ice
export function FrostedIceToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Inter', sans-serif" borderRadius={14}
    trackOn={{ backgroundColor: colors.primary + 'cc', border: `1px solid ${colors.border}55`, backdropFilter: 'blur(12px)' }} trackOff={{ backgroundColor: colors.background.light + 'cc', border: `1px solid ${colors.border}55`, backdropFilter: 'blur(12px)' }}
    thumbOn={{ backgroundColor: '#fff' }} thumbOff={{ backgroundColor: colors.text.muted }} />
}

// Font: Quicksand — Clay
export function ClayToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Quicksand', sans-serif" borderRadius={16} thumbSize={22} trackW={54} trackH={30}
    trackOn={{ backgroundColor: colors.primary, border: 'none', boxShadow: `inset 2px 2px 4px ${colors.primary}88` }} trackOff={{ backgroundColor: colors.background.light, border: 'none', boxShadow: `4px 4px 8px ${colors.border}88, -2px -2px 6px ${colors.background.main}` }}
    thumbOn={{ backgroundColor: '#fff', boxShadow: `2px 2px 4px ${colors.primary}44` }} thumbOff={{ backgroundColor: '#fff', boxShadow: `2px 2px 4px ${colors.border}66` }} />
}

// Font: Inter — Aurora
export function AuroraToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Inter', sans-serif" borderRadius={14}
    trackOn={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`, border: 'none' }} trackOff={{ backgroundColor: colors.background.light, border: `1px solid ${colors.border}33` }}
    thumbOn={{ backgroundColor: '#fff' }} thumbOff={{ backgroundColor: colors.text.muted }} />
}

// Font: Archivo Narrow — Carbon Fiber
export function CarbonFiberToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Archivo Narrow', sans-serif" borderRadius={4} thumbSize={18} trackW={50} trackH={26}
    trackOn={{ backgroundColor: colors.primary, border: `1px solid ${colors.primary}` }} trackOff={{ backgroundColor: colors.background.dark, border: `1px solid ${colors.border}` }}
    thumbOn={{ backgroundColor: '#fff', borderRadius: 2 }} thumbOff={{ backgroundColor: colors.text.muted, borderRadius: 2 }} />
}

// Font: Exo 2 — Holographic
export function HolographicToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Exo 2', sans-serif" borderRadius={14}
    trackOn={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`, border: `1px solid ${colors.primary}33` }} trackOff={{ backgroundColor: colors.background.dark + 'dd', border: `1px solid ${colors.primary}33` }}
    thumbOn={{ backgroundColor: '#fff' }} thumbOff={{ backgroundColor: colors.text.muted }} />
}

// Font: Nunito Sans — Sand
export function SandToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Nunito Sans', sans-serif" borderRadius={14}
    trackOn={{ backgroundColor: colors.primary, border: 'none' }} trackOff={{ backgroundColor: colors.background.light, border: 'none', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
    thumbOn={{ backgroundColor: '#fff' }} thumbOff={{ backgroundColor: colors.text.muted }} />
}

// Font: Nunito Sans — Silk
export function SilkToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Nunito Sans', sans-serif" borderRadius={16}
    trackOn={{ backgroundColor: colors.primary, border: `1px solid ${colors.primary}` }} trackOff={{ backgroundColor: colors.background.main, border: `1px solid ${colors.border}44` }}
    thumbOn={{ backgroundColor: '#fff' }} thumbOff={{ backgroundColor: colors.text.muted }} />
}

// Font: Satoshi — Prism
export function PrismToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Satoshi', sans-serif" borderRadius={10}
    trackOn={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary}, ${colors.accent})`, border: 'none' }} trackOff={{ backgroundColor: colors.background.main, border: `1px solid ${colors.border}55` }}
    thumbOn={{ backgroundColor: '#fff' }} thumbOff={{ backgroundColor: colors.text.muted }} />
}

// Font: Satoshi — Cosmic
export function CosmicToggle(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Satoshi', sans-serif" borderRadius={14}
    trackOn={{ backgroundColor: colors.primary + 'cc', border: 'none', boxShadow: `0 0 12px ${colors.primary}44` }} trackOff={{ backgroundColor: colors.background.dark, border: 'none' }}
    thumbOn={{ backgroundColor: '#fff', boxShadow: `0 0 8px ${colors.primary}44` }} thumbOff={{ backgroundColor: colors.text.muted }} />
}
