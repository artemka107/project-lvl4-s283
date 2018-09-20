import { Alert } from 'reactstrap';
import React from 'react';

const RenderAlert = ({ isRender, type }) => {
  const alert = (
    <Alert
      color={type}
    >
      <h4>Something went wrong, please, try later!</h4>
    </Alert>
  );
  return isRender ? alert : null;
};

export default RenderAlert;
