export default interface IUseTheme {
  theme?: boolean
  setTheme: React.Dispatch<React.SetStateAction<boolean>>
  getThemeName?: () => string
}
