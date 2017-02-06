import _extends from 'babel-runtime/helpers/extends';
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { createShorthandFactory, getElementType, getUnhandledProps, META } from '../../lib';

/**
 * A PopupHeader displays a header in a Popover.
 */
export default function PopupHeader(props) {
  var children = props.children,
      className = props.className;

  var classes = cx('header', className);
  var rest = getUnhandledProps(PopupHeader, props);
  var ElementType = getElementType(PopupHeader, props);

  return React.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

PopupHeader.handledProps = ['children', 'className'];
PopupHeader.create = createShorthandFactory(PopupHeader, function (value) {
  return { children: value };
});

process.env.NODE_ENV !== "production" ? PopupHeader.propTypes = {
  /** The header of the Popup */
  children: PropTypes.node,

  /** Classes to add to the Popup header className. */
  className: PropTypes.string
} : void 0;

PopupHeader._meta = {
  name: 'PopupHeader',
  type: META.TYPES.MODULE,
  parent: 'Popup'
};