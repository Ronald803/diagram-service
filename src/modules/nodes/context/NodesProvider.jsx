import { useState } from "react";
import { NodesContext } from "./NodesContext";
const NodesProvider = ({ children }) => {
  const [showNodes, setShowNodes] = useState(false);
  return (
    <NodesContext.Provider value={{ showNodes, setShowNodes }}>
      {children}
    </NodesContext.Provider>
  );
};

export default NodesProvider;
