'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CommentGroup(props) {
  var className = props.className,
      children = props.children,
      collapsed = props.collapsed,
      minimal = props.minimal,
      threaded = props.threaded;


  var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(collapsed, 'collapsed'), (0, _lib.useKeyOnly)(minimal, 'minimal'), (0, _lib.useKeyOnly)(threaded, 'threaded'), 'comments', className);
  var rest = (0, _lib.getUnhandledProps)(CommentGroup, props);
  var ElementType = (0, _lib.getElementType)(CommentGroup, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    children
  );
}

CommentGroup.handledProps = ['as', 'children', 'className', 'collapsed', 'minimal', 'threaded'];
CommentGroup._meta = {
  name: 'CommentGroup',
  parent: 'Comment',
  type: _lib.META.TYPES.VIEW
};

process.env.NODE_ENV !== "production" ? CommentGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Comments can be collapsed, or hidden from view. */
  collapsed: _react.PropTypes.bool,

  /** Comments can hide extra information unless a user shows intent to interact with a comment */
  minimal: _react.PropTypes.bool,

  /** A comment list can be threaded to showing the relationship between conversations */
  threaded: _react.PropTypes.bool
} : void 0;

exports.default = CommentGroup;