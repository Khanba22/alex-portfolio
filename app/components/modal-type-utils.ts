import type { theme } from "@/contexts/theme-context"

export type ModalType = "default" | "info" | "success" | "warning" | "error"

export function getModalAccentColor(type: ModalType, colors: typeof theme) {
  if (type === "default") return colors.primary
  return colors.semantic[type].border
}

