import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <div
      className="flex justify-between px-12 text-white py-4"
      style={{ backgroundColor: "#3d2e3c" }}
    >
      <h2>{data.site.siteMetadata.title}</h2>
      <div>
        <ul className="flex self-center justify-end">
          <li className="mx-2 cursor-pointer">
            <Link to="/">Membership</Link>
          </li>
          <li className="mx-2 cursor-pointer">
            <Link to="/">Services</Link>
          </li>
          <li className="mx-2 cursor-pointer">
            <Link to="/">About</Link>
          </li>
          <li className="mx-2 cursor-pointer">
            <Link to="/">Contact</Link>
          </li>
        </ul>
        <ul className="flex self-center justify-end text-sm text-gray-600">
          <li className="mx-2 cursor-pointer">
            <Link to="/terms_conditions">Terms &amp; Conditions</Link>
          </li>
          <li className="mx-2 cursor-pointer">
            <Link to="/privacy">Privacy Policy</Link>
          </li>
        </ul>
        <small className="flex justify-end mx-2">
          &copy; {new Date().getFullYear()} {data.site.siteMetadata.title}
        </small>
      </div>
    </div>
  )
}
