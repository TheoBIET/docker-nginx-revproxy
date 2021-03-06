import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Loading...",
        };
    }

    componentDidMount() {
        this.callApi()
            .then((res) => {
              console.log(res);
              this.setState({ message: res.data.message })
            })
            .catch((err) => {
                console.log(err);
                this.setState({ message: err });
            });
    }

    async callApi() {
        const response = await fetch("/api");
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        return <h2>{this.state.message}</h2>;
    }
}

export default App;
