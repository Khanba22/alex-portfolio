"use client"

import { FormEvent, useState } from "react"
import { ArrowLeft, ArrowUpRight, CheckCircle2, LockKeyhole } from "lucide-react"
import Link from "next/link"
import { portfolioMenuItems, VelvetNavbar } from "./themed-navbars"
import VelvetBadge from "./velvet-badge"
import { useTheme } from "../contexts/theme-context"

export type InquiryField = {
  label: string
  name: string
  type?: "text" | "email" | "tel" | "select" | "textarea"
  optional?: boolean
  options?: string[]
}

type Props = {
  eyebrow: string
  title: string
  intro: string
  success: string
  reassurance: string
  submitLabel: string
  fields: InquiryField[]
  note?: string
  activePage?: string
}

export default function InquiryPage({ eyebrow, title, intro, success, reassurance, submitLabel, fields, note, activePage }: Props) {
  const { colors } = useTheme()
  const [submitted, setSubmitted] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main style={{ backgroundColor: colors.background.dark, color: colors.text.primary }} className="min-h-screen">
      <VelvetNavbar logo="AK / Toronto" menuItems={portfolioMenuItems(activePage)} />
      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-16 md:grid-cols-[.8fr_1.2fr] md:px-10 md:pb-32 md:pt-24">
        <div className="max-w-xl">
          <Link href="/" style={{ color: colors.text.muted }} className="mb-14 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em]"><ArrowLeft size={14} /> Back to Alex Kouba</Link>
          <VelvetBadge variant="primary">{eyebrow}</VelvetBadge>
          <h1 style={{ fontFamily: "Georgia, serif" }} className="mt-7 text-5xl leading-[.98] tracking-[-.04em] md:text-7xl">{title}</h1>
          <p style={{ color: colors.text.secondary }} className="mt-7 max-w-lg text-base leading-8">{intro}</p>
          <div style={{ borderTop: `1px solid ${colors.border}` }} className="mt-12 pt-6"><div className="flex gap-3"><LockKeyhole size={16} style={{ color: colors.primary }} /><p style={{ color: colors.text.muted }} className="max-w-sm text-xs leading-6">{reassurance}</p></div></div>
        </div>

        <div style={{ backgroundColor: colors.background.main, border: `1px solid ${colors.border}`, boxShadow: colors.shadow }} className="p-6 md:p-10">
          {submitted ? (
            <div className="flex min-h-[520px] flex-col items-center justify-center text-center"><CheckCircle2 style={{ color: colors.primary }} size={42} strokeWidth={1.2} /><h2 style={{ fontFamily: "Georgia, serif" }} className="mt-7 text-4xl italic">Inquiry received.</h2><p style={{ color: colors.text.secondary }} className="mt-5 max-w-sm text-sm leading-7">{success}</p><button onClick={() => setSubmitted(false)} style={{ color: colors.primary }} className="mt-8 text-[10px] font-bold uppercase tracking-[.16em]">Send another inquiry</button></div>
          ) : (
            <form onSubmit={submit} className="space-y-6">
              <div className="mb-8 flex items-end justify-between gap-4"><div><p style={{ color: colors.primary }} className="text-[10px] font-bold uppercase tracking-[.2em]">Private inquiry</p><h2 style={{ fontFamily: "Georgia, serif" }} className="mt-2 text-3xl italic">Tell me what you’re working with.</h2></div><span style={{ color: colors.text.muted }} className="text-[10px]">Step 01 / 01</span></div>
              {fields.map((field) => <label key={field.name} className="block"><span style={{ color: colors.text.secondary }} className="mb-2 block text-xs">{field.label} {field.optional && <em style={{ color: colors.text.muted }}>(optional)</em>}</span>{field.type === "textarea" ? <textarea name={field.name} required={!field.optional} rows={4} placeholder="Share as much context as useful..." style={{ backgroundColor: colors.background.dark, border: `1px solid ${colors.border}`, color: colors.text.primary }} className="w-full resize-y px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#8e777e] focus:border-[#d7a866]" /> : field.type === "select" ? <select name={field.name} required={!field.optional} defaultValue="" style={{ backgroundColor: colors.background.dark, border: `1px solid ${colors.border}`, color: colors.text.primary }} className="w-full px-4 py-3 text-sm outline-none transition-colors focus:border-[#d7a866]"><option value="" disabled>Select one</option>{field.options?.map((option) => <option key={option} value={option}>{option}</option>)}</select> : <input name={field.name} required={!field.optional} type={field.type ?? "text"} style={{ backgroundColor: colors.background.dark, border: `1px solid ${colors.border}`, color: colors.text.primary }} className="w-full px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#8e777e] focus:border-[#d7a866]" />}</label>)}
              {note && <p style={{ color: colors.text.muted, borderTop: `1px solid ${colors.border}` }} className="pt-5 text-xs leading-6">{note}</p>}
              <button type="submit" style={{ background: colors.gradients.primary, color: colors.background.dark }} className="w-full py-4 text-[10px] font-bold uppercase tracking-[.18em]">{submitLabel} <ArrowUpRight size={14} className="ml-2 inline" /></button>
              <p style={{ color: colors.text.muted }} className="text-center text-[10px]">By submitting, you’re asking Alex to contact you about this inquiry.</p>
            </form>
          )}
        </div>
      </section>
      <footer style={{ borderTop: `1px solid ${colors.border}`, color: colors.text.muted }} className="px-6 py-8 text-center text-[10px] font-bold uppercase tracking-[.14em]">Alex Kouba · Market Intelligence · Toronto, ON</footer>
    </main>
  )
}
