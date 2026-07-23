"use client"
// Themed Login Forms
// Fonts used (imported in app/globals.css):
// - Montserrat (Blocky), Roboto (Material), Open Sans (Corporate), Poppins (Playful)
// - Inter (Futuristic Clean, Frosted Ice, Aurora), Playfair Display (Editorial, Velvet)
// - Verdana (High-Contrast), Archivo Narrow (Industrial), Space Grotesk (Experimental)
// - Satoshi (Oxyn & Gold, Obsidian, Holographic, Prism, Cosmic)
// - Cormorant Garamond (Marble Stone), Cinzel (Art Deco), Nunito Sans (Ocean Pearl, Sand, Silk)
// - Libre Baskerville (Cinematic Noir), Rajdhani (Liquid Chrome)
// - Quicksand (Clay), Exo 2 (Holographic), Archivo Narrow (Carbon Fiber)

import type React from "react"
import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

interface FormStyles {
  formStyle: React.CSSProperties
  headingStyle: React.CSSProperties
  labelStyle: React.CSSProperties
  inputStyle: React.CSSProperties
  buttonStyle: React.CSSProperties
  linkStyle: React.CSSProperties
}

function BaseLoginForm({ formStyle, headingStyle, labelStyle, inputStyle, buttonStyle, linkStyle }: FormStyles) {
  const [showPw, setShowPw] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <form onSubmit={e => e.preventDefault()} style={formStyle}>
      <h3 style={headingStyle}>Sign In</h3>
      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Email</label>
        <div style={{ position: 'relative' }}>
          <Mail size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: labelStyle.color, opacity: 0.5 }} />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" style={{ ...inputStyle, paddingLeft: 36 }} />
        </div>
      </div>
      <div style={{ marginBottom: 24 }}>
        <label style={labelStyle}>Password</label>
        <div style={{ position: 'relative' }}>
          <Lock size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: labelStyle.color, opacity: 0.5 }} />
          <input type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" style={{ ...inputStyle, paddingLeft: 36, paddingRight: 36 }} />
          <button type="button" onClick={() => setShowPw(!showPw)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: labelStyle.color, opacity: 0.5 }}>
            {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>
      <button type="submit" style={buttonStyle}>Sign In</button>
      <p style={{ textAlign: 'center', marginTop: 16, fontSize: '0.8rem', ...linkStyle }}>
        Don't have an account? <a href="#" style={{ color: buttonStyle.backgroundColor as string || buttonStyle.background as string, textDecoration: 'none', fontWeight: 600 }}>Sign Up</a>
      </p>
    </form>
  )
}

function s(base: React.CSSProperties): React.CSSProperties {
  return { width: '100%', padding: '12px 12px 12px 36px', outline: 'none', transition: 'all 0.2s', boxSizing: 'border-box' as const, ...base }
}

