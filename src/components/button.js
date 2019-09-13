import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

export class button extends Component {
  static propTypes = {
    text: PropTypes.string,
    to: PropTypes.string,
  }
  static defaultProps = {
    to: "/",
    text: "button",
  }
  render() {
    return (
      <Link
        to={this.props.to}
        className="rounded px-4 py-1 leading-loose whitespace-no-wrap capitalize text-xl button"
      >
        {this.props.text}
      </Link>
    )
  }
}

export default button
