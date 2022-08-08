import { useCallback } from "react"
import { Formik, Form, Field } from "formik"
import axios from "axios"
import Page from "@/components/Page"

const initialValues = { title: "", content: "" }

const PostsEditPage = () => {
  const handleSubmit = useCallback(
    async ({ title, content }, { resetForm }) => {
      await axios.post("https://nepsic-3001.preview.csb.app/posts", {
        title,
        content,
      })

      resetForm()
    },
    []
  )

  return (
    <Page>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className="flex flex-col gap-4">
          <label>
            Title
            <Field name="title" className="p-4 border-2" />
          </label>
          <label>
            Content
            <Field name="content" className="p-4 border-2" />
          </label>
          <button className="bg-blue-600 p-4">SUBMIT</button>
        </Form>
      </Formik>
    </Page>
  )
}

export default PostsEditPage
