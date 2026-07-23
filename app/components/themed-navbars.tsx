"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useTheme } from "@/contexts/theme-context"
import { Menu, X } from "lucide-react"

interface MenuItem { href: string; label: string; active?: boolean }
type P = { logo?: string; menuItems?: MenuItem[] }

export function portfolioMenuItems(active?: string): MenuItem[] {
  return [
    { href: "/", label: "Home", active: active === "Home" },
    { href: "/buy-sell", label: "Buy or sell", active: active === "Buy or sell" },
    { href: "/custom-report", label: "Custom reports", active: active === "Custom reports" },
    { href: "/get-featured", label: "Get featured", active: active === "Get featured" },
    { href: "/articles", label: "Insights", active: active === "Insights" },
    { href: "/deal-room", label: "Deal Room", active: active === "Deal Room" },
    { href: "/playbook", label: "Playbook", active: active === "Playbook" },
    { href: "mailto:alex@thealexkouba.com", label: "Email Alex", active: active === "Email Alex" },
  ]
}

const defaultItems: MenuItem[] = [
  { href: '#', label: 'Home', active: true },
  { href: '#', label: 'About' },
  { href: '#', label: 'Services' },
  { href: '#', label: 'Contact' },
]

function Base({ logo = 'Brand', menuItems = defaultItems, headerStyle, linkStyle, activeLinkStyle, fontFamily }: P & {
  headerStyle: React.CSSProperties; linkStyle: React.CSSProperties; activeLinkStyle: React.CSSProperties; fontFamily: string
}) {
  const { colors } = useTheme()
  const [open, setOpen] = useState(false)
  return (
    <header style={{ padding: '0 16px', fontFamily, ...headerStyle }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <div style={{ fontWeight: 700, fontSize: '1rem', color: activeLinkStyle.color || colors.text.primary }}>{logo}</div>
        <nav style={{ display: 'flex', gap: 18 }} className="hidden md:flex">
          {menuItems.map(item => (
            <a key={item.label} href={item.href} style={{ textDecoration: 'none', fontSize: '0.8rem', transition: 'all 0.2s', ...(item.active ? activeLinkStyle : linkStyle) }}>{item.label}</a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: colors.text.primary, background: 'none', border: 'none', cursor: 'pointer' }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden" style={{ paddingBottom: 12 }}>
          {menuItems.map(item => (
            <a key={item.label} href={item.href} style={{ display: 'block', padding: '8px 0', textDecoration: 'none', fontSize: '0.85rem', ...(item.active ? activeLinkStyle : linkStyle) }}>{item.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}

// Font: Montserrat — Blocky
export function BlockyNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Montserrat', sans-serif" headerStyle={{ backgroundColor: colors.background.light, borderBottom: `3px solid ${colors.border}` }} linkStyle={{ color: colors.text.muted, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }} activeLinkStyle={{ color: colors.text.primary, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }} />
}

// Font: Inter — Minimal
export function MinimalNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Inter', sans-serif" headerStyle={{ backgroundColor: colors.background.main, borderBottom: `1px solid ${colors.border}44` }} linkStyle={{ color: colors.text.muted, fontWeight: 400 }} activeLinkStyle={{ color: colors.text.primary, fontWeight: 500 }} />
}

// Font: Open Sans — Corporate
export function CorporateNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Open Sans', sans-serif" headerStyle={{ backgroundColor: colors.background.main, borderBottom: `1px solid ${colors.border}`, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }} linkStyle={{ color: colors.text.secondary }} activeLinkStyle={{ color: colors.primary, fontWeight: 600 }} />
}

// Font: Poppins — Playful
export function PlayfulNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Poppins', sans-serif" headerStyle={{ backgroundColor: colors.primary, borderRadius: 0 }} linkStyle={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }} activeLinkStyle={{ color: '#fff', fontWeight: 600 }} />
}

// Font: Inter — Futuristic Clean
export function FuturisticCleanNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Inter', sans-serif" headerStyle={{ backgroundColor: colors.background.main, borderBottom: `1px solid ${colors.border}44` }} linkStyle={{ color: colors.text.muted, fontWeight: 500 }} activeLinkStyle={{ color: colors.primary, fontWeight: 500 }} />
}

// Font: Playfair Display — Elegant Editorial
export function ElegantEditorialNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Playfair Display', serif" headerStyle={{ backgroundColor: colors.background.main, borderBottom: `1px solid ${colors.border}` }} linkStyle={{ color: colors.text.muted, fontStyle: 'italic', letterSpacing: '0.04em' }} activeLinkStyle={{ color: colors.text.primary, fontStyle: 'italic', fontWeight: 600 }} />
}

// Font: Nunito — Soft UI
export function SoftUINavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Nunito', sans-serif" headerStyle={{ backgroundColor: colors.background.light, boxShadow: `4px 4px 8px ${colors.border}66, -2px -2px 6px ${colors.background.main}`, borderRadius: 16, margin: '8px 0' }} linkStyle={{ color: colors.text.muted, fontWeight: 600 }} activeLinkStyle={{ color: colors.primary, fontWeight: 700 }} />
}

// Font: Verdana — High-Contrast
export function HighContrastNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="Verdana, sans-serif" headerStyle={{ backgroundColor: colors.text.primary, borderBottom: `2px solid ${colors.primary}` }} linkStyle={{ color: colors.background.main + 'aa', fontWeight: 600 }} activeLinkStyle={{ color: colors.background.main, fontWeight: 700 }} />
}

