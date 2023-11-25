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
      <div>
        <h2 className="personalFactsHeader">some personal facts</h2>
        <ul className="styledList">
          <li>i'm a pet lover - my spider is called Ruby. </li>
          <li>i'm in a committed relationship with my self-built PC.</li>
          <li>
            besides coding, I enjoy creating the funkiest Spotify playlists and
            drinking bloody marys with my friends.
          </li>
        </ul>
      </div>
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