// Font: Montserrat — Blocky
export function BlockyLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.main, border: `3px solid ${colors.text.primary}`, fontFamily: "'Montserrat', sans-serif" }}
    headingStyle={{ fontSize: '1.4rem', fontWeight: 800, color: colors.text.primary, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 24 }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.75rem', fontWeight: 700, color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.06em' }}
    inputStyle={s({ backgroundColor: colors.background.light, color: colors.text.primary, border: `2px solid ${colors.border}`, borderRadius: 0, fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '14px', backgroundColor: colors.text.primary, color: colors.background.main, border: 'none', borderRadius: 0, fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', cursor: 'pointer', boxShadow: `4px 4px 0 ${colors.primary}` }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Roboto — Material
export function MaterialLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.main, borderRadius: 8, boxShadow: '0 2px 10px rgba(0,0,0,0.12)', fontFamily: "'Roboto', sans-serif" }}
    headingStyle={{ fontSize: '1.25rem', fontWeight: 500, color: colors.text.primary, marginBottom: 24 }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.75rem', fontWeight: 500, color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}
    inputStyle={s({ backgroundColor: 'transparent', color: colors.text.primary, border: 'none', borderBottom: `2px solid ${colors.border}`, borderRadius: 0, fontFamily: "'Roboto', sans-serif", fontSize: '0.9rem' })}
    buttonStyle={{ width: '100%', padding: '12px', backgroundColor: colors.primary, color: '#fff', border: 'none', borderRadius: 4, fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.04em', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Open Sans — Corporate
export function CorporateLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.main, border: `1px solid ${colors.border}`, borderRadius: 6, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', fontFamily: "'Open Sans', sans-serif" }}
    headingStyle={{ fontSize: '1.2rem', fontWeight: 600, color: colors.text.primary, marginBottom: 24 }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.8rem', fontWeight: 600, color: colors.text.secondary }}
    inputStyle={s({ backgroundColor: colors.background.light, color: colors.text.primary, border: `1px solid ${colors.border}`, borderRadius: 4, fontFamily: "'Open Sans', sans-serif", fontSize: '0.875rem' })}
    buttonStyle={{ width: '100%', padding: '12px', backgroundColor: colors.primary, color: '#fff', border: 'none', borderRadius: 4, fontFamily: "'Open Sans', sans-serif", fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Poppins — Playful
export function PlayfulLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.main, borderRadius: 20, boxShadow: `0 8px 32px ${colors.primary}15`, fontFamily: "'Poppins', sans-serif" }}
    headingStyle={{ fontSize: '1.4rem', fontWeight: 700, color: colors.primary, marginBottom: 24, textAlign: 'center' }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.8rem', fontWeight: 600, color: colors.text.secondary }}
    inputStyle={s({ backgroundColor: colors.background.light, color: colors.text.primary, border: `2px solid ${colors.border}`, borderRadius: 12, fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '14px', background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`, color: '#fff', border: 'none', borderRadius: 12, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Inter — Futuristic Clean
export function FuturisticCleanLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.main, border: `1px solid ${colors.border}44`, borderRadius: 8, fontFamily: "'Inter', sans-serif" }}
    headingStyle={{ fontSize: '1.15rem', fontWeight: 600, color: colors.text.primary, marginBottom: 24, letterSpacing: '-0.01em' }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.75rem', fontWeight: 500, color: colors.text.muted }}
    inputStyle={s({ backgroundColor: colors.background.light, color: colors.text.primary, border: `1px solid ${colors.border}55`, borderRadius: 6, fontFamily: "'Inter', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '12px', backgroundColor: colors.primary, color: '#fff', border: 'none', borderRadius: 6, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Playfair Display — Elegant Editorial
export function ElegantEditorialLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 36, backgroundColor: colors.background.main, border: `1px solid ${colors.border}`, borderRadius: 2, fontFamily: "'Inter', sans-serif" }}
    headingStyle={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 600, color: colors.text.primary, marginBottom: 28, fontStyle: 'italic' }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.7rem', fontWeight: 500, color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}
    inputStyle={s({ backgroundColor: 'transparent', color: colors.text.primary, border: 'none', borderBottom: `1px solid ${colors.border}`, borderRadius: 0, fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' })}
    buttonStyle={{ width: '100%', padding: '14px', backgroundColor: colors.text.primary, color: colors.background.main, border: 'none', borderRadius: 0, fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.06em', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Verdana — High-Contrast
export function HighContrastLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.dark, border: `3px solid ${colors.text.primary}`, borderRadius: 0, fontFamily: "Verdana, sans-serif" }}
    headingStyle={{ fontSize: '1.3rem', fontWeight: 700, color: colors.text.primary, marginBottom: 24 }}
    labelStyle={{ display: 'block', marginBottom: 8, fontSize: '0.85rem', fontWeight: 700, color: colors.text.primary }}
    inputStyle={s({ backgroundColor: colors.background.main, color: colors.text.primary, border: `2px solid ${colors.text.primary}`, borderRadius: 0, fontFamily: 'Verdana, sans-serif', fontSize: '0.9rem' })}
    buttonStyle={{ width: '100%', padding: '14px', backgroundColor: colors.text.primary, color: colors.background.main, border: 'none', borderRadius: 0, fontFamily: 'Verdana, sans-serif', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.primary }}
  />
}

// Font: Archivo Narrow — Industrial
export function IndustrialLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.dark, borderLeft: `4px solid ${colors.primary}`, fontFamily: "'Archivo Narrow', sans-serif" }}
    headingStyle={{ fontSize: '1.2rem', fontWeight: 700, color: colors.text.primary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 24 }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.7rem', fontWeight: 700, color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.06em' }}
    inputStyle={s({ backgroundColor: colors.background.main, color: colors.text.primary, border: `1px solid ${colors.border}`, borderRadius: 0, fontFamily: "'Archivo Narrow', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '12px', backgroundColor: colors.primary, color: '#fff', border: 'none', borderRadius: 0, fontFamily: "'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Space Grotesk — Experimental
export function ExperimentalLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.main, border: `2px solid ${colors.accent}`, borderRadius: 0, fontFamily: "'Space Grotesk', sans-serif", transform: 'rotate(-0.3deg)' }}
    headingStyle={{ fontSize: '1.5rem', fontWeight: 700, color: colors.accent, marginBottom: 24, transform: 'rotate(0.5deg)' }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.75rem', fontWeight: 600, color: colors.text.muted }}
    inputStyle={s({ backgroundColor: 'transparent', color: colors.text.primary, border: `2px solid ${colors.border}`, borderRadius: 0, fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem' })}
    buttonStyle={{ width: '100%', padding: '14px', backgroundColor: colors.accent, color: colors.background.main, border: 'none', borderRadius: 0, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', transform: 'rotate(0.3deg)' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Satoshi + Playfair Display — Oxyn & Gold
export function OxynGoldLoginForm() {
  const { colors } = useTheme()
  const gold = '#C9A84C'
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 36, backgroundColor: colors.background.dark, border: `1px solid ${gold}33`, borderRadius: 2, fontFamily: "'Satoshi', sans-serif" }}
    headingStyle={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 600, color: gold, marginBottom: 28, letterSpacing: '0.04em' }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.7rem', fontWeight: 600, color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.08em' }}
    inputStyle={s({ backgroundColor: 'transparent', color: colors.text.primary, border: 'none', borderBottom: `1px solid ${gold}44`, borderRadius: 0, fontFamily: "'Satoshi', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '14px', backgroundColor: gold, color: '#1a1a1a', border: 'none', borderRadius: 2, fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Cormorant Garamond — Marble Stone
export function MarbleStoneLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 36, backgroundColor: colors.background.light, border: `1px solid ${colors.border}`, borderRadius: 4, fontFamily: "'Inter', sans-serif" }}
    headingStyle={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 500, color: colors.text.primary, marginBottom: 28 }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.75rem', fontWeight: 500, color: colors.text.secondary }}
    inputStyle={s({ backgroundColor: colors.background.main, color: colors.text.primary, border: `1px solid ${colors.border}`, borderRadius: 4, fontFamily: "'Inter', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '14px', backgroundColor: colors.text.primary, color: colors.background.main, border: 'none', borderRadius: 4, fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: '1rem', letterSpacing: '0.04em', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Cinzel — Art Deco
export function ArtDecoLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 36, backgroundColor: colors.background.main, border: `2px solid ${colors.secondary}`, borderRadius: 0, fontFamily: "'Inter', sans-serif" }}
    headingStyle={{ fontFamily: "'Cinzel', serif", fontSize: '1.2rem', fontWeight: 700, color: colors.secondary, marginBottom: 28, textTransform: 'uppercase', letterSpacing: '0.12em', textAlign: 'center' }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.7rem', fontWeight: 600, color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.08em' }}
    inputStyle={s({ backgroundColor: 'transparent', color: colors.text.primary, border: `1px solid ${colors.secondary}44`, borderRadius: 0, fontFamily: "'Inter', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '14px', backgroundColor: colors.secondary, color: colors.background.main, border: 'none', borderRadius: 0, fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Nunito Sans — Ocean Pearl
export function OceanPearlLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.main, borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.06)', fontFamily: "'Nunito Sans', sans-serif" }}
    headingStyle={{ fontSize: '1.25rem', fontWeight: 700, color: colors.primary, marginBottom: 24 }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.8rem', fontWeight: 600, color: colors.text.secondary }}
    inputStyle={s({ backgroundColor: colors.background.light, color: colors.text.primary, border: `1px solid ${colors.border}55`, borderRadius: 10, fontFamily: "'Nunito Sans', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '12px', background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`, color: '#fff', border: 'none', borderRadius: 10, fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Playfair Display — Velvet
export function VelvetLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 36, backgroundColor: colors.background.dark, borderRadius: 8, boxShadow: `0 8px 32px ${colors.primary}12`, fontFamily: "'Inter', sans-serif" }}
    headingStyle={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 600, color: colors.text.primary, marginBottom: 28, fontStyle: 'italic' }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.75rem', fontWeight: 500, color: colors.text.muted }}
    inputStyle={s({ backgroundColor: 'transparent', color: colors.text.primary, border: 'none', borderBottom: `1px solid ${colors.border}`, borderRadius: 0, fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' })}
    buttonStyle={{ width: '100%', padding: '14px', background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`, color: '#fff', border: 'none', borderRadius: 8, fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Libre Baskerville — Cinematic Noir
export function CinematicNoirLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 36, backgroundColor: colors.background.dark, borderBottom: `2px solid ${colors.text.muted}33`, borderRadius: 0, fontFamily: "'Inter', sans-serif" }}
    headingStyle={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.3rem', fontWeight: 400, color: colors.text.primary, marginBottom: 28, fontStyle: 'italic' }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.7rem', fontWeight: 500, color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}
    inputStyle={s({ backgroundColor: 'transparent', color: colors.text.primary, border: 'none', borderBottom: `1px solid ${colors.text.muted}33`, borderRadius: 0, fontFamily: "'Inter', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '14px', backgroundColor: colors.text.primary, color: colors.background.dark, border: 'none', borderRadius: 0, fontFamily: "'Libre Baskerville', serif", fontWeight: 400, fontSize: '0.9rem', fontStyle: 'italic', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Satoshi — Obsidian
export function ObsidianLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.dark, border: `1px solid ${colors.border}`, borderRadius: 2, fontFamily: "'Satoshi', sans-serif" }}
    headingStyle={{ fontSize: '1.2rem', fontWeight: 700, color: colors.text.primary, marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.06em' }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.7rem', fontWeight: 700, color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.04em' }}
    inputStyle={s({ backgroundColor: colors.background.main, color: colors.text.primary, border: `1px solid ${colors.border}`, borderRadius: 2, fontFamily: "'Satoshi', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '12px', backgroundColor: colors.primary, color: '#fff', border: 'none', borderRadius: 2, fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.04em', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Rajdhani — Liquid Chrome
export function LiquidChromeLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, background: `linear-gradient(135deg, ${colors.background.dark}, ${colors.background.main})`, border: `1px solid ${colors.border}44`, borderRadius: 8, fontFamily: "'Rajdhani', sans-serif" }}
    headingStyle={{ fontSize: '1.3rem', fontWeight: 600, color: colors.text.primary, marginBottom: 24, letterSpacing: '0.06em', textTransform: 'uppercase' }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.75rem', fontWeight: 600, color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.04em' }}
    inputStyle={s({ backgroundColor: 'transparent', color: colors.text.primary, border: `1px solid ${colors.border}55`, borderRadius: 4, fontFamily: "'Rajdhani', sans-serif", fontSize: '0.9rem' })}
    buttonStyle={{ width: '100%', padding: '12px', background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`, color: '#fff', border: 'none', borderRadius: 4, fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.06em', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Inter — Frosted Ice
export function FrostedIceLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.light + 'cc', border: `1px solid ${colors.border}55`, borderRadius: 16, backdropFilter: 'blur(12px)', fontFamily: "'Inter', sans-serif" }}
    headingStyle={{ fontSize: '1.15rem', fontWeight: 600, color: colors.text.primary, marginBottom: 24 }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.75rem', fontWeight: 500, color: colors.text.secondary }}
    inputStyle={s({ backgroundColor: colors.background.main + '88', color: colors.text.primary, border: `1px solid ${colors.border}44`, borderRadius: 10, fontFamily: "'Inter', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '12px', backgroundColor: colors.primary, color: '#fff', border: 'none', borderRadius: 10, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Quicksand — Clay
export function ClayLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.light, borderRadius: 20, boxShadow: `6px 6px 12px ${colors.border}88, -3px -3px 8px ${colors.background.main}`, fontFamily: "'Quicksand', sans-serif" }}
    headingStyle={{ fontSize: '1.25rem', fontWeight: 700, color: colors.text.primary, marginBottom: 24 }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.8rem', fontWeight: 600, color: colors.text.secondary }}
    inputStyle={s({ backgroundColor: colors.background.main, color: colors.text.primary, border: 'none', borderRadius: 12, fontFamily: "'Quicksand', sans-serif", fontSize: '0.85rem', boxShadow: `inset 2px 2px 4px ${colors.border}66, inset -1px -1px 3px ${colors.background.main}` })}
    buttonStyle={{ width: '100%', padding: '14px', backgroundColor: colors.primary, color: '#fff', border: 'none', borderRadius: 12, fontFamily: "'Quicksand', sans-serif", fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', boxShadow: `3px 3px 6px ${colors.border}66` }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Inter — Aurora
export function AuroraLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, background: `linear-gradient(160deg, ${colors.background.main}, ${colors.background.light})`, border: `1px solid ${colors.border}33`, borderRadius: 14, fontFamily: "'Inter', sans-serif" }}
    headingStyle={{ fontSize: '1.2rem', fontWeight: 600, color: colors.text.primary, marginBottom: 24 }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.75rem', fontWeight: 500, color: colors.text.secondary }}
    inputStyle={s({ backgroundColor: colors.background.main + 'aa', color: colors.text.primary, border: `1px solid ${colors.border}44`, borderRadius: 10, fontFamily: "'Inter', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '12px', background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`, color: '#fff', border: 'none', borderRadius: 10, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Archivo Narrow — Carbon Fiber
export function CarbonFiberLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.dark, border: `1px solid ${colors.border}`, borderRadius: 2, fontFamily: "'Archivo Narrow', sans-serif" }}
    headingStyle={{ fontSize: '1.1rem', fontWeight: 700, color: colors.text.primary, marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.1em' }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.7rem', fontWeight: 700, color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.06em' }}
    inputStyle={s({ backgroundColor: colors.background.main, color: colors.text.primary, border: `1px solid ${colors.border}`, borderRadius: 2, fontFamily: "'Archivo Narrow', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '12px', backgroundColor: colors.primary, color: '#fff', border: 'none', borderRadius: 2, fontFamily: "'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Exo 2 — Holographic
export function HolographicLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, background: `linear-gradient(135deg, ${colors.background.dark}ee, ${colors.background.main}dd)`, border: `1px solid ${colors.primary}33`, borderRadius: 12, backdropFilter: 'blur(6px)', fontFamily: "'Exo 2', sans-serif" }}
    headingStyle={{ fontSize: '1.2rem', fontWeight: 600, color: colors.text.primary, marginBottom: 24 }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.75rem', fontWeight: 500, color: colors.text.secondary }}
    inputStyle={s({ backgroundColor: colors.background.main + '44', color: colors.text.primary, border: `1px solid ${colors.primary}22`, borderRadius: 8, fontFamily: "'Exo 2', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '12px', background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`, color: '#fff', border: 'none', borderRadius: 8, fontFamily: "'Exo 2', sans-serif", fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Nunito Sans — Sand
export function SandLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.light, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', fontFamily: "'Nunito Sans', sans-serif" }}
    headingStyle={{ fontSize: '1.2rem', fontWeight: 700, color: colors.text.primary, marginBottom: 24 }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.8rem', fontWeight: 600, color: colors.text.secondary }}
    inputStyle={s({ backgroundColor: colors.background.main, color: colors.text.primary, border: `1px solid ${colors.border}55`, borderRadius: 8, fontFamily: "'Nunito Sans', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '12px', backgroundColor: colors.primary, color: '#fff', border: 'none', borderRadius: 8, fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Nunito Sans — Silk
export function SilkLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.main, border: `1px solid ${colors.border}44`, borderRadius: 18, fontFamily: "'Nunito Sans', sans-serif" }}
    headingStyle={{ fontSize: '1.2rem', fontWeight: 600, color: colors.text.primary, marginBottom: 24 }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.75rem', fontWeight: 500, color: colors.text.secondary }}
    inputStyle={s({ backgroundColor: colors.background.light, color: colors.text.primary, border: `1px solid ${colors.border}33`, borderRadius: 12, fontFamily: "'Nunito Sans', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '12px', backgroundColor: colors.primary, color: '#fff', border: 'none', borderRadius: 12, fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Satoshi — Prism
export function PrismLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 32, backgroundColor: colors.background.main, border: `1px solid ${colors.border}55`, borderRadius: 10, fontFamily: "'Satoshi', sans-serif" }}
    headingStyle={{ fontSize: '1.2rem', fontWeight: 700, color: colors.text.primary, marginBottom: 24 }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.75rem', fontWeight: 600, color: colors.text.secondary }}
    inputStyle={s({ backgroundColor: colors.background.light, color: colors.text.primary, border: `1px solid ${colors.border}44`, borderRadius: 6, fontFamily: "'Satoshi', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '12px', background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary}, ${colors.accent})`, color: '#fff', border: 'none', borderRadius: 6, fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}

// Font: Satoshi — Cosmic
export function CosmicLoginForm() {
  const { colors } = useTheme()
  return <BaseLoginForm
    formStyle={{ maxWidth: 380, padding: 36, backgroundColor: colors.background.dark, border: `1px solid ${colors.border}33`, borderRadius: 12, fontFamily: "'Satoshi', sans-serif" }}
    headingStyle={{ fontSize: '1.3rem', fontWeight: 700, color: colors.text.primary, marginBottom: 28, letterSpacing: '0.02em' }}
    labelStyle={{ display: 'block', marginBottom: 6, fontSize: '0.7rem', fontWeight: 500, color: colors.text.muted, letterSpacing: '0.04em' }}
    inputStyle={s({ backgroundColor: colors.background.main + '44', color: colors.text.primary, border: `1px solid ${colors.border}44`, borderRadius: 8, fontFamily: "'Satoshi', sans-serif", fontSize: '0.85rem' })}
    buttonStyle={{ width: '100%', padding: '14px', background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`, color: '#fff', border: 'none', borderRadius: 8, fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
    linkStyle={{ color: colors.text.muted }}
  />
}
