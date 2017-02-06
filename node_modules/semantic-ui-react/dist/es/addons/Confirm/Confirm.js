import _extends from 'babel-runtime/helpers/extends';
import _has from 'lodash/has';

import React, { PropTypes } from 'react';

import { getUnhandledProps, META } from '../../lib';
import Button from '../../elements/Button';
import Modal from '../../modules/Modal';

/**
 * A Confirm modal gives the user a choice to confirm or cancel an action
 * @see Modal
 */
function Confirm(props) {
  var open = props.open,
      cancelButton = props.cancelButton,
      confirmButton = props.confirmButton,
      header = props.header,
      content = props.content,
      onConfirm = props.onConfirm,
      onCancel = props.onCancel;

  var rest = getUnhandledProps(Confirm, props);

  // `open` is auto controlled by the Modal
  // It cannot be present (even undefined) with `defaultOpen`
  // only apply it if the user provided an open prop
  var openProp = {};
  if (_has(props, 'open')) openProp.open = open;

  return React.createElement(
    Modal,
    _extends({}, openProp, { size: 'small', onClose: onCancel }, rest),
    header && React.createElement(
      Modal.Header,
      null,
      header
    ),
    content && React.createElement(
      Modal.Content,
      null,
      content
    ),
    React.createElement(
      Modal.Actions,
      null,
      React.createElement(
        Button,
        { onClick: onCancel },
        cancelButton
      ),
      React.createElement(
        Button,
        { primary: true, onClick: onConfirm },
        confirmButton
      )
    )
  );
}

Confirm.handledProps = ['cancelButton', 'confirmButton', 'content', 'header', 'onCancel', 'onConfirm', 'open'];
Confirm._meta = {
  name: 'Confirm',
  type: META.TYPES.ADDON
};

process.env.NODE_ENV !== "production" ? Confirm.propTypes = {
  /** Whether or not the modal is visible */
  open: PropTypes.bool,

  /** The cancel button text */
  cancelButton: PropTypes.string,

  /** The OK button text */
  confirmButton: PropTypes.string,

  /** The ModalHeader text */
  header: PropTypes.string,

  /** The ModalContent text. */
  content: PropTypes.string,

  /** Called when the OK button is clicked */
  onConfirm: PropTypes.func,

  /** Called when the Cancel button is clicked */
  onCancel: PropTypes.func
} : void 0;

Confirm.defaultProps = {
  cancelButton: 'Cancel',
  confirmButton: 'OK',
  content: 'Are you sure?'
};

export default Confirm;