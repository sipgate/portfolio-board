import React, { Component } from "react";
import "./App.css";

import Canvas from "./components/Canvas";

import apiClient from "./api-client";

class App extends Component {
  state = {
    canvases: []
  };

  componentWillMount() {
    apiClient.fetchCanvases().then(canvases => this.setState({ canvases }));
  }

  updateCanvas = canvas => {
    console.log(canvas);
  };

  render() {
    return (
      <div>
        {this.state.canvases.map(canvas => (
          <Canvas
            key={canvas.title}
            canvas={canvas}
            updateCanvas={this.updateCanvas}
          />
        ))}
      </div>
    );
  }
}

export default App;
