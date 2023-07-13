interface ITitle {
  children: string | JSX.Element | JSX.Element[]
}

export default function Title({ children }: ITitle): JSX.Element {
  return (
    <h1
      className={`
      mb-3
      font-bold
      text-3xl
      dark:transition-opacity
      dark:hover:opacity-80
    `}
    >
      {children}
    </h1>
  )
}
