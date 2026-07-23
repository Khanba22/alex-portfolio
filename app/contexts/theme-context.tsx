"use client"

import { createContext, useContext } from "react"

export const theme = {
  primary: "#d7a866",
  secondary: "#b77952",
  accent: "#e6c18a",
  background: {
    main: "#160d12",
    light: "#24131c",
    dark: "#0c070a",
  },
  text: {
    primary: "#f7eee3",
    secondary: "#c9b5ad",
    muted: "#8e777e",
  },
  border: "#4a2b38",
  shadow: "0 24px 70px rgba(0, 0, 0, 0.34)",
  dropShadow: "drop-shadow(0 12px 28px rgba(0,0,0,0.28))",
  backdropFilter: "blur(14px)",
  semantic: {
    info: { border: "#7ea6c7", text: "#b8d4e8" },
    success: { border: "#76ae8e", text: "#b4d8bf" },
    warning: { border: "#d7a866", text: "#efd09d" },
    error: { border: "#bd707a", text: "#e1a2a8" },
  },
  gradients: {
    primary: "linear-gradient(135deg, #d7a866, #b77952)",
    subtle: "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0))",
  },
} as const

type Theme = typeof theme
const ThemeContext = createContext<{ colors: Theme }>({ colors: theme })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeContext.Provider value={{ colors: theme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}

