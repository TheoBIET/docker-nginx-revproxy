import React from 'react'
import App from './App/App'
import axios from 'axios'
const {api_base} = require('../../config');

const AppContainer = async () => {
  const response = await axios.get(api_base);

  console.log(response);
  console.log(response.data);
  console.log(response.data.message);

  const appProps = {
    message: message
  }

  return <App {...appProps} />
}

export default AppContainer;