import React, { Component } from "react";
import "./App.css";

import Canvas from "./components/Canvas";

class App extends Component {
  state = {
    canvases: [
      {
        title: "Awesome Canvas",
        po: "Ben",
        stream: "Awesome Stream",
        problem: "Houston we have a problem!",
        proposedSolution: "Send rocket to Mars and start building a colony.",
        customerValue: "Customers can visit Mars.",
        problemValidation: "Validate all the things",
        solutionValidation: "Validate our solution as fast as possible",
        mmf: "Make money fast",
        target: "Make even more money",
        measuringSuccess: "Counting money",
        strategicFit: "It fits",
        businessValue: "Everybody loves interstellar travelling",
        estimatedTeamEffort: 5
      }
    ]
  };

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
