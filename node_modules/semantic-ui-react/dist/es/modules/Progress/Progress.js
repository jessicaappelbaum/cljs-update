import _extends from 'babel-runtime/helpers/extends';
import _without from 'lodash/without';
import _round from 'lodash/round';
import _clamp from 'lodash/clamp';
import _every from 'lodash/every';
import _isUndefined from 'lodash/isUndefined';

import cx from 'classnames';
import React, { PropTypes } from 'react';

import { customPropTypes, getElementType, getUnhandledProps, META, SUI, useKeyOnly, useValueAndKey } from '../../lib';

function Progress(props) {
  var active = props.active,
      attached = props.attached,
      autoSuccess = props.autoSuccess,
      color = props.color,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      error = props.error,
      indicating = props.indicating,
      inverted = props.inverted,
      label = props.label,
      percent = props.percent,
      precision = props.precision,
      progress = props.progress,
      size = props.size,
      success = props.success,
      total = props.total,
      value = props.value,
      warning = props.warning;


  var isAutoSuccess = autoSuccess && (percent >= 100 || value >= total);

  var showProgress = progress || label || !_isUndefined(precision) || !_every([total, value], _isUndefined);

  var _percent = void 0;
  if (!_isUndefined(percent)) {
    _percent = percent;
  } else if (!_isUndefined(total) && !_isUndefined(value)) {
    _percent = value / total * 100;
  }

  _percent = _clamp(_percent, 0, 100);

  if (!_isUndefined(precision)) {
    _percent = _round(_percent, precision);
  }

  var progressText = void 0;
  if (label === 'percent' || label === true || _isUndefined(label)) {
    progressText = _percent + '%';
  } else if (label === 'ratio') {
    progressText = value + '/' + total;
  }

  var classes = cx('ui', size, color, useKeyOnly(active || indicating, 'active'), useKeyOnly(isAutoSuccess || success, 'success'), useKeyOnly(warning, 'warning'), useKeyOnly(error, 'error'), useKeyOnly(disabled, 'disabled'), useKeyOnly(indicating, 'indicating'), useKeyOnly(inverted, 'inverted'), useValueAndKey(attached, 'attached'), className, 'progress');
  var rest = getUnhandledProps(Progress, props);
  var ElementType = getElementType(Progress, props);

  return React.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    React.createElement(
      'div',
      { className: 'bar', style: { width: _percent + '%' } },
      showProgress && React.createElement(
        'div',
        { className: 'progress' },
        progressText
      )
    ),
    children && React.createElement(
      'div',
      { className: 'label' },
      children
    )
  );
}

Progress.handledProps = ['active', 'as', 'attached', 'autoSuccess', 'children', 'className', 'color', 'disabled', 'error', 'indicating', 'inverted', 'label', 'percent', 'precision', 'progress', 'size', 'success', 'total', 'value', 'warning'];
Progress._meta = {
  name: 'Progress',
  type: META.TYPES.MODULE,
  props: {
    attached: ['top', 'bottom'],
    color: SUI.COLORS,
    label: ['ratio', 'percent'],
    size: _without(SUI.SIZES, 'mini', 'huge', 'massive')
  }
};

process.env.NODE_ENV !== "production" ? Progress.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A progress bar can show activity. */
  active: PropTypes.bool,

  /** A progress bar can attach to and show the progress of an element (i.e. Card or Segment). */
  attached: PropTypes.oneOf(Progress._meta.props.attached),

  /** Whether success state should automatically trigger when progress completes. */
  autoSuccess: PropTypes.bool,

  /** A progress bar can have different colors. */
  color: PropTypes.oneOf(Progress._meta.props.color),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A progress bar be disabled. */
  disabled: PropTypes.bool,

  /** A progress bar can show a error state. */
  error: PropTypes.bool,

  /** An indicating progress bar visually indicates the current level of progress of a task. */
  indicating: PropTypes.bool,

  /** A progress bar can have its colors inverted. */
  inverted: PropTypes.bool,

  /** Can be set to either to display progress as percent or ratio. */
  label: customPropTypes.every([customPropTypes.some([customPropTypes.demand(['percent']), customPropTypes.demand(['total', 'value'])]), PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(Progress._meta.props.label)])]),

  /** Current percent complete. */
  percent: customPropTypes.every([customPropTypes.disallow(['total', 'value']), PropTypes.oneOfType([PropTypes.string, PropTypes.number])]),

  /** A progress bar can contain a text value indicating current progress. */
  progress: PropTypes.bool,

  /** Decimal point precision for calculated progress. */
  precision: PropTypes.number,

  /** A progress bar can vary in size. */
  size: PropTypes.oneOf(Progress._meta.props.size),

  /** A progress bar can show a success state. */
  success: PropTypes.bool,

  /**
   * For use with value.
   * Together, these will calculate the percent.
   * Mutually excludes percent.
   */
  total: customPropTypes.every([customPropTypes.demand(['value']), customPropTypes.disallow(['percent']), PropTypes.oneOfType([PropTypes.string, PropTypes.number])]),

  /**
   * For use with total. Together, these will calculate the percent. Mutually excludes percent.
   */
  value: customPropTypes.every([customPropTypes.demand(['total']), customPropTypes.disallow(['percent']), PropTypes.oneOfType([PropTypes.string, PropTypes.number])]),

  /** A progress bar can show a warning state. */
  warning: PropTypes.bool
} : void 0;

export default Progress;