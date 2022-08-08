import Page from "@/components/Page"
import { useState, useEffect } from "react"
import axios from "axios"

const IndexPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get("https://nepsic-3001.preview.csb.app/posts")
      .then(({ data }) => setPosts(data))
  }, [])

  return (
    <Page>
      <h1>Welcome to my blog</h1>
      <div>
        {posts.map((post) => (
          <article key={post.id} className="p-4 bg-slate-100 m-4">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p>{post.content}</p>
          </article>
        ))}
      </div>
    </Page>
  )
}

export default IndexPage
