import _extends from 'babel-runtime/helpers/extends';
import _isNil from 'lodash/isNil';

import cx from 'classnames';
import React, { PropTypes } from 'react';

import { createShorthand, customPropTypes, getElementType, getUnhandledProps, META, SUI, useVerticalAlignProp } from '../../lib';
import ItemHeader from './ItemHeader';
import ItemDescription from './ItemDescription';
import ItemExtra from './ItemExtra';
import ItemMeta from './ItemMeta';

/**
 * An item can contain content
 */
function ItemContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      extra = props.extra,
      header = props.header,
      meta = props.meta,
      verticalAlign = props.verticalAlign;

  var classes = cx(className, useVerticalAlignProp(verticalAlign), 'content');
  var rest = getUnhandledProps(ItemContent, props);
  var ElementType = getElementType(ItemContent, props);

  if (!_isNil(children)) {
    return React.createElement(
      ElementType,
      _extends({}, rest, { className: classes }),
      children
    );
  }

  return React.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    createShorthand(ItemHeader, function (val) {
      return { content: val };
    }, header),
    createShorthand(ItemMeta, function (val) {
      return { content: val };
    }, meta),
    createShorthand(ItemDescription, function (val) {
      return { content: val };
    }, description),
    createShorthand(ItemExtra, function (val) {
      return { content: val };
    }, extra),
    content
  );
}

ItemContent.handledProps = ['as', 'children', 'className', 'content', 'description', 'extra', 'header', 'meta', 'verticalAlign'];
ItemContent._meta = {
  name: 'ItemContent',
  parent: 'Item',
  type: META.TYPES.VIEW,
  props: {
    verticalAlign: SUI.VERTICAL_ALIGNMENTS
  }
};

process.env.NODE_ENV !== "production" ? ItemContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for ItemDescription component. */
  description: customPropTypes.itemShorthand,

  /** Shorthand for ItemExtra component. */
  extra: customPropTypes.itemShorthand,

  /** Shorthand for ItemHeader component. */
  header: customPropTypes.itemShorthand,

  /** Shorthand for ItemMeta component. */
  meta: customPropTypes.itemShorthand,

  /** Content can specify its vertical alignment */
  verticalAlign: PropTypes.oneOf(ItemContent._meta.props.verticalAlign)
} : void 0;

export default ItemContent;