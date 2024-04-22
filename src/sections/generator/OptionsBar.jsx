import NodesButton from "../diagramIcons/NodesButton";
import DownloadButton from "./DownloadButton";
import ExportDiagramComponent from "./ExportDiagramComponent";

export default function OptionsBar(props) {
  return (
    <menu className="flex justify-center p-2 gap-2 border-b-2 border-primary">
      {/* <li className="content-center">
        <ExportDiagramComponent
          pythonCodeText={props.pythonCodeText}
          imageRef={props.imageRef}
        />
      </li> */}

      <NodesButton></NodesButton>
      <li className="">
        <DownloadButton
          enableButton={props.validCode}
          linkToImage={props.imageURL}
          codeToname={props.textCode}
          secondary={props.secondary}
          imageRef={props.imageRef}
        />
      </li>
      <li>
        <button
          className="bg-gray-200 py-1 px-3 rounded-xl text-black hover:bg-primary hover:text-white"
          onClick={props.toggleMyDiagramButton}
        >
          My diagrams
        </button>
      </li>
      <li>
        <select className="bg-gray-200 py-1 px-3 rounded-xl text-black hover:bg-primary hover:text-white" value={props.storage} onChange={props.selectStorage}>
          <option value="mongo">MongoDB</option>
          <option value="google">Google Drive</option>
        </select>
      </li>
    </menu>
  );
}
