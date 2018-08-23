import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Channels from './components/Channels';
import Frame from './components/Frame';
import InputForm from './components/InputForm';

const App = ({ channels }) => (
  <Grid>
    <Row className="show-grid">
      <Col md={3}>
        <Channels channels={channels} />
      </Col>
      <Col md={9}>
        <Frame />
      </Col>
    </Row>
    <Row className="show-grid">
      <Col md={12}>
        <InputForm />
      </Col>
    </Row>
  </Grid>);

export default App;
