import Page from "@/components/Page"

const ProductPage = (props) => {
  const {
    router: {
      query: { categoryId, productId },
    },
  } = props

  return (
    <Page>
      <h1>
        Category #{categoryId} - product #{productId}
      </h1>
    </Page>
  )
}

export default ProductPage
