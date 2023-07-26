/* eslint-disable no-unused-vars */
import React from "react";
import { SectionWrapper } from "../higher-order-component";
import { technologies } from "../constants";
import SquareCanvas from "./canvas/Square";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <SquareCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
