import React from 'react';
import { Row, Col } from 'reactstrap';

import { Draggable, Dropzone } from 'react-page-maker';

  export const DragItemGridLayoutR1C2 = (props) => {
    // make sure you are passing `dropzoneProps` prop to dropzone
    const { showBasicContent, showPreview, dropzoneProps, childNode, ...rest } = props;

    if (showBasicContent) { // content to be shown in palette
      return (
        <Draggable {...props} >
          <span>{ rest.name }</span>
        </Draggable>
      );
    }

    if (showPreview) { // content to be shown in preview mode - end result
      return (
        <Row className="row">
          <Col sm="6">
            {childNode['canvas-1-1'] && childNode['canvas-1-1'].map(e => e)}
          </Col>
          <Col sm="6">
            {childNode['canvas-1-2'] && childNode['canvas-1-2'].map(e => e)}
          </Col>
        </Row>
      )
    }

    return ( // content to be shown in canvas
      <Draggable {...props} >
        <span>{ rest.name }</span>
        <div className="grid-layout">
          <div className="row">
            <div className="col-sm-6">
              <Dropzone {...dropzoneProps} id="canvas-1-1" />
            </div>
            <div className="col-sm-6">
              <Dropzone {...dropzoneProps} id="canvas-1-2" />
            </div>
          </div>
        </div>
      </Draggable>
    );
  };