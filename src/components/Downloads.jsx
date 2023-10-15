import React from "react";
import { SectionWrapper } from "../higher-order-component";
import { folder } from "../assets/index.js";
import { styles } from "../styles";

const Downloads = () => {
  const handleDownload = () => {
    // const url = "/path-to-your-file/filename.ext";
    // const link = document.createElement("a");
    // link.href = url;
    // link.download = "downloaded-filename.ext";
    // link.click();
    console.log("hihi");
  };

  return (
    <>
      <h4 className={styles.sectionSmallText}>Downloads.</h4>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <div className="download-button" onClick={handleDownload}>
          <img src={folder} alt="Download" className="download-image" />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Downloads, "downloads");
