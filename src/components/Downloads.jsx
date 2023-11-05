import React from "react";
import { SectionWrapper } from "../higher-order-component";
import { folder } from "../assets/index.js";
import { styles } from "../styles";
import { files } from "../constants/index.js";

const Downloads = () => {
  const handleDownload = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };

  return (
    <>
      <h4 className={styles.sectionSmallText}>Downloads.</h4>

      <br />
      <div className="xl:mt-12 xl:flex-row  flex gap-10 overflow-hidden">
        {files.map((file) => (
          <div key={file.name}>
            <div
              className="download-button"
              onClick={() => handleDownload(file.url, file.name)}
            >
              <img src={folder} alt="Download" className="download-image" />
            </div>
            <div className="w-28 h-28">{file.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Downloads, "downloads");
