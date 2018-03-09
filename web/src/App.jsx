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

  createCanvas = () => {
    const canvas = {
      title: "TODO",
      po: "TODO",
      stream: "TODO",
      problem: "TODO",
      proposedSolution: "TODO",
      customerValue: "TODO",
      problemValidation: "TODO",
      solutionValidation: "TODO",
      mmf: "TODO",
      target: "TODO",
      measuringSuccess: "TODO",
      strategicFit: "TODO",
      businessValue: "TODO",
      estimatedTeamEffort: 5
    };

    apiClient
      .createCanvas(canvas)
      .then(savedCanvas =>
        this.setState({ canvases: [...this.state.canvases, savedCanvas] })
      );
  };

  updateCanvas = canvas => {
    apiClient.updateCanvas(canvas).then(updatedCanvas =>
      this.setState({
        canvases: [
          ...this.state.canvases.filter(
            element => element._id !== updatedCanvas._id // eslint-disable-line no-underscore-dangle
          ),
          updatedCanvas
        ]
      })
    );
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
        <button onClick={this.createCanvas}>Add new canvas</button>
      </div>
    );
  }
}

export default App;