
function stripe_public_key() {
    return process.env.REACT_APP_STRIPE_KEY;  
  }

function url_server() {
    return process.env.REACT_APP_API_URL;  
  }

  export {stripe_public_key, url_server};
  
  