import React from 'react';
import styles from './Tooltip.module.scss';
import classNames from 'classnames';

const Tooltip = ({
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
  color = '',
  bgColor = '',
  orientation = 'top',
  message = '',
  ...restProps
}) => {
  const style = {
    left,
    right,
    top,
    bottom,
    color,
    backgroundColor: bgColor,
  };

  const setOrientationClass = (type) => {
    switch (type) {
      case 'top':
        return styles.orientationTop;
      case 'bottom':
        return styles.orientationBottom;
      case 'left':
        return styles.orientationLeft;
      case 'right':
        return styles.orientationRight;
      default:
    }
  };

  return (
    <span
      role="tooltip"
      style={style}
      className={classNames(styles.tooltip, setOrientationClass(orientation))}
      {...restProps}
    >
      {message}
    </span>
  );
};

export default Tooltip;
