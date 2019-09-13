import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

const dayPasses = () => {
  return (
    <Layout>
      <SEO title="Day Passes" />
      <PageTitle title="Day Passes" />
      <div className="text-center my-12">
        <h3>Not ready to buy a membership? No problem!</h3>
        <p>
          Fill out the form below to purchse a single day pass or 10-day pass to
          try out PMI Total Fitness
        </p>
      </div>
      <div className="flex justify-around my-12 px-12">
        <div className="flex-col justify-center my-12 text-center">
          <h3 className="text-4xl">Single</h3>
          <form action="" style={{ border: "2px solid red", padding: "20px" }}>
            <input type="text" name="first" id="first" />
          </form>
        </div>
        <div className="my-12">
          <h3 className="text-4xl">10-Day</h3>
        </div>
      </div>
    </Layout>
  )
}

export default dayPasses
