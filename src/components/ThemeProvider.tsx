
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps as NextThemeProviderProps } from "next-themes"

// Define ThemeProviderProps that matches NextThemeProviderProps
type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: string
  storageKey?: string
  attribute?: NextThemeProviderProps['attribute']
  value?: object
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  forcedTheme?: string
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
