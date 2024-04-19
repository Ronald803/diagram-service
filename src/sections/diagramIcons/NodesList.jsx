import { useContext } from "react";
import { NodesContext } from "../../modules/nodes/context/NodesContext";
import { useGetNodes } from "../../modules/nodes/hooks/useGetNodes";
import DropDown from "./DropDownExt";

const NodesList = () => {
  const { showNodes } = useContext(NodesContext);
  const { nodes, loading } = useGetNodes();

  return (
    <div
      className={` absolute z-10 w-1/3 left-0 overflow-y-auto overflow-x-hidden  h-96 ${
        showNodes
          ? "show"
          : "overflow-y-hidden transition-transform duration-500 ease-in-out pointer-events-none transform"
      }`}
    >
      <div
        className={`flex flex-col content-between bg-gray-200 p-4 rounded-2xl  max-w-full transition-transform duration-500 ease-in-out transform ${
          showNodes ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        {!loading &&
          nodes?.map((node) => (
            <DropDown key={node.nodeName} nameNode={node.nodeName}></DropDown>
          ))}
      </div>
    </div>
  );
};

export default NodesList;
