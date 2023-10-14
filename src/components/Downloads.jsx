import React from "react";
import { SectionWrapper } from "../higher-order-component";

const Downloads = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <h1>Downloads</h1>
    </div>
  );
};

export default SectionWrapper(Downloads, "downloads");
