import React from 'react';
import { FormControl } from 'react-bootstrap';

const FieldInput = ({
  input, label, disabled, type,
}) => (
  <div>
    {label ? <span>{label}</span> : null}
    <FormControl
      componentClass={type}
      disabled={disabled}
      {...input}
    />
  </div>
);

export default FieldInput;
