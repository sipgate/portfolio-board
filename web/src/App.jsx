import React, { Component } from "react";
import "./App.css";

import Canvas from "./components/Canvas";
import Lane from "./components/Lane";
import Stream from "./components/Stream";
import Person from "./components/Person";

import apiClient from "./api-client";

class App extends Component {
  state = {
    canvases: [],
    lanes: [],
    streams: [],
    persons: []
  };

  componentWillMount() {
    apiClient.fetchLanes().then(lanes => this.setState({ lanes }));
    apiClient.fetchStreams().then(streams => this.setState({ streams }));
    apiClient.fetchCanvases().then(canvases => this.setState({ canvases }));
    apiClient.fetchPersons().then(persons => this.setState({ persons }));
  }

  createCanvas = () => {
    const canvas = {
      title: "Awesome Title",
      po: "John Doe",
      stream: "Awesome Stream",
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

  deleteCanvas = id => {
    apiClient.deleteCanvas(id).then(() =>
      this.setState({
        canvases: [
          ...this.state.canvases.filter(
            element => element._id !== id // eslint-disable-line no-underscore-dangle
          )
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
            deleteCanvas={this.deleteCanvas}
          />
        ))}
        {this.state.lanes.map(canvas => (
          <Lane
            key={canvas.title}
            canvas={canvas}
          />
        ))}
        {this.state.streams.map(stream => (
          <Stream
            key={stream.title}
            canvas={stream}
          />
        ))}
        {this.state.persons.map(person => (
          <Person
            key={person.title}
            person={person}
          />
        ))}
        <button onClick={this.createCanvas}>Add new canvas</button>
      </div>
    );
  }
}

export default App;
