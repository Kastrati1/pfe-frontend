import sendApiRequest from "../utils/api";

function storeJWT(jwt) {
  const serialized = JSON.stringify(jwt);
  localStorage.setItem("JWT", serialized);
}

function retrieveJWT() {
  const serialized = localStorage.getItem("JWT");
  return JSON.parse(serialized);
}

function clearJWT() {
  localStorage.removeItem("JWT");
}
const currentUser = () => {
  return sendApiRequest({
    url: "/app1/current_user"
  })
    .then(user => {
      const jwt = user.token;
      storeJWT(jwt);
      return user;
    })
    .catch(() => {
      const jwt = "FAKE JWT";
      storeJWT(jwt);
      return jwt;
    });
};

const createSession = (username, password) => {
  return sendApiRequest({
    url: "/api/sessions",
    method: "POST",
    params: {
      username: username,
      password: password
    }
  })
    .then(data => {
      const jwt = data.jwt;
      storeJWT(jwt);
      return jwt;
    })
    .catch(() => {
      const jwt = "FAKE JWT";
      storeJWT(jwt);
      return jwt;
    });
};

const deleteSession = () => {
  clearJWT();
};

export { createSession, deleteSession, retrieveJWT, storeJWT, currentUser };
