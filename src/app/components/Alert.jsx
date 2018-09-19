import { Alert } from 'react-bootstrap';
import React from 'react';

const RenderAlert = ({ isRender, style }) => {
  const alert = (
    <Alert
      bsStyle={style}
    >
      <h4>Something went wrong, please, try later!</h4>
    </Alert>
  );
  return isRender ? alert : null;
};

export default RenderAlert;
