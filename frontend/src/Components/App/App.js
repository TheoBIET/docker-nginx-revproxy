import React from "react";

class App {
    state = {
        message: "Loading...",
    };

    componentDidMount() {
        this.callApi()
            .then((res) => this.setState({ message: res.message }))
            .catch((err) => {
                console.log(err);
                this.setState({ message: err });
            });
    }
    callApi = async () => {
        const response = await fetch("/api");
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        return <h2>{this.state.message}</h2>
    }
}

export default App;
