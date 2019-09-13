import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Logo_White from "../images/logo_white.png"

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
      className="flex justify-between px-12 py-4"
      style={{ backgroundColor: "#3d2e3c", color: "#fff" }}
    >
      <img src={Logo_White} alt="" style={{ maxWidth: "200px" }} />
      <div>
        <ul className="flex self-center justify-end">
          <li className="mx-2 cursor-pointer">
            <Link to="/" style={{ color: "#fff" }}>
              Why Join?
            </Link>
          </li>
          <li className="mx-2 cursor-pointer">
            <Link to="/" style={{ color: "#fff" }}>
              Membership
            </Link>
          </li>
          <li className="mx-2 cursor-pointer">
            <Link to="/" style={{ color: "#fff" }}>
              Classes
            </Link>
          </li>
          <li className="mx-2 cursor-pointer">
            <Link to="/" style={{ color: "#fff" }}>
              Services
            </Link>
          </li>
          <li className="mx-2 cursor-pointer">
            <Link to="/" style={{ color: "#fff" }}>
              About
            </Link>
          </li>
          <li className="mx-2 cursor-pointer">
            <Link to="/" style={{ color: "#fff" }}>
              Contact
            </Link>
          </li>
        </ul>
        <ul className="flex self-center justify-end text-sm text-gray-600">
          <li className="mx-2 cursor-pointer">
            <Link to="/terms_conditions" style={{ color: "#999" }}>
              Terms &amp; Conditions
            </Link>
          </li>
          <li className="mx-2 cursor-pointer">
            <Link to="/privacy" style={{ color: "#999" }}>
              Privacy Policy
            </Link>
          </li>
        </ul>
        <small className="flex justify-end mx-2">
          &copy; {new Date().getFullYear()} {data.site.siteMetadata.title}
        </small>
      </div>
    </div>
  )
}
