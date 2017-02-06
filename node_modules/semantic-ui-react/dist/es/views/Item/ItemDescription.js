import _extends from 'babel-runtime/helpers/extends';
import _isNil from 'lodash/isNil';

import cx from 'classnames';
import React, { PropTypes } from 'react';

import { customPropTypes, getElementType, getUnhandledProps, META } from '../../lib';

/**
 * An item can contain a description with a single or multiple paragraphs
 */
function ItemDescription(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = cx(className, 'description');
  var rest = getUnhandledProps(ItemDescription, props);
  var ElementType = getElementType(ItemDescription, props);

  return React.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    _isNil(children) ? content : children
  );
}

ItemDescription.handledProps = ['as', 'children', 'className', 'content'];
ItemDescription._meta = {
  name: 'ItemDescription',
  parent: 'Item',
  type: META.TYPES.VIEW
};

process.env.NODE_ENV !== "production" ? ItemDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand
} : void 0;

export default ItemDescription;