// Font: Archivo Narrow — Industrial
export function IndustrialNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Archivo Narrow', sans-serif" headerStyle={{ backgroundColor: colors.background.dark, borderBottom: `3px solid ${colors.primary}` }} linkStyle={{ color: colors.text.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.75rem' }} activeLinkStyle={{ color: colors.primary, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.75rem' }} />
}

// Font: Space Grotesk — Experimental
export function ExperimentalNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Space Grotesk', sans-serif" headerStyle={{ backgroundColor: colors.background.main, border: `2px solid ${colors.accent}`, transform: 'rotate(-0.3deg)' }} linkStyle={{ color: colors.text.muted, fontWeight: 700 }} activeLinkStyle={{ color: colors.accent, fontWeight: 700 }} />
}

// Font: Satoshi — Oxyn & Gold
export function OxynGoldNavbar(p: P) {
  const { colors } = useTheme()
  const gold = '#C9A84C'
  return <Base {...p} fontFamily="'Satoshi', sans-serif" headerStyle={{ backgroundColor: colors.background.dark, borderBottom: `1px solid ${gold}33` }} linkStyle={{ color: colors.text.muted, fontWeight: 500 }} activeLinkStyle={{ color: gold, fontWeight: 600 }} />
}

// Font: Cormorant Garamond — Marble Stone
export function MarbleStoneNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Cormorant Garamond', serif" headerStyle={{ backgroundColor: colors.background.light, borderBottom: `1px solid ${colors.border}` }} linkStyle={{ color: colors.text.muted, fontSize: '0.9rem' }} activeLinkStyle={{ color: colors.text.primary, fontWeight: 600, fontSize: '0.9rem' }} />
}

// Font: Nunito Sans — Ocean Pearl
export function OceanPearlNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Nunito Sans', sans-serif" headerStyle={{ backgroundColor: colors.background.light, borderBottom: `1px solid ${colors.border}44`, boxShadow: `0 2px 8px ${colors.primary}11` }} linkStyle={{ color: colors.text.muted, fontWeight: 600 }} activeLinkStyle={{ color: colors.primary, fontWeight: 700 }} />
}

// Font: Playfair Display — Velvet
export function VelvetNavbar(p: P) {
  const { colors } = useTheme()
  const pathname = usePathname()
  const active = pathname === "/" ? "Home" : pathname.startsWith("/buy-sell") ? "Buy or sell" : pathname.startsWith("/custom-report") ? "Custom reports" : pathname.startsWith("/get-featured") ? "Get featured" : pathname.startsWith("/articles") ? "Insights" : pathname.startsWith("/deal-room") ? "Deal Room" : pathname.startsWith("/playbook") ? "Playbook" : undefined
  return <Base {...p} menuItems={portfolioMenuItems(active)} fontFamily="'Playfair Display', serif" headerStyle={{ backgroundColor: colors.background.dark, borderBottom: 'none', boxShadow: `0 4px 12px ${colors.primary}15` }} linkStyle={{ color: colors.text.muted, fontStyle: 'italic' }} activeLinkStyle={{ color: colors.primary, fontStyle: 'italic', fontWeight: 600 }} />
}

