import React, {Component} from 'react';
import { Row, Col, Container } from 'reactstrap';

import { Palette, Canvas, Preview, registerPaletteElements } from 'react-page-maker';
import { DraggableTextBox } from '../components/draggableTextBox';
import { DragItemGridLayoutR1C2 } from '../components/draggableGrid_1_2';


const elements = {
    TEXTBOX: 'TEXTBOX',
    LAYOUT_GRID_1_2: 'LAYOUT_GRID_1_2'
};

export class PageConfigurator extends Component {
  constructor(props) {
    super(props);
    this.registerPaletteElements();
  }

  registerPaletteElements() {
    registerPaletteElements([{ // <-- registered palette elements
      type: elements.TEXTBOX,
      component: DraggableTextBox
    }, {
      type: elements.LAYOUT_GRID_1_2,
      component: DragItemGridLayoutR1C2
    }]);
  }

  paletteElements = [{ // <-- palette elements to be shown
    id: 'f1', // make sure ID is unique
    name: 'Input Field',
    type: elements.TEXTBOX
  }, {
    id: 'g1',
    name: 'Two Dropzones',
    type: elements.LAYOUT_GRID_1_2
  }]

  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm="8" className="canvas-wrapper">
            <Canvas />
          </Col>
          <Col sm="4" className="palette-wrapper">
            <Palette paletteElements={this.paletteElements} />
          </Col>
          </Row>
    </Container>
    );
  }
}

export class PageConfiguratorPreview extends Component {
    render() {
        return <Preview />
    }
}
