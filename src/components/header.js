import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaUser,
} from "react-icons/fa"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          address
          phone
        }
      }
    }
  `)
  return (
    <>
      <div
        className="flex justify-between px-12 py-1 text-white"
        style={{ backgroundColor: "#555" }}
      >
        <div className="text-sm flex">
          <p>{data.site.siteMetadata.address}</p>
          <ul className="flex text-sm">
            <li className="mx-1">{data.site.siteMetadata.phone}</li>
            <li className="self-center mx-1">
              <FaFacebook />
            </li>
            <li className="self-center mx-1">
              <FaTwitter />
            </li>
            <li className="self-center mx-1">
              <FaInstagram />
            </li>
            <li className="self-center mx-1">
              <FaEnvelope />
            </li>
          </ul>
        </div>
        <div className="text-sm flex">
          <FaUser className="self-center mx-1" />
          <p>Account</p>
        </div>
      </div>
      <div
        className="flex justify-between text-white px-12 py-2"
        style={{ backgroundColor: "#3d2e3c" }}
      >
        <h2 className="font-bold tracking-wide">
          {data.site.siteMetadata.title}
        </h2>
        <ul className="flex self-center">
          <li className="mx-2">
            <Link to="/">Membership</Link>
          </li>
          <li className="mx-2">
            <Link to="/">Services</Link>
          </li>
          <li className="mx-2">
            <Link to="/">About</Link>
          </li>
          <li className="mx-2">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
