import React, { Component } from 'react';
import { Container } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import { connect } from 'react-redux';

import Bunny from '../components/CanvasBunny';

class CanvasRoot extends Component {
  render() {
    return (
      <Container>
        <Bunny x={400} y={300} />
        <Bunny x={410} y={300} />
      </Container>
    );
  }
}

export default connect()(CanvasRoot);
