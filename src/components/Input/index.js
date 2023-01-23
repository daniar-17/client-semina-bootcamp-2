import React from "react";
import propTypes from "prop-types";

export default function Input({ type, value, name, handleChange }) {
  return (
    <input type={type} value={value} name={name} onChange={handleChange} />
  );
}

Input.propTypes = {
  name: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};
