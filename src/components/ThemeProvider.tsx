
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Fix the import path for ThemeProviderProps
type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: string
  storageKey?: string
  attribute?: string | string[]
  value?: object
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  forcedTheme?: string
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
