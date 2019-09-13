import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Features from "../components/features"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Features />
    </Layout>
  )
}

export default IndexPage
