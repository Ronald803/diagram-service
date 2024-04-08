import DownloadButton from "./DownloadButton";
import ExportDiagramComponent from "./ExportDiagramComponent";

export default function OptionsBar(props) {
  return (
    <menu className="flex justify-center border-b-2 border-primary">
      <li className="content-center">
        <ExportDiagramComponent
          pythonCodeText={props.pythonCodeText}
          imageRef={props.imageRef}
        />
      </li>
      <li className="">
        <DownloadButton
          enableButton={props.validCode}
          linkToImage={props.imageURL}
          codeToname={props.textCode}
          secondary={props.secondary}
        />
      </li>
      <li>
        <button 
          className='bg-gray-200 py-1 px-3 rounded-lg text-black hover:bg-primary hover:text-white'
          onClick={()=>props.toggleMyDiagramButton()}
        >
          My diagrams
        </button>
      </li>
    </menu>
  );
}
