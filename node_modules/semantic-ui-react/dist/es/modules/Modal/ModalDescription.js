import _extends from 'babel-runtime/helpers/extends';
import React, { PropTypes } from 'react';
import cx from 'classnames';

import { customPropTypes, getElementType, getUnhandledProps, META } from '../../lib';

function ModalDescription(props) {
  var children = props.children,
      className = props.className;

  var classes = cx(className, 'description');
  var rest = getUnhandledProps(ModalDescription, props);
  var ElementType = getElementType(ModalDescription, props);

  return React.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

ModalDescription.handledProps = ['as', 'children', 'className'];
ModalDescription._meta = {
  name: 'ModalDescription',
  type: META.TYPES.MODULE,
  parent: 'Modal'
};

process.env.NODE_ENV !== "production" ? ModalDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string
} : void 0;

export default ModalDescription;