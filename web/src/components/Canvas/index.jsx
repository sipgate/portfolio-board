import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Canvas.css";

import Headline from "./Headline";
import EditableParagraph from "./EditableParagraph";

class Canvas extends Component {
  updateCanvas = property => ({ target: { textContent } }) =>
    this.props.updateCanvas({
      ...this.props.canvas,
      [property]: textContent
    });

  deleteCanvas = id => () => this.props.deleteCanvas(id);

  render() {
    const {
      _id,
      title,
      po,
      stream,
      problem,
      proposedSolution,
      customerValue,
      problemValidation,
      solutionValidation,
      mmf,
      target,
      measuringSuccess,
      strategicFit,
      businessValue,
      estimatedTeamEffort
    } = this.props.canvas;
    return (
      <table>
        <thead>
          <tr>
            <th>
              <EditableParagraph onBlur={this.updateCanvas("title")}>
                {title}
              </EditableParagraph>
            </th>
            <th>
              <EditableParagraph onBlur={this.updateCanvas("stream")}>
                {stream}
              </EditableParagraph>
            </th>
            <th>
              <EditableParagraph onBlur={this.updateCanvas("po")}>
                {po}
              </EditableParagraph>
            </th>
          </tr>
          <tr>
            <th>IDEATION</th>
            <th>QUALIFICATION</th>
            <th>GROOMING</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Headline>Problem</Headline>
              <EditableParagraph onBlur={this.updateCanvas("problem")}>
                {problem}
              </EditableParagraph>
            </td>
            <td>
              <Headline>Problem Validation</Headline>
              <EditableParagraph
                onBlur={this.updateCanvas("problemValidation")}
              >
                {problemValidation}
              </EditableParagraph>
            </td>
            <td>
              <Headline>MMF</Headline>
              <EditableParagraph onBlur={this.updateCanvas("mmf")}>
                {mmf}
              </EditableParagraph>
            </td>
          </tr>
          <tr>
            <td>
              <Headline>Proposed Solution</Headline>
              <EditableParagraph onBlur={this.updateCanvas("proposedSolution")}>
                {proposedSolution}
              </EditableParagraph>
            </td>
            <td rowSpan="2">
              <Headline>Solution Validation</Headline>
              <EditableParagraph
                onBlur={this.updateCanvas("solutionValidation")}
              >
                {solutionValidation}
              </EditableParagraph>
            </td>
            <td>
              <Headline>Target</Headline>
              <EditableParagraph onBlur={this.updateCanvas("target")}>
                {target}
              </EditableParagraph>
            </td>
          </tr>
          <tr>
            <td>
              <Headline>Customer Value</Headline>
              <EditableParagraph onBlur={this.updateCanvas("customerValue")}>
                {customerValue}
              </EditableParagraph>
            </td>
            <td>
              <Headline>Measuring Success</Headline>
              <EditableParagraph onBlur={this.updateCanvas("measuringSuccess")}>
                {measuringSuccess}
              </EditableParagraph>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <Headline>Strategic Fit</Headline>
              <EditableParagraph onBlur={this.updateCanvas("strategicFit")}>
                {strategicFit}
              </EditableParagraph>
            </td>
            <td>
              <Headline>Business Value</Headline>
              <EditableParagraph onBlur={this.updateCanvas("businessValue")}>
                {businessValue}
              </EditableParagraph>
            </td>
            <td>
              <Headline>Estimated Team Effort</Headline>
              <EditableParagraph
                onBlur={this.updateCanvas("estimatedTeamEffort")}
              >
                {estimatedTeamEffort}
              </EditableParagraph>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <button onClick={this.deleteCanvas(_id)}>Delete Canvas</button>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

Canvas.propTypes = {
  canvas: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    po: PropTypes.string.isRequired,
    stream: PropTypes.string.isRequired,
    problem: PropTypes.string.isRequired,
    proposedSolution: PropTypes.string.isRequired,
    customerValue: PropTypes.string.isRequired,
    problemValidation: PropTypes.string.isRequired,
    solutionValidation: PropTypes.string.isRequired,
    mmf: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    measuringSuccess: PropTypes.string.isRequired,
    strategicFit: PropTypes.string.isRequired,
    businessValue: PropTypes.string.isRequired,
    estimatedTeamEffort: PropTypes.number.isRequired
  }).isRequired,
  updateCanvas: PropTypes.func.isRequired,
  deleteCanvas: PropTypes.func.isRequired
};

export default Canvas;
