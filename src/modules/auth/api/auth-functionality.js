const URL = "http://localhost:5000";
// port 8000
// login
const loginRequest = async (username, password) => {
  const apiResult = await fetch(`${URL}/v1/auth`, {
    method: "post",
    headers: [["Content-Type", "application/json"]],
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  if (apiResult.status === 200) {
    const token = await apiResult.json();
    return token;
  }
  if (apiResult.status !== 200) {
    const jsonData = await apiResult.json();
    return { errorMessage: jsonData.errorMessage };
  }
};

export default loginRequest;
