import Link from "@/components/Link"

const Page = (props) => {
  const { children, ...otherProps } = props

  return (
    <main {...otherProps} className="h-screen flex flex-col">
      <header className="p-4 border-b border-b-slate-200">LOGO</header>
      <section className="grow overflow-y-auto">{children}</section>
      <footer className="p-4 bg-slate-200">
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/categories/123">Category 123</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </main>
  )
}

export default Page
