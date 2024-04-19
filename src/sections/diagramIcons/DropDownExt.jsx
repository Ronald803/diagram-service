/* eslint-disable react/prop-types */
import { useState } from "react";
import { useGetNodeContent } from "../../modules/nodes/hooks/useGetNodeContent";
import DropDownInt from "./DropDownInt";

const DropDown = ({ nameNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { nodeContent, loadingContent } = useGetNodeContent(nameNode);
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`bg-${
          isOpen ? "secondary" : "gray-200"
        } flex justify-between w-full rounded-md px-4 py-2  text-sm font-medium text-gray-700  focus:outline-none`}
      >
        {nameNode}
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
      {isOpen && !loadingContent && (
        <div className="flex flex-col  p-4">
          {nodeContent.map((node) => (
            <div key={node.category}>
              <DropDownInt
                nameNode={nameNode}
                categoryNode={node.category}
              ></DropDownInt>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
