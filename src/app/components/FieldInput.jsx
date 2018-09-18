import React from 'react';
import { FormControl } from 'react-bootstrap';

const FieldInput = ({ input }) => (
  <FormControl
    componentClass="textarea"
    placeholder="textarea"
    {...input}
  />
);

export default FieldInput;
