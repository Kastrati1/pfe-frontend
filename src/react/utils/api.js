import { retrieveJWT,deleteSession } from "../services/session";

function sendApiRequest({ url, method = "GET", params = null }) {
  const jwt = retrieveJWT();
  console.log("jwt before fetch : ", jwt);
  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  //headers.append("Access-Control-Allow-Origin", "*");
  
  if (jwt) headers.append("Authorization", "JWT " + jwt); //Can cause problems with django if null jwt is given
  const urlserver = "http://localhost:8000/";   // to replace with env variable
  
  console.log("passing by create react app", process.env.REACT_APP_TEST);
  console.log("passing by create react app", process.env.REACT_APP_TESTAPI);

  const urlcomplet = urlserver + url;

  function handleResponse(response) {
    if(response.status === 401){    //jwt expiree 
      deleteSession();
      console.log("deleting session");
    }
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }

  return fetch(urlcomplet, {
    method: method,
    headers: headers,
    body: params && JSON.stringify(params)
  }).then(handleResponse);
}

export default sendApiRequest;
