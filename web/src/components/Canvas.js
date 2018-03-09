import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Canvas.css";

class Canvas extends Component {
  updateCanvas = property => ({ target: { textContent } }) =>
    this.props.updateCanvas({
      ...this.props.canvas,
      [property]: textContent
    });

  render() {
    const {
      title,
      po,
      stream,
      ideation: { problem, proposedSolution, customerValue },
      qualification: { problemValidation, solutionValidation },
      grooming: { mmf, target, measuringSuccess },
      strategicFit,
      businessValue,
      estimatedTeamEffort
    } = this.props.canvas;
    return (
      <table>
        <thead>
          <tr>
            <th
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateCanvas("title")}
            >
              {title}
            </th>
            <th
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateCanvas("stream")}
            >
              {stream}
            </th>
            <th
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateCanvas("po")}
            >
              {po}
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
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateCanvas("problem")}
            >
              {problem}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateCanvas("problemValidation")}
            >
              {problemValidation}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateCanvas("mmf")}
            >
              {mmf}
            </td>
          </tr>
          <tr>
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateCanvas("proposedSolution")}
            >
              {proposedSolution}
            </td>
            <td
              rowSpan="2"
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateCanvas("solutionValidation")}
            >
              {solutionValidation}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateCanvas("target")}
            >
              {target}
            </td>
          </tr>
          <tr>
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateCanvas("customerValue")}
            >
              {customerValue}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateCanvas("measuringSuccess")}
            >
              {measuringSuccess}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateCanvas("strategicFit")}
            >
              {strategicFit}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateCanvas("businessValue")}
            >
              {businessValue}
            </td>
            <td
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateCanvas("estimatedTeamEffort")}
            >
              {estimatedTeamEffort}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

Canvas.propTypes = {
  canvas: PropTypes.shape({
    title: PropTypes.string.isRequired,
    po: PropTypes.string.isRequired,
    stream: PropTypes.string.isRequired,
    ideation: PropTypes.shape({
      problem: PropTypes.string.isRequired,
      proposedSolution: PropTypes.string.isRequired,
      customerValue: PropTypes.string.isRequired
    }).isRequired,
    qualification: PropTypes.shape({
      problemValidation: PropTypes.string.isRequired,
      solutionValidation: PropTypes.string.isRequired
    }).isRequired,
    grooming: PropTypes.shape({
      mmf: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
      measuringSuccess: PropTypes.string.isRequired
    }).isRequired,
    strategicFit: PropTypes.string.isRequired,
    businessValue: PropTypes.string.isRequired,
    estimatedTeamEffort: PropTypes.number.isRequired
  }).isRequired,
  updateCanvas: PropTypes.func.isRequired
};

export default Canvas;
