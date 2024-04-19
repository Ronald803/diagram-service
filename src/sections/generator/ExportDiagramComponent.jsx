import { getDiagramByFormatType } from "../../modules/generator/api/diagram-functionality";

export default function ExportDiagramComponent(props) {
  function exportDiagram(imgFormat) {
    getDiagramByFormatType(props.pythonCodeText, imgFormat).then((data) => {
      if (!data.errorMessage) {
        let blob = null;
        switch (imgFormat) {
          case "png": {
            blob = new Blob([data.image], { type: "image/png" });
            break;
          }
          case "jpg": {
            blob = new Blob([data.image], { type: "image/jpg" });
            break;
          }
        }
        props.imageRef.current.setAttribute("src", URL.createObjectURL(blob));
      } else {
        console.log("There was an error...");
      }
    });
  }

  return (
    <div className="flex gap-2 flex-row flex-nowrap">
      <button
        className="py-1 px-3 border rounded-xl bg-[#e5e7eb] hover:text-white hover:bg-primary dark:text-white"
        onClick={() => exportDiagram("png")}
      >
        Export to PNG
      </button>
      <button
        className="py-1 px-3 border rounded-xl bg-[#e5e7eb] hover:text-white hover:bg-primary dark:text-white"
        onClick={() => exportDiagram("jpg")}
      >
        Export to JPG
      </button>
    </div>
  );
}
