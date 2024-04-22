import { useState, useEffect } from "react";

const url = "http://localhost:3000/api/diagram/icons/nodes";

export function useGetNodes() {
  const [nodes, setNodes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNodes = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setNodes(data);
          setLoading(false);
        } else {
          console.error("Failed to fetch nodes");
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNodes();

    return () => {
      setNodes(null);
      setLoading(true);
      setError(null);
    };
  }, []);

  return { nodes, loading, error };
}

// singleton