// Font: Libre Baskerville — Cinematic Noir
export function CinematicNoirNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Libre Baskerville', serif" headerStyle={{ backgroundColor: colors.background.dark, borderBottom: `1px solid ${colors.text.muted}22` }} linkStyle={{ color: colors.text.muted, fontStyle: 'italic' }} activeLinkStyle={{ color: colors.text.primary, fontStyle: 'italic' }} />
}

// Font: Satoshi — Obsidian
export function ObsidianNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Satoshi', sans-serif" headerStyle={{ backgroundColor: colors.background.dark, borderBottom: `2px solid ${colors.border}` }} linkStyle={{ color: colors.text.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '0.78rem' }} activeLinkStyle={{ color: '#fff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '0.78rem' }} />
}

// Font: Rajdhani — Liquid Chrome
export function LiquidChromeNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Rajdhani', sans-serif" headerStyle={{ background: `linear-gradient(135deg, ${colors.background.dark}, ${colors.background.main})`, borderBottom: `1px solid ${colors.border}44` }} linkStyle={{ color: colors.text.muted, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }} activeLinkStyle={{ color: colors.primary, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }} />
}

// Font: Inter — Frosted Ice
export function FrostedIceNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Inter', sans-serif" headerStyle={{ backgroundColor: colors.background.light + 'cc', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${colors.border}55` }} linkStyle={{ color: colors.text.muted }} activeLinkStyle={{ color: colors.primary, fontWeight: 500 }} />
}

// Font: Quicksand — Clay
export function ClayNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Quicksand', sans-serif" headerStyle={{ backgroundColor: colors.background.light, boxShadow: `4px 4px 8px ${colors.border}88, -2px -2px 6px ${colors.background.main}`, borderRadius: 18, margin: '8px 0' }} linkStyle={{ color: colors.text.muted, fontWeight: 600 }} activeLinkStyle={{ color: colors.primary, fontWeight: 700 }} />
}

// Font: Inter — Aurora
export function AuroraNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Inter', sans-serif" headerStyle={{ background: `linear-gradient(160deg, ${colors.background.main}, ${colors.background.light})`, borderBottom: `1px solid ${colors.border}33` }} linkStyle={{ color: colors.text.muted }} activeLinkStyle={{ color: colors.primary, fontWeight: 500 }} />
}

// Font: Archivo Narrow — Carbon Fiber
export function CarbonFiberNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Archivo Narrow', sans-serif" headerStyle={{ backgroundColor: colors.background.dark, borderBottom: `1px solid ${colors.border}` }} linkStyle={{ color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, fontSize: '0.75rem' }} activeLinkStyle={{ color: colors.primary, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, fontSize: '0.75rem' }} />
}

// Font: Exo 2 — Holographic
export function HolographicNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Exo 2', sans-serif" headerStyle={{ background: `linear-gradient(135deg, ${colors.background.dark}ee, ${colors.background.main}dd)`, borderBottom: `1px solid ${colors.primary}33` }} linkStyle={{ color: colors.text.muted }} activeLinkStyle={{ color: colors.primary }} />
}

// Font: Nunito Sans — Sand
export function SandNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Nunito Sans', sans-serif" headerStyle={{ backgroundColor: colors.background.light, borderBottom: 'none', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }} linkStyle={{ color: colors.text.muted, fontWeight: 600 }} activeLinkStyle={{ color: colors.text.primary, fontWeight: 700 }} />
}

// Font: Nunito Sans — Silk
export function SilkNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Nunito Sans', sans-serif" headerStyle={{ backgroundColor: colors.background.main, borderBottom: `1px solid ${colors.border}44` }} linkStyle={{ color: colors.text.muted }} activeLinkStyle={{ color: colors.primary }} />
}

// Font: Satoshi — Prism
export function PrismNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Satoshi', sans-serif" headerStyle={{ backgroundColor: colors.background.main, borderBottom: `1px solid ${colors.border}55` }} linkStyle={{ color: colors.text.muted, fontWeight: 700 }} activeLinkStyle={{ color: colors.primary, fontWeight: 700 }} />
}

// Font: Satoshi — Cosmic
export function CosmicNavbar(p: P) {
  const { colors } = useTheme()
  return <Base {...p} fontFamily="'Satoshi', sans-serif" headerStyle={{ backgroundColor: colors.background.dark, borderBottom: 'none', boxShadow: `0 0 16px ${colors.primary}15` }} linkStyle={{ color: colors.text.muted }} activeLinkStyle={{ color: colors.primary, fontWeight: 500 }} />
}
