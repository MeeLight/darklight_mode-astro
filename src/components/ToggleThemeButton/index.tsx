import { useEffect } from 'react'

// States
import useTheme from '@states/UseTheme'

// Utilities
import { onToggleTheme } from '@utilities/components/ToggleThemeButton'

export default function ToggleThemeButton(): JSX.Element {
  const { theme, setTheme, getThemeName } = useTheme()

  useEffect(() => {
    // LocalStorage
    if (theme) localStorage.theme = 'dark'
    else localStorage.theme = 'light'
  }, [theme])

  return (
    <button
      className='
      flex
      gap-1
      px-3
      py-2
      rounded-lg
      bg-blue-600
      text-gray-200
      hover:opacity-90
    '
      onClick={onToggleTheme({ setTheme })}
    >
      <span>{getThemeName!()}</span>
    </button>
  )
}
