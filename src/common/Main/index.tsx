interface IMain {
  className?: string
  children: string | JSX.Element | JSX.Element[]
}

export default function Main({ className, children }: IMain): JSX.Element {
  if (className) {
    return <main className={className}>{children}</main>
  }

  return <main>{children}</main>
}
