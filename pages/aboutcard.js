import React, { Component, Fragment } from "react";

import AboutCounter from "./aboutcounter";

class AboutCard extends Component {
  render() {
    return (
        <div className="p-10 justify-items-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="/pkm.png" alt="Mountain" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mountain</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
                <AboutCounter />
          </div>
        </div>
    )
  }
}

export default AboutCard;