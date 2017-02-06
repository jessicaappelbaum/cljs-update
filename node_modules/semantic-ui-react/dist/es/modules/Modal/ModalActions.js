import _extends from 'babel-runtime/helpers/extends';
import React, { PropTypes } from 'react';
import cx from 'classnames';

import { customPropTypes, getElementType, getUnhandledProps, META } from '../../lib';

function ModalActions(props) {
  var children = props.children,
      className = props.className;

  var classes = cx(className, 'actions');
  var rest = getUnhandledProps(ModalActions, props);
  var ElementType = getElementType(ModalActions, props);

  return React.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

ModalActions.handledProps = ['as', 'children', 'className'];
ModalActions._meta = {
  name: 'ModalActions',
  type: META.TYPES.MODULE,
  parent: 'Modal'
};

process.env.NODE_ENV !== "production" ? ModalActions.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string
} : void 0;

export default ModalActions;