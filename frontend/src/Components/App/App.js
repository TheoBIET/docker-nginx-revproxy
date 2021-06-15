import React from "react";
import axios from "axios";
import { render } from "sass";

const App = () => {
    let message = "";
    axios
        .get("http://theobiet.fr/api")
        .then(function (response) {
            console.log(response);
            return render(<div className="m-2">{response.data.message}</div>);
        })
        .catch(function (error) {
            console.log(error);
            return render(<div className="m-2">{message}</div>);
        });
};

export default App;
