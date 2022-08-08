import Link from "next/link"

const Page = (props) => {
  const { children, ...otherProps } = props

  return (
    <main {...otherProps} className="h-screen flex flex-col">
      <header className="p-4 border-b border-b-slate-200 flex justify-between">
        LOGO
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/create">
                <a>Add new post</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="grow overflow-y-auto">{children}</section>
    </main>
  )
}

export default Page
