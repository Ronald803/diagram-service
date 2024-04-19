import React from "react";

const DownloadButton = (props) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    const imageName = props.codeToname
      .split('Diagram("')
      .pop()
      .split('",')
      .shift()
      .trim();
    link.href = props.linkToImage;
    link.setAttribute("download", `${imageName}.png`);
    document.body.appendChild(link);
    link.click();
  };

  const secondaryStyle = `${props.secondary} px-2 py-1 rounded-xl text-gray-100 active:scale-[.95] active:duration-75 easy-in-out transition-all`;

  return (
    <>
      {(props.enableButton && (
        <div className="flex w-full px-1 items-center ">
          <button disabled={!props.enableButton} className={secondaryStyle}>
            <a onClick={handleDownload}>Download Diagram</a>
          </button>
        </div>
      )) || (
        <div className="flex w-full px-1 items-center">
          <button
            disabled={!props.enableButton}
            className="bg-gray-200 px-2 rounded-lg border-4  text-black"
          >
            Download Diagram
          </button>
        </div>
      )}
    </>
  );
};
export default DownloadButton;
