import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaUser,
} from "react-icons/fa"
import Logo from "../images/logo.png"

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
      <div className="flex justify-between px-12 py-2 bg-white">
        <div>
          <p>
            <a
              href="https://goo.gl/maps/PVm6uTDRdUghgUEn8"
              target="_blank"
              rel="noopener"
              className="text-sm"
              style={{ fontFamily: "Quicksand", color: "#3d2e3c" }}
            >
              {data.site.siteMetadata.address}
            </a>
            &nbsp;|{" "}
            <a
              href="tel:1-507-362-4227"
              target="_blank"
              rel="noopener"
              className="text-sm"
              style={{ fontFamily: "Quicksand", color: "#3d2e3c" }}
            >
              {data.site.siteMetadata.phone}
            </a>
          </p>
        </div>
        <div className="flex">
          <a href="#" className="self-center">
            <FaFacebook className="mx-4" style={{ color: "#3d2e3c" }} />
          </a>
          <a href="#" className="self-center">
            <FaTwitter
              className="mx-4 self-center"
              style={{ color: "#3d2e3c" }}
            />
          </a>
          <a href="#" className="self-center">
            <FaInstagram
              className="mx-4 self-center"
              style={{ color: "#3d2e3c" }}
            />
          </a>
          <a href="#" className="self-center">
            <FaEnvelope
              className="mx-4 self-center"
              style={{ color: "#3d2e3c" }}
            />
          </a>
        </div>
      </div>
      <div
        className="flex justify-between px-12 py-2"
        style={{ backgroundColor: "#fff", color: "#3d2e3c" }}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ maxWidth: "200px" }}
            className="py-2"
          />
        </Link>
        <ul className="flex self-center text-xl">
          <li className="mx-4 menuLink">
            <Link to="/">Why Join?</Link>
          </li>
          <li className="mx-4 menuLink">
            <Link to="/membership">Membership</Link>
          </li>
          <li className="mx-4 menuLink">
            <Link to="/">Classes</Link>
          </li>
          <li className="mx-4 menuLink">
            <Link to="/">Services</Link>
          </li>
          <li className="mx-4 menuLink">
            <Link to="/">About</Link>
          </li>
          <li className="mx-4 menuLink">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
