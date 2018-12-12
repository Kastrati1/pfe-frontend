import { retrieveJWT,deleteSession } from "../services/session";

function sendApiRequest({ url, method = "GET", params = null }) {
  const jwt = retrieveJWT();
  console.log("jwt before fetch : ", jwt);
  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  //headers.append("Access-Control-Allow-Origin", "*");
  
  if (jwt) headers.append("Authorization", "JWT " + jwt); //Can cause problems with django if null jwt is given
  
  if(process.NODE_ENV==="development"){
    console.log("Server dev");
  }
  
  if(process.NODE_ENV==="production"){
    console.log("Server prod");
  }
  console.log("heroku env backend url", process.env.REACT_APP_API_URL);
  const urlserver = process.env.REACT_APP_API_URL;   
  
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
