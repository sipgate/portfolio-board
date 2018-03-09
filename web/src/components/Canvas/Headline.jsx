import React from "react";
import PropTypes from "prop-types";

const Headline = ({ children }) => <h4>{children}</h4>;

Headline.propTypes = {
  children: PropTypes.node.isRequired
};

export default Headline;
