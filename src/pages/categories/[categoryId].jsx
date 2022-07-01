import Page from "@/components/Page"

const CategoryPage = (props) => {
  const {
    router: {
      query: { categoryId },
    },
  } = props

  return <Page>Category #{categoryId}</Page>
}

export default CategoryPage
