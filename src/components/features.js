import React, { Component } from "react"
import Texture from "../images/gplaypattern.png"
import Icon1 from "../images/icons/coach1A_transparent.png"
import Icon2 from "../images/icons/machine1A_transparent.png"
import Icon3 from "../images/icons/trendmill1A_transparent.png"
import Icon4 from "../images/icons/weight1A_transparent.png"

export class features extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${Texture})`,
          marginTop: "5rem",
          marginBottom: "5rem",
        }}
      >
        <h2 className="text-center text-5xl font-bold">Explore PMI</h2>
        <div className="container mx-auto flex justify-around my-12">
          <div className="text-center items-center my-6">
            <img
              src={Icon1}
              alt=""
              className="mx-auto"
              style={{ maxWidth: "250px" }}
            />
            <h3 className="py-2">Personal Training</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              nostrum veniam consequuntur molestias quia molestiae.
            </p>
            <div className="py-2"></div>
          </div>
          <div className="text-center items-center my-6">
            <img
              src={Icon2}
              alt=""
              className="mx-auto"
              style={{ maxWidth: "250px" }}
            />
            <h3 className="py-2">Weight Machines</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              nostrum veniam consequuntur molestias quia molestiae.
            </p>
            <div className="py-2"></div>
          </div>
          <div className="text-center items-center my-6">
            <img
              src={Icon3}
              alt=""
              className="mx-auto"
              style={{ maxWidth: "250px" }}
            />
            <h3 className="py-2">Cardio</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              nostrum veniam consequuntur molestias quia molestiae.
            </p>
            <div className="py-2"></div>
          </div>
          <div className="text-center items-center my-6">
            <img
              src={Icon4}
              alt=""
              className="mx-auto"
              style={{ maxWidth: "250px" }}
            />
            <h3 className="py-2">Free Weights</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              nostrum veniam consequuntur molestias quia molestiae.
            </p>
            <div className="py-2"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default features
