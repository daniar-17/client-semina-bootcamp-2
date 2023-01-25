import React from "react";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import { Form } from "react-bootstrap";

export default function SForm({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <Form>
      <TextInputWithLabel
        label="Email address"
        name="email"
        value={form.email}
        type="email"
        onChange={handleChange}
        placeholder="Enter email"
      />
      <TextInputWithLabel
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <SButton
        loading={isLoading}
        disabled={isLoading}
        action={handleSubmit}
        variant="success"
      >
        Submit
      </SButton>
    </Form>
  );
}
