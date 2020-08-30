import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <h1>It works</h1>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
