const URL = "http://localhost:8000";

async function postPythonCode(pythonCode) {
  const apiResult = await fetch(`${URL}/diagram`, {
    method: "post",
    headers: [["Content-Type", "text/plain"]],
    body: pythonCode,
  });
  if (apiResult.status == 200) {
    const imageBlob = await apiResult.blob();
    return { image: imageBlob };
  } else if (apiResult.status == 400) {
    const jsonData = await apiResult.json();
    return { errorMessage: jsonData };
  } else {
    const jsonData = await apiResult.json();
    return { errorMessage: jsonData.errorMessage };
  }
}

async function getDiagramByFormatType(pythonCode, imageFormat) {
  const apiResult = await fetch(`${URL}/diagram-format/${imageFormat}`, {
    method: "post",
    headers: [["Content-Type", "text/plain"]],
    body: pythonCode,
  });

  if (apiResult.status == 200) {
    const imageBlob = await apiResult.blob();
    return { image: imageBlob };
  } else {
    return {
      errorMessage:
        "There was an error when trying to export the image diagram.",
    };
  }
}

export { postPythonCode, getDiagramByFormatType };
