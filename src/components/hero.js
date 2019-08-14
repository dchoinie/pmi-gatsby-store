import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Background from "../images/gym2.jpeg"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gym2.jpeg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixelss
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `)
  return (
    <div
      className="flex justify-center text-center text-white"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "calc(100vh - 70px)",
      }}
    >
      <div
        className="self-center rounded p-12"
        style={{
          background: "rgba(61, 46, 60, 0.7)",
          boxShadow: "2px 2px 15px #333",
        }}
      >
        <h2 className="font-bold" style={{ fontSize: "6rem" }}>
          {data.site.siteMetadata.title}
        </h2>
        <p className="text-2xl">{data.site.siteMetadata.description}</p>
      </div>
    </div>
  )
}
