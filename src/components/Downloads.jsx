import React from "react";
import { SectionWrapper } from "../higher-order-component";

const Downloads = () => {
  const handleDownload = () => {
    const url = "/path-to-your-file/filename.ext";
    const link = document.createElement("a");
    link.href = url;
    link.download = "downloaded-filename.ext";
    link.click();
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <h1>Downloads</h1>

      <div className="download-button" onClick={handleDownload}>
        <img
          src="/path-to-your-image.png"
          alt="Download"
          className="download-image"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Downloads, "downloads");

// .download-button {
//     display: inline-block;
//     cursor: pointer;
//   }

//   .download-image {
//     width: 100px; /* Set the initial width */
//     height: auto;
//     transition: transform 0.2s, filter 0.2s;
//   }

//   .download-image:hover {
//     transform: scale(1.2); /* Grow the image on hover */
//   }
