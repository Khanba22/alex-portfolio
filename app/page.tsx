"use client"

import { useState } from "react"
import { ArrowUpRight, CheckCircle2, ChevronRight, Play, Sparkles } from "lucide-react"
import { VelvetCard } from "./components/velvet-card"
import VelvetBadge from "./components/velvet-badge"
import VelvetInput from "./components/velvet-input"
import VelvetSlider from "./components/velvet-slider"
import { VelvetTabs } from "./components/velvet-tabs"
import { VelvetVerticalTabs } from "./components/velvet-vertical-tabs"
import { VelvetToggle } from "./components/themed-toggles"
import { portfolioMenuItems, VelvetNavbar } from "./components/themed-navbars"
import { useTheme } from "./contexts/theme-context"

const reels = [
  {
    id: "reel-1",
    reelId: "DVrtLoWipoh",
    title: "Why GTA warehouses are the quiet winner",
    views: "128K views",
    tag: "Market breakdown",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=1100&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-financial-graphs-and-charts-on-a-digital-screen-41551-large.mp4",
    instagramUrl: "https://www.instagram.com/reel/DVrtLoWipoh/"
  },
  {
    id: "reel-2",
    reelId: "DVrtLoWipoh",
    title: "3 numbers every business buyer misses",
    views: "94K views",
    tag: "Valuation tips",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=1100&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-business-people-meeting-in-a-modern-office-43323-large.mp4",
    instagramUrl: "https://www.instagram.com/reel/DVrtLoWipoh/"
  },
  {
    id: "reel-3",
    reelId: "DVrtLoWipoh",
    title: "Is Toronto's economy actually slowing?",
    views: "211K views",
    tag: "Market breakdown",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=900&h=1100&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-metropolitan-city-at-night-42289-large.mp4",
    instagramUrl: "https://www.instagram.com/reel/DVrtLoWipoh/"
  },
  {
    id: "reel-4",
    reelId: "DVrtLoWipoh",
    title: "How I value a small business in 5 steps",
    views: "163K views",
    tag: "Valuation tips",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&h=1100&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-person-working-on-a-laptop-in-an-office-43320-large.mp4",
    instagramUrl: "https://www.instagram.com/reel/DVrtLoWipoh/"
  },
  {
    id: "reel-5",
    reelId: "DVrtLoWipoh",
    title: "Toronto SMB deal pipeline for 2026",
    views: "175K views",
    tag: "Deal flow",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=1100&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-green-screen-43285-large.mp4",
    instagramUrl: "https://www.instagram.com/reel/DVrtLoWipoh/"
  },
  {
    id: "reel-6",
    reelId: "DVrtLoWipoh",
    title: "What private owners get wrong about valuation",
    views: "142K views",
    tag: "Valuation tips",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=1100&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-financial-graphs-and-charts-on-a-digital-screen-41551-large.mp4",
    instagramUrl: "https://www.instagram.com/reel/DVrtLoWipoh/"
  },
  {
    id: "reel-7",
    reelId: "DVrtLoWipoh",
    title: "Sourcing off-market acquisitions in Ontario",
    views: "189K views",
    tag: "Deal flow",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&h=1100&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-business-people-meeting-in-a-modern-office-43323-large.mp4",
    instagramUrl: "https://www.instagram.com/reel/DVrtLoWipoh/"
  },
  {
    id: "reel-8",
    reelId: "DVrtLoWipoh",
    title: "The five Toronto sectors with most activity",
    views: "205K views",
    tag: "Market breakdown",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=1100&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-metropolitan-city-at-night-42289-large.mp4",
    instagramUrl: "https://www.instagram.com/reel/DVrtLoWipoh/"
  },
]

const articles = [
  ["Toronto economy", "Where the GTA economy is heading in 2026", "Rates, rents, and hiring are sending mixed signals. Here's what the numbers actually say for owners and operators.", "Market brief · 6 min read"],
  ["Sector spotlight", "The five Toronto sectors with the most deal activity", "From logistics to health services — where capital is moving, where multiples are holding, and where the buyers are.", "Analysis · 8 min read"],
  ["Deal flow", "What private owners are getting wrong about valuation", "A practical read on how small and mid-market businesses are priced — and the levers that actually move the number.", "Playbook · 5 min read"],
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  const { colors } = useTheme()
  return <p style={{ color: colors.primary }} className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em]">{children}</p>
}

