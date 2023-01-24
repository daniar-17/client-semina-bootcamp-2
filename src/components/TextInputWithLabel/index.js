import React from "react";
import { Form } from "react-bootstrap";
import TextInput from "../TextInput";

export default function TextInputWithLabel({
  label,
  name,
  value,
  type,
  onChange,
  placeHolder,
}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <TextInput
        type={type}
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
      ></TextInput>
    </Form.Group>
  );
}
