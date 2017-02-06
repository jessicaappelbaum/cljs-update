'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModalContent(props) {
  var children = props.children,
      image = props.image,
      className = props.className;

  var classes = (0, _classnames2.default)(className, (0, _lib.useKeyOnly)(image, 'image'), 'content');
  var rest = (0, _lib.getUnhandledProps)(ModalContent, props);
  var ElementType = (0, _lib.getElementType)(ModalContent, props);

  return _react2.default.createElement(
    ElementType,
    (0, _extends3.default)({}, rest, { className: classes }),
    children
  );
}

ModalContent.handledProps = ['as', 'children', 'className', 'image'];
ModalContent._meta = {
  name: 'ModalContent',
  type: _lib.META.TYPES.MODULE,
  parent: 'Modal'
};

process.env.NODE_ENV !== "production" ? ModalContent.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** A modal can contain image content */
  image: _react.PropTypes.bool
} : void 0;

exports.default = ModalContent;