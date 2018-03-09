import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Canvas.css";

class Canvas extends Component {
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
            <th>{title}</th>
            <th>
              {stream}
            </th>
            <th>
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
            <td>{problem}</td>
            <td>{problemValidation}</td>
            <td>{mmf}</td>
          </tr>
          <tr>
            <td>{proposedSolution}</td>
            <td rowSpan="2">{solutionValidation}</td>
            <td>{target}</td>
          </tr>
          <tr>
            <td>{customerValue}</td>
            <td>{measuringSuccess}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>{strategicFit}</td>
            <td>{businessValue}</td>
            <td>{estimatedTeamEffort}</td>
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
