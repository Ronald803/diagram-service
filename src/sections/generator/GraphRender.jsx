import { useState } from "react";
import NavigatorCard from "../folderNavigation/NavigatorCard";

function GraphRender(props) {
  return (
    <div className="w-full flex-col">
      <div className="bg-tertiary w-full h-96 overflow-y-auto overflow-x-auto">
        {(props.validCode && (
          <div className="self-center">
            <img src={props.urlImage} alt="Imagen" className="mx-auto min-h-96 max-h-max min-w-full max-w-prose object-cover" />
          </div>
        )) || <p>{props.errorMessage}</p>}
      </div>
    </div>
  );
}

export default GraphRender;
