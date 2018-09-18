import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Channels from '../containers/Channels';
import Frame from '../containers/Frame';
import ChatForm from '../containers/ChatForm';

const App = () => (
  <Grid>
    <Row className="show-grid">
      <Col md={3}>
        <Channels />
      </Col>
      <Col md={9}>
        <Frame />
      </Col>
    </Row>
    <Row className="show-grid">
      <Col md={12}>
        <ChatForm />
      </Col>
    </Row>
  </Grid>);

export default App;
