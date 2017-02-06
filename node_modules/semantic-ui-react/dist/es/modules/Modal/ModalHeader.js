import _extends from 'babel-runtime/helpers/extends';
import React, { PropTypes } from 'react';
import cx from 'classnames';

import { customPropTypes, getElementType, getUnhandledProps, META } from '../../lib';

function ModalHeader(props) {
  var children = props.children,
      className = props.className;

  var classes = cx(className, 'header');
  var rest = getUnhandledProps(ModalHeader, props);
  var ElementType = getElementType(ModalHeader, props);

  return React.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

ModalHeader.handledProps = ['as', 'children', 'className'];
ModalHeader._meta = {
  name: 'ModalHeader',
  type: META.TYPES.MODULE,
  parent: 'Modal'
};

process.env.NODE_ENV !== "production" ? ModalHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string
} : void 0;

export default ModalHeader;