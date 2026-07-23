"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import { X, Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react"
import { type ModalType, getModalAccentColor } from "./modal-type-utils"

// Font: Playfair Display (heading), Inter (body)
// Import in app/globals.css:
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
//   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

const typeIcons = {
  default: null,
  info: <Info size={18} />,
  success: <CheckCircle size={18} />,
  warning: <AlertTriangle size={18} />,
  error: <XCircle size={18} />,
}

interface VelvetModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
  type?: ModalType
}

export function VelvetModal({ isOpen, onClose, title, children, footer, type = "default" }: VelvetModalProps) {
  const { colors } = useTheme()
  const accent = getModalAccentColor(type, colors)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(20, 0, 15, 0.65)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md overflow-hidden"
            style={{
              backgroundColor: colors.background.main,
              borderRadius: "12px",
              border: `1px solid ${colors.border}`,
              boxShadow: "0 30px 80px rgba(40,0,30,0.18)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 pb-3">
              <div className="flex items-center gap-3">
                {typeIcons[type] && (
                  <span style={{ color: accent }}>{typeIcons[type]}</span>
                )}
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    fontStyle: "italic",
                    color: type === "default" ? colors.text.primary : accent,
                  }}
                >
                  {title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1 transition-opacity hover:opacity-60"
                style={{ color: colors.text.muted }}
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            <div
              className="px-6 pb-5"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.8,
                color: colors.text.secondary,
              }}
            >
              {children}
            </div>

            {footer && (
              <div
                className="flex justify-end gap-3 px-6 py-4"
                style={{ borderTop: `1px solid ${colors.border}` }}
              >
                {footer}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default VelvetModal
