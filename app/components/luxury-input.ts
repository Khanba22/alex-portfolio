import type React from "react"

export interface ThemedInputProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

