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

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListIcon(props) {
  var className = props.className,
      verticalAlign = props.verticalAlign;

  var classes = (0, _classnames2.default)((0, _lib.useVerticalAlignProp)(verticalAlign), className);
  var rest = (0, _lib.getUnhandledProps)(ListIcon, props);

  return _react2.default.createElement(_Icon2.default, (0, _extends3.default)({}, rest, { className: classes }));
}

ListIcon.handledProps = ['className', 'verticalAlign'];
ListIcon._meta = {
  name: 'ListIcon',
  parent: 'List',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    verticalAlign: _lib.SUI.VERTICAL_ALIGNMENTS
  }
};

process.env.NODE_ENV !== "production" ? ListIcon.propTypes = {
  /** Additional classes. */
  className: _react.PropTypes.string,

  /** An element inside a list can be vertically aligned. */
  verticalAlign: _react.PropTypes.oneOf(ListIcon._meta.props.verticalAlign)
} : void 0;

ListIcon.create = (0, _lib.createShorthandFactory)(ListIcon, function (name) {
  return { name: name };
});

exports.default = ListIcon;