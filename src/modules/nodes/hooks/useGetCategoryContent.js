import { useState, useEffect } from "react";
const url = "http://localhost:3000/api/diagram/icons/nodes";
// const mockCategoryContent = [
//   {
//     nodeName: "onprem",
//     category: "aggregator",
//     iconName: "Fluentd",
//     imgUrl:
//       "https://diagrams.mingrammer.com/img/resources/onprem/aggregator/fluentd.png",
//   },
//   {
//     nodeName: "onprem",
//     category: "aggregator",
//     iconName: "Vector",
//     imgUrl:
//       "https://diagrams.mingrammer.com/img/resources/onprem/aggregator/vector.png",
//   },
// ];

export function useGetCategoryContent(nameNode, nameCategory) {
  const [categoryContent, setCategoryContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryContent = async () => {
      try {
        const response = await fetch(`${url}/${nameNode}/${nameCategory}`);
        if (response.ok) {
          const data = await response.json();
          setCategoryContent(data);
          setLoading(false);
        } else {
          console.error(
            "Failed to fetch content of category:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching content of category:", error);
      }
    };

    fetchCategoryContent();

    return () => {
      setCategoryContent(null);
      setLoading(true);
      setError(null);
    };
  }, [nameNode, nameCategory]);

  return { categoryContent, loading, error };
}
