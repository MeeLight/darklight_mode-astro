import { useState } from 'react'

// Interface
import type IUseTheme from '@interfaces/IUseTheme'

export default function useTheme(): IUseTheme {
  const [theme, setTheme] = useState(
    document.documentElement.className === 'dark'
  )

  const getThemeName = (): string => {
    return theme ? 'dark' : 'light'
  }

  return { theme, setTheme, getThemeName }
}
