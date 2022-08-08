const Page = (props) => {
  const { children, ...otherProps } = props

  return (
    <main {...otherProps} className="h-screen flex flex-col">
      <header className="p-4 border-b border-b-slate-200">LOGO</header>
      <section className="grow overflow-y-auto">{children}</section>
    </main>
  )
}

export default Page
