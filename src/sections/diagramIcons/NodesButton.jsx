import { useContext } from "react";
import { NodesContext } from "../../modules/nodes/context/NodesContext";

const NodesButton = () => {
  const { showNodes, setShowNodes } = useContext(NodesContext);
  const handleClick = () => {
    setShowNodes(!showNodes);
  };
  return (
    <li>
      <button
        className="flex flex-row  bg-gray-200 py-1 px-3 rounded-xl text-black hover:bg-primary hover:text-white "
        onClick={handleClick}
      >
        <div>
          <img
            src="./src/assets/hamburger-svgrepo-com.svg"
            alt="hamburguer icon"
            width="24"
            height="24"
          />
        </div>
        <div>Nodes</div>
      </button>
    </li>
  );
};

export default NodesButton;
