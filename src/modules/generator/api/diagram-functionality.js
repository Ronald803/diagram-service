const URL = "http://localhost:3000";

async function postPythonCode(pythonCode) {
  const apiResult = await fetch(`${URL}/api/diagram`, {
    method: "post",
    headers: [["Content-Type", "text/plain"]],
    body: pythonCode,
  });
  if (apiResult.status == 200) {
    const imageBlob = await apiResult.blob();
    return { image: imageBlob };
  } else if (apiResult.status == 400) {
    const jsonData = await apiResult.json();
    return { errorMessage: jsonData.errorMessage };
  } else {
    const jsonData = await apiResult.json();
    return { errorMessage: jsonData.errorMessage };
  }
}

export { postPythonCode };
