import React from "react";
import PropTypes from "prop-types";

const EditableParagraph = ({ children, onBlur }) => (
  <p contentEditable suppressContentEditableWarning onBlur={onBlur}>
    {children}
  </p>
);

EditableParagraph.propTypes = {
  children: PropTypes.node.isRequired,
  onBlur: PropTypes.func.isRequired
};

export default EditableParagraph;
