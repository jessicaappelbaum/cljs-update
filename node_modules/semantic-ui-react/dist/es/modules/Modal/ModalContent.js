import _extends from 'babel-runtime/helpers/extends';
import React, { PropTypes } from 'react';
import cx from 'classnames';

import { customPropTypes, getElementType, getUnhandledProps, META, useKeyOnly } from '../../lib';

function ModalContent(props) {
  var children = props.children,
      image = props.image,
      className = props.className;

  var classes = cx(className, useKeyOnly(image, 'image'), 'content');
  var rest = getUnhandledProps(ModalContent, props);
  var ElementType = getElementType(ModalContent, props);

  return React.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

ModalContent.handledProps = ['as', 'children', 'className', 'image'];
ModalContent._meta = {
  name: 'ModalContent',
  type: META.TYPES.MODULE,
  parent: 'Modal'
};

process.env.NODE_ENV !== "production" ? ModalContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A modal can contain image content */
  image: PropTypes.bool
} : void 0;

export default ModalContent;