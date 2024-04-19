/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { useGetCategoryContent } from "../../modules/nodes/hooks/useGetCategoryContent";
import { CodeEditorContext } from "../../modules/codeEditor/context/CodeEditorContext";
const DropDownInt = ({ nameNode, categoryNode }) => {
  const { codeEditorText, updateCodeEditorText } = useContext(
    CodeEditorContext
  );
  const [isOpen, setIsOpen] = useState(false);
  const { categoryContent, loading } = useGetCategoryContent(
    nameNode,
    categoryNode
  );
  const handleClick = (importString, iconName) => {
    updateCodeEditorText(
      `${importString} \n${codeEditorText}\n>> ${iconName}("node text")`
    );
  };

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`bg-${
          isOpen ? "secondary" : "gray-200"
        } flex justify-between w-full rounded-md px-4 py-2 bg-gray-200 text-sm font-medium text-gray-700  focus:outline-none`}
      >
        {categoryNode}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && !loading && (
        <div className="flex flex-col  p-4">
          {categoryContent.map((node) => (
            <div
              className="flex flex-row justify-start w-max gap-1.5"
              key={node.iconName}
            >
              <button
                onClick={() => handleClick(node.importString, node.iconName)}
              >
                <img src={node.imgUrl} className="w-5 h-5" alt="Node Image" />
              </button>
              <p>{node.iconName}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownInt;
