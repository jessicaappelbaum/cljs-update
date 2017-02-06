import _extends from 'babel-runtime/helpers/extends';
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { createShorthandFactory, getElementType, getUnhandledProps, META } from '../../lib';

/**
 * A PopupContent displays the content body of a Popover.
 */
export default function PopupContent(props) {
  var children = props.children,
      className = props.className;

  var classes = cx('content', className);
  var rest = getUnhandledProps(PopupContent, props);
  var ElementType = getElementType(PopupContent, props);

  return React.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

PopupContent.handledProps = ['children', 'className'];
PopupContent.create = createShorthandFactory(PopupContent, function (value) {
  return { children: value };
});

process.env.NODE_ENV !== "production" ? PopupContent.propTypes = {
  /** The content of the Popup */
  children: PropTypes.node,

  /** Classes to add to the Popup content className. */
  className: PropTypes.string
} : void 0;

PopupContent._meta = {
  name: 'PopupContent',
  type: META.TYPES.MODULE,
  parent: 'Popup'
};