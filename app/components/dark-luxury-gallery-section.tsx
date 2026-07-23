"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"

const images = [
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop", alt: "Mountain sunrise", title: "Alpine Dawn", location: "Swiss Alps" },
  { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=400&fit=crop", alt: "Starry mountains", title: "Celestial Range", location: "Patagonia" },
  { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop", alt: "Foggy valley", title: "Mist Valley", location: "Dolomites" },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop", alt: "Autumn lake", title: "Mirror Lake", location: "Banff" },
]

export default function DarkLuxuryGallerySection() {
  const { colors } = useTheme()

  return (
    <section className="py-28 px-6" style={{ backgroundColor: "#0c0c0e" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-4"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Exclusive Collection
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Curated Landscapes
          </h2>
          <p className="mt-3 text-sm text-neutral-500 max-w-md mx-auto">
            A refined selection for the discerning eye.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {images.map((img, i) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-72 w-full object-cover brightness-75 transition-all duration-700 group-hover:brightness-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-lg font-bold text-white">{img.title}</p>
                <p className="mt-0.5 text-xs text-neutral-400">{img.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
