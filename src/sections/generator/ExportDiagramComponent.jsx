import { getDiagramByFormatType } from "../../modules/generator/api/diagram-functionality";

export default function ExportDiagramComponent(props) {
  function exportDiagram(imgFormat) {
    getDiagramByFormatType(props.pythonCodeText, imgFormat).then((data) => {
      if (!data.errorMessage) {
        let blob = null;
        if (imgFormat == "svg") {
          blob = new Blob([data.image], { type: "image/svg+xml" });
        } else {
          blob = new Blob([data.image], { type: "image/png" });
        }
        props.imageRef.current.setAttribute("src", URL.createObjectURL(blob));
        console.log(blob);
      } else {
        console.log("There was an error...");
      }
    });
  }

  return (
    <select className="px-4 border rounded-md">
      <option value="svg" onClick={() => exportDiagram("svg")}>
        Export To SVG
      </option>
      <option value="png" onClick={() => exportDiagram("png")}>
        Export To PNG
      </option>
    </select>
  );
}
