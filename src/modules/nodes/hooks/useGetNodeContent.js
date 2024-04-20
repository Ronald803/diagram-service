import { useState, useEffect } from "react";
const url = "http://localhost:8000/nodes";
// const mockNodeContent = [
//   { category: "aggregator", content: ["Fluentd", "Vector"] },
//   { category: "analytics", content: ["Beam", "Databricks", "Dbt"] },
//   { category: "auth", content: ["Boundary", "BuzzfeedSso", "Oauth2Proxy"] },
// ];

export function useGetNodeContent(nameNode) {
  const [nodeContent, setNodeContent] = useState(null);
  const [loadingContent, setLoadingContent] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNodeContent = async () => {
      try {
        const response = await fetch(`${url}/${nameNode}`);
        if (response.ok) {
          const data = await response.json();
          setNodeContent(data);
          setLoadingContent(false);
        } else {
          console.error(
            "Failed to fetch content of nameNode:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching content of nameNode:", error);
      }
    };

    fetchNodeContent();

    return () => {
      setNodeContent(null);
      setLoadingContent(true);
      setError(null);
    };
  }, [nameNode]);

  return { nodeContent, loadingContent, error };
}
