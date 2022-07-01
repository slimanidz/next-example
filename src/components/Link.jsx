import NextLink from "next/link"

const Link = (props) => {
  const { href, ...otherProps } = props

  return (
    <NextLink href={href}>
      <a {...otherProps} className="hover:underline" />
    </NextLink>
  )
}

export default Link
