import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';
import { Draggable } from 'react-page-maker'; // to give drag behaviour

export const DraggableTextBox = (props) => {
  // `showBasicContent` is default prop passed by `Palette` component
  const { showBasicContent, showPreview, name } = props;

  if (showBasicContent) { // palette version - content to be shown in palette list
    return (
      <Draggable {...props}>
        <span>{name}</span>
      </Draggable>
    );
  }

  if (showPreview) { // preview version - content to be shown in preview mode - end result, no need of `Draggable`
    return (
      <FormGroup>
        <Label>{name}</Label>
        <Input type="text" />
      </FormGroup>
    );
  }

  return ( // canvas version - content to be shown in canvas
    <Draggable {...props}>
      <FormGroup>
        <Label>{name}</Label>
        <Input type="text" placeholder="Type here" />
      </FormGroup>
    </Draggable>
  );
};

DraggableTextBox.propTypes = {
  name: PropTypes.string,
  showBasicContent: PropTypes.bool
};

