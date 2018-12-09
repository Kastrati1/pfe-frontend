import { retrieveJWT, currentUser, deleteSession } from "../services/session";

function sendApiRequest({ url, method = "GET", params = null }) {
  const jwt = retrieveJWT();
  console.log("jwt before fetch : ", jwt);
  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  //headers.append("Authorization", "JWT " + jwt); give errors sometimes when sent with post requests
  //headers.append("Access-Control-Allow-Origin", "*");

  function handleResponse(response) {
    if (!response.ok) {
      deleteSession();
      console.log(response);
      throw Error(response.statusText);
    }
    return response.json();
  }
  if (method === "GET") {
    if (jwt) headers.append("Authorization", "JWT " + jwt);
  }
  return fetch(url, {
    method: method,
    headers: headers,
    body: params && JSON.stringify(params)
  }).then(handleResponse);
}

export default sendApiRequest;
