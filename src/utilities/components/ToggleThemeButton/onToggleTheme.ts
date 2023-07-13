// Interface
import type IUseTheme from '@interfaces/IUseTheme'

export function onToggleTheme({ setTheme }: IUseTheme): () => void {
  return (): void => {
    setTheme(document.documentElement.classList.toggle('dark'))
  }
}
