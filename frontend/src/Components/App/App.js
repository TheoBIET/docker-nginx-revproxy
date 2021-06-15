import React from 'react';
import axios from 'axios';

const App = () => {
  const message = "WRONG"
  axios.get('http://theobiet.fr/api')
    .then(function (response) {
      console.log(response);
      return <div className='m-2'>{response.data.message}</div>
    })
    .catch(function (error) {
      console.log(error);
      return <div className='m-2'>{message}</div>
    })

}

export default App;