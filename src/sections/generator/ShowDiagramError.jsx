import React from "react";
import "../../styles/GraphRenderError.css";
function ShowDiagramError(props) {
    return(
        <div className="error-text">
          {props.errorText}
        </div>
    )
}
export default ShowDiagramError;
