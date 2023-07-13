interface IStylesheet {
  path: string
  isType?: boolean
}

export default function Stylesheet({
  path,
  isType
}: IStylesheet): JSX.Element {
  if (isType) {
    return <link rel='stylesheet' href={`/${path}`} type='text/css' />
  }

  return <link rel='stylesheet' href={`/${path}`} />
}
