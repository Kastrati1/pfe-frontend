import { retrieveJWT } from "../services/session";

function sendApiRequest({ url, method = "GET", params = null }) {
  const jwt = retrieveJWT();
  console.log("jwt before fetch : ", jwt);
  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  //headers.append("Access-Control-Allow-Origin", "*");
  
  if (jwt) headers.append("Authorization", "JWT " + jwt); //Can cause problems with django if null jwt is given

  

  function handleResponse(response) {
    if (!response.ok) {
      console.log(response);
      throw Error(response.statusText);
    }
    return response.json();
  }

  return fetch(url, {
    method: method,
    headers: headers,
    body: params && JSON.stringify(params)
  }).then(handleResponse);
}

export default sendApiRequest;
