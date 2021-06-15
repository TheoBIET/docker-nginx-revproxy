import React from 'react';
import axios from 'axios';

const App = () => {
  const message = "HELLO"
  axios.get('/api')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })

  return <div className='m-2'>{message}</div>
}

export default App;