import React from 'react';
import { Label, Input } from 'reactstrap';

const FieldInput = ({
  input, label, disabled, type,
}) => (
  <Label className="w-100">
    <span>{label}</span>
    <Input
      type={type}
      disabled={disabled}
      {...input}
    />
  </Label>
);

export default FieldInput;