function Rule() {
  const { colors } = useTheme()
  return <div aria-hidden="true" style={{ background: `linear-gradient(90deg, transparent, ${colors.border}, transparent)` }} className="h-px w-full" />
}

export default function Home() {
  const { colors } = useTheme()
  const [activeReelTab, setActiveReelTab] = useState("all")
  const [activeDealTab, setActiveDealTab] = useState("signal")
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [playingReel, setPlayingReel] = useState<typeof reels[0] | null>(null)
  const [featuredReel, setFeaturedReel] = useState<typeof reels[0]>(reels[0])

  const filteredReels = activeReelTab === "all"
    ? reels
    : reels.filter(r => {
      if (activeReelTab === "market") return r.tag === "Market breakdown"
      if (activeReelTab === "deal") return r.tag === "Deal flow"
      if (activeReelTab === "valuation") return r.tag === "Valuation tips"
      return true
    })

  return (
    <main style={{ backgroundColor: colors.background.dark, color: colors.text.primary }} className="min-h-screen overflow-hidden">
      <div className="velvet-noise">
        <VelvetNavbar logo="AK / Toronto" menuItems={portfolioMenuItems("Home")} />

        <section className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-16 md:grid-cols-[1.05fr_.95fr] md:items-center md:px-10 md:pb-32 md:pt-24">
          <div className="relative z-10">
            <Eyebrow>Toronto · Market intelligence · Deal-making</Eyebrow>
            <h1 style={{ fontFamily: "Georgia, serif" }} className="max-w-3xl text-5xl font-normal leading-[.98] tracking-[-.05em] md:text-8xl">
              The next move<br /><em style={{ color: colors.primary }}>is already in the data.</em>
            </h1>
            <p style={{ color: colors.text.secondary }} className="mt-7 max-w-lg text-base leading-8 md:text-lg">I help owners buy, sell & grow — backed by real data, sharp judgment, and the connections to move with conviction.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:alex@thealexkouba.com?subject=Discovery call" style={{ background: colors.gradients.primary, color: colors.background.dark }} className="inline-flex items-center justify-center gap-3 px-6 py-4 text-[11px] font-bold uppercase tracking-[.18em] transition-transform hover:-translate-y-1">Book a discovery call <ArrowUpRight size={15} /></a>
              <a href="#contact" style={{ border: `1px solid ${colors.border}`, color: colors.text.primary }} className="inline-flex items-center justify-center gap-3 px-6 py-4 text-[11px] font-bold uppercase tracking-[.18em] transition-colors">Get featured <ChevronRight size={15} /></a>
            </div>
            <div className="mt-10 flex items-center gap-5" style={{ color: colors.text.muted }}>
              <span className="text-[11px] uppercase tracking-[.2em]">Follow the signal</span><span style={{ backgroundColor: colors.border }} className="h-px w-12" />
              <a href="#reels" aria-label="Instagram" className="text-[10px] font-bold tracking-[.12em]">IG</a><a href="#reels" aria-label="YouTube" className="text-[10px] font-bold tracking-[.12em]">YT</a><a href="#contact" aria-label="LinkedIn" className="text-[10px] font-bold tracking-[.12em]">IN</a>
            </div>
          </div>
          <div className="relative min-h-[480px] md:min-h-[600px]">
            <div style={{ background: `radial-gradient(circle at 50% 50%, ${colors.primary}2b, transparent 62%)` }} className="absolute inset-0" />
            <div style={{ border: `1px solid ${colors.border}`, backgroundColor: colors.background.main }} className="absolute inset-x-7 top-8 bottom-0 rotate-3 overflow-hidden md:inset-x-14" />
            <div className="absolute inset-0 overflow-hidden" style={{ border: `1px solid ${colors.border}`, backgroundColor: colors.background.light }}>
              <img src="/image.png" alt="Alex Kouba portrait" className="h-full w-full object-cover opacity-90 mix-blend-normal" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 40%, ${colors.background.dark} 100%)` }} />
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10"><p style={{ color: colors.primary }} className="text-[10px] uppercase tracking-[.25em]">Alex Kouba</p><p style={{ fontFamily: "Georgia, serif" }} className="mt-2 text-3xl italic">Read the room.</p></div>
            </div>
            <div style={{ backgroundColor: colors.background.dark, border: `1px solid ${colors.border}` }} className="absolute -bottom-5 -left-3 flex items-center gap-3 px-4 py-3 text-xs shadow-2xl md:left-0"><span style={{ backgroundColor: colors.primary }} className="h-2 w-2 rounded-full" />Live market pulse <span style={{ color: colors.text.muted }}>Toronto, ON</span></div>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20"><a href="#insights" style={{ backgroundColor: colors.background.main, border: `1px solid ${colors.border}` }} className="group flex flex-col gap-4 p-6 transition-colors md:flex-row md:items-center md:justify-between md:p-8"><div className="flex items-start gap-4"><Sparkles style={{ color: colors.primary }} size={18} className="mt-1" /><div><Eyebrow>Featured report · 2026</Eyebrow><h2 style={{ fontFamily: "Georgia, serif" }} className="text-2xl italic md:text-3xl">The Greater Toronto Market Outlook</h2></div></div><span style={{ color: colors.primary }} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em]">Read the report <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span></a></section>

      <section id="reels" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><Eyebrow>From the field</Eyebrow><h2 style={{ fontFamily: "Georgia, serif" }} className="text-4xl md:text-6xl">Market breakdowns,<br /><em style={{ color: colors.primary }}>in 60 seconds.</em></h2></div>
          <div className="max-w-xs text-sm leading-7" style={{ color: colors.text.muted }}>Short-form signal for owners, operators, and buyers moving through the GTA.</div>
        </div>

        {/* Featured Reel Player: Continuous Loop on Website */}
        <div style={{ backgroundColor: colors.background.main, border: `1px solid ${colors.border}` }} className="mb-12 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[9/14] max-h-[500px] w-full overflow-hidden rounded-xl bg-black border border-white/10 mx-auto">
              <video
                src={featuredReel.videoUrl}
                poster={featuredReel.image}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">Live Reel Loop</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p style={{ color: colors.primary }} className="text-[10px] font-bold uppercase tracking-[.18em]">@thealexkouba · ID: {featuredReel.reelId}</p>
                <h3 style={{ fontFamily: "Georgia, serif" }} className="mt-1 text-xl italic text-white leading-tight">{featuredReel.title}</h3>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <Eyebrow>Continuous Stream · Toronto Deal Signal</Eyebrow>
              <h3 style={{ fontFamily: "Georgia, serif" }} className="text-3xl leading-tight md:text-4xl">
                {featuredReel.title}
              </h3>
              <p style={{ color: colors.text.secondary }} className="mt-4 text-sm leading-relaxed">
                Watch short-form analysis on Toronto business valuations, commercial trends, and deal flow — looping continuously directly on the page.
              </p>
              
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <VelvetBadge size="sm">{featuredReel.tag}</VelvetBadge>
                <span style={{ color: colors.primary }} className="text-xs font-bold uppercase tracking-[.14em]">{featuredReel.views}</span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={featuredReel.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ background: colors.gradients.primary, color: colors.background.dark }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[.18em] transition-transform hover:-translate-y-0.5"
                >
                  Watch on Instagram <ArrowUpRight size={14} />
                </a>
                <button
                  type="button"
                  onClick={() => setPlayingReel(featuredReel)}
                  style={{ border: `1px solid ${colors.border}`, color: colors.text.primary }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[.18em]"
                >
                  Open Full Player <Play size={14} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 overflow-x-auto hide-scrollbar">
          <VelvetTabs
            initialActiveTab={activeReelTab}
            onChange={(id) => setActiveReelTab(id)}
            tabs={[
              { id: "all", label: "All signal" },
              { id: "market", label: "Market breakdown" },
              { id: "deal", label: "Deal flow" },
              { id: "valuation", label: "Valuation tips" },
            ]}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredReels.map((reel) => (
            <button
              type="button"
              onClick={() => {
                setFeaturedReel(reel)
                setPlayingReel(reel)
              }}
              key={reel.id}
              className="group relative aspect-[.78] w-full overflow-hidden text-left cursor-pointer outline-none focus:ring-1 focus:ring-[#c4955a]"
              style={{ backgroundColor: colors.background.light, border: `1px solid ${colors.border}` }}
            >
              <video
                src={reel.videoUrl}
                poster={reel.image}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover opacity-75 grayscale-[.15] transition duration-700 group-hover:scale-105 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute left-4 top-4 flex w-[calc(100%-2rem)] items-center justify-between">
                <VelvetBadge size="sm">{reel.tag}</VelvetBadge>
                <div className="flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white">Loop</span>
                </div>
              </div>
              <div className="absolute bottom-0 p-5">
                <p style={{ color: colors.text.muted }} className="text-[10px] uppercase tracking-[.18em]">@thealexkouba · {reel.reelId}</p>
                <h3 style={{ fontFamily: "Georgia, serif" }} className="mt-1 text-xl leading-tight text-white">{reel.title}</h3>
                <p style={{ color: colors.primary }} className="mt-3 text-[10px] font-bold uppercase tracking-[.16em]">{reel.views} · Play reel ▶</p>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-10 text-center"><a href="https://www.instagram.com/thealexkouba/reels/" target="_blank" rel="noreferrer" style={{ color: colors.primary }} className="text-xs font-bold uppercase tracking-[.18em]">View all reels on @thealexkouba →</a></div>

        {/* Reel Playback Modal */}
        {playingReel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md" onClick={() => setPlayingReel(null)}>
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border p-6 shadow-2xl" style={{ backgroundColor: colors.background.dark, borderColor: colors.border }} onClick={(e) => e.stopPropagation()}>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span style={{ color: colors.primary }} className="text-[10px] font-bold uppercase tracking-[.2em]">@thealexkouba · Reel ID: {playingReel.reelId}</span>
                  <h3 style={{ fontFamily: "Georgia, serif" }} className="mt-1 text-xl leading-snug">{playingReel.title}</h3>
                </div>
                <button onClick={() => setPlayingReel(null)} style={{ color: colors.text.muted }} className="p-2 text-lg font-bold hover:text-white">✕</button>
              </div>

              {/* Looping Player Container */}
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-black border border-white/10 group">
                <video
                  src={playingReel.videoUrl}
                  poster={playingReel.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* Playing overlay indicators */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full backdrop-blur">
                  <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">Looping Reel</span>
                </div>

                <div className="absolute bottom-6 left-5 right-5 space-y-3 pointer-events-none">
                  <div className="flex items-center justify-between">
                    <VelvetBadge size="sm">{playingReel.tag}</VelvetBadge>
                    <span style={{ color: colors.primary }} className="text-xs font-bold">{playingReel.views}</span>
                  </div>
                  <p style={{ fontFamily: "Georgia, serif" }} className="text-lg italic text-white leading-tight">{playingReel.title}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={playingReel.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ background: colors.gradients.primary, color: colors.background.dark }}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 text-[11px] font-bold uppercase tracking-[.18em] rounded-lg transition-transform hover:-translate-y-0.5"
                >
                  Open on Instagram <ArrowUpRight size={14} />
                </a>
                <button
                  type="button"
                  onClick={() => setPlayingReel(null)}
                  style={{ border: `1px solid ${colors.border}`, color: colors.text.muted }}
                  className="w-full py-2.5 text-[10px] font-bold uppercase tracking-[.16em] rounded-lg hover:text-white"
                >
                  Close player
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <section id="work" style={{ backgroundColor: colors.background.main }} className="px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div><Eyebrow>How I can help</Eyebrow><h2 style={{ fontFamily: "Georgia, serif" }} className="text-4xl md:text-6xl">Move with<br /><em style={{ color: colors.primary }}>conviction.</em></h2><p style={{ color: colors.text.secondary }} className="mt-6 max-w-sm text-sm leading-7">One sharp decision can change the trajectory of a business. My role is to make that decision clearer, faster, and better connected.</p></div><div className="grid gap-4 md:grid-cols-3">{[["01", "Consulting", "Strategic advisory grounded in live market data — growth, entry, and positioning."], ["02", "Buy & sell", "Deal brokerage connecting the right buyers and sellers through a clean close."], ["03", "Custom reports", "Bespoke sizing, competitor maps, and diligence for the decision ahead."]].map(([num, title, text]) => <VelvetCard key={title} title={`${num} / ${title}`} description={text} footer={<a href="#contact" style={{ color: colors.primary }} className="text-[10px] font-bold uppercase tracking-[.16em]">Explore service <ArrowUpRight size={14} className="ml-2 inline" /></a>}><p style={{ color: colors.text.muted }} className="text-xs leading-6">Clear thinking, useful introductions, and a point of view you can take into the room.</p></VelvetCard>)}</div></div><div style={{ background: colors.gradients.primary }} className="mt-16 flex flex-col items-start justify-between gap-7 p-7 md:flex-row md:items-center md:p-10"><div><p className="text-[10px] font-bold uppercase tracking-[.18em]" style={{ color: colors.background.dark }}>A different kind of placement</p><h3 style={{ color: colors.background.dark, fontFamily: "Georgia, serif" }} className="mt-2 text-3xl italic">Get a dedicated reel about your business.</h3></div><a href="#contact" style={{ backgroundColor: colors.background.dark, color: colors.text.primary }} className="px-5 py-4 text-[10px] font-bold uppercase tracking-[.18em]">Get my reel <ArrowUpRight size={14} className="ml-2 inline" /></a></div></div></section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[1fr_1.25fr] md:px-10 md:py-28">
        <div>
          <Eyebrow>The deal room Toronto</Eyebrow>
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-4xl md:text-5xl">The private network<br /><em style={{ color: colors.primary }}>behind the deals.</em></h2>
          <p style={{ color: colors.text.secondary }} className="mt-6 max-w-md text-sm leading-7">Live deal flow, market intel, and warm introductions for GTA owners, buyers, and investors who prefer being in the room.</p>
          <a href="#contact" style={{ color: colors.primary }} className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em]">Join the room <ArrowUpRight size={15} /></a>
        </div>
        <div style={{ border: `1px solid ${colors.border}`, backgroundColor: colors.background.main }} className="p-7 md:p-10">
          <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr]">
            <VelvetVerticalTabs
              initialActiveTab={activeDealTab}
              onChange={(id) => setActiveDealTab(id)}
              tabs={[
                { id: "signal", label: "Live signal" },
                { id: "people", label: "Warm intros" },
                { id: "access", label: "Member access" },
              ]}
            />
            <div>
              {activeDealTab === "signal" && (
                <div>
                  <p style={{ color: colors.primary }} className="text-4xl">4,000+</p>
                  <p style={{ color: colors.text.secondary }} className="mt-2 text-sm">owners and operators already reading the Toronto Market Brief.</p>
                  <Rule />
                  <div className="mt-7 flex items-center justify-between"><span style={{ color: colors.text.muted }} className="text-xs">Monthly market brief</span><VelvetToggle initialState={true} label="" /></div>
                  <div className="mt-5"><VelvetSlider label="Market confidence (Read-only)" defaultValue={78} disabled={true} /></div>
                </div>
              )}
              {activeDealTab === "people" && (
                <div>
                  <p style={{ color: colors.primary }} className="text-4xl">250+</p>
                  <p style={{ color: colors.text.secondary }} className="mt-2 text-sm">verified buyers & active off-market seller founders in GTA.</p>
                  <Rule />
                  <div className="mt-7 flex items-center justify-between"><span style={{ color: colors.text.muted }} className="text-xs">Direct founder intro network</span><VelvetToggle initialState={true} label="" /></div>
                  <div className="mt-5"><VelvetSlider label="Match accuracy rating (Read-only)" defaultValue={94} disabled={true} /></div>
                </div>
              )}
              {activeDealTab === "access" && (
                <div>
                  <p style={{ color: colors.primary }} className="text-4xl">100%</p>
                  <p style={{ color: colors.text.secondary }} className="mt-2 text-sm">confidential access to private deal teardowns & roundtables.</p>
                  <Rule />
                  <div className="mt-7 flex items-center justify-between"><span style={{ color: colors.text.muted }} className="text-xs">Private Deal Room access</span><VelvetToggle initialState={true} label="" /></div>
                  <div className="mt-5"><VelvetSlider label="Member engagement index (Read-only)" defaultValue={88} disabled={true} /></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="insights" style={{ backgroundColor: colors.background.main }} className="px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex items-end justify-between"><div><Eyebrow>Signals & perspective</Eyebrow><h2 style={{ fontFamily: "Georgia, serif" }} className="text-4xl md:text-5xl">Writing on the<br /><em style={{ color: colors.primary }}>Toronto economy.</em></h2></div><a href="#contact" style={{ color: colors.primary }} className="hidden text-xs font-bold uppercase tracking-[.16em] md:block">See all insights →</a></div><div className="grid gap-5 md:grid-cols-3">{articles.map(([tag, title, text, meta]) => <a href="#contact" key={title} className="group p-6 transition-colors" style={{ borderTop: `1px solid ${colors.border}`, backgroundColor: colors.background.dark }}><VelvetBadge size="sm">{tag}</VelvetBadge><h3 style={{ fontFamily: "Georgia, serif" }} className="mt-7 text-2xl leading-tight group-hover:italic">{title}</h3><p style={{ color: colors.text.secondary }} className="mt-4 text-sm leading-7">{text}</p><p style={{ color: colors.text.muted }} className="mt-7 text-[10px] font-bold uppercase tracking-[.14em]">{meta}</p></a>)}</div></div></section>

      <section id="contact" className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[1fr_.8fr] md:px-10 md:py-28">
        <div>
          <Eyebrow>Make the next move</Eyebrow>
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-5xl md:text-7xl">Ask Alex.</h2>
          <p style={{ color: colors.text.secondary }} className="mt-6 max-w-md text-base leading-8">Tell me what you’re looking at. I’ll tell you what I see — and where I think the leverage is.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="mailto:alex@thealexkouba.com" style={{ background: colors.gradients.primary, color: colors.background.dark }} className="px-6 py-4 text-[11px] font-bold uppercase tracking-[.18em]">Start a conversation</a>
            <a href="https://www.instagram.com/thealexkouba" target="_blank" rel="noreferrer" style={{ border: `1px solid ${colors.border}`, color: colors.text.primary }} className="px-6 py-4 text-[11px] font-bold uppercase tracking-[.18em]">Instagram ↗</a>
          </div>
        </div>
        <div style={{ backgroundColor: colors.background.main, border: `1px solid ${colors.border}` }} className="p-7 md:p-10">
          <Eyebrow>Private inquiry</Eyebrow>
          <h3 style={{ fontFamily: "Georgia, serif" }} className="text-3xl italic">What are you working on?</h3>
          {contactSubmitted ? (
            <div style={{ backgroundColor: `${colors.primary}15`, border: `1px solid ${colors.primary}` }} className="mt-7 p-6 text-center">
              <CheckCircle2 style={{ color: colors.primary }} className="mx-auto mb-3 h-8 w-8" />
              <h4 style={{ fontFamily: "Georgia, serif" }} className="text-2xl italic">Inquiry Received</h4>
              <p style={{ color: colors.text.primary }} className="mt-3 text-sm leading-relaxed">
                Your message has been sent successfully. Alex will get back to you in standard business hours.
              </p>
              <button
                onClick={() => setContactSubmitted(false)}
                style={{ color: colors.primary }}
                className="mt-6 text-[10px] font-bold uppercase tracking-[.18em]"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setContactSubmitted(true)
              }}
              className="mt-7 space-y-3"
            >
              <VelvetInput label="Your name" placeholder="Alex Smith" />
              <VelvetInput label="Email address" placeholder="you@company.com" />
              <VelvetInput label="A little context" placeholder="Buying, selling, or growing..." />
              <button
                type="submit"
                style={{ backgroundColor: colors.primary, color: colors.background.dark }}
                className="mt-8 w-full py-4 text-[10px] font-bold uppercase tracking-[.18em]"
              >
                Send inquiry <ArrowUpRight size={14} className="ml-2 inline" />
              </button>
            </form>
          )}
        </div>
      </section>

      <footer style={{ borderTop: `1px solid ${colors.border}`, backgroundColor: colors.background.dark }} className="px-6 py-10 md:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row md:items-end"><div><p style={{ fontFamily: "Georgia, serif" }} className="text-xl">Alex Kouba</p><p style={{ color: colors.text.muted }} className="mt-2 text-xs">Market intelligence · Toronto, ON</p></div><div style={{ color: colors.text.muted }} className="flex flex-wrap gap-5 text-[10px] font-bold uppercase tracking-[.14em]"><a href="#work">Consulting</a><a href="#insights">Playbook</a><a href="#reels">Reels</a><a href="#contact">Contact</a><span>© 2026 AK</span></div></div></footer>
    </main>
  )
}

