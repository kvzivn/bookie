/** @jsx jsx */
import { jsx } from "theme-ui"
import { Layout, SEO } from "../components/"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 sx={{ mt: 5, mb: 0 }}>Not Found</h1>
  </Layout>
)

export default NotFoundPage
