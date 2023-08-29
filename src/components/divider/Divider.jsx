import classNames from 'classnames';
import React from 'react';
import styles from './Divider.module.scss';

const Divider = ({
  space = 22,
  color = '#ccc',
  className = '',
  ...restProps
}) => {
  const style = {
    marginTop: space,
    marginBottom: space,
    backgroundColor: color, 
  };

  return (
    <div
      role="presentation"
      className={classNames(styles.line, className)}
      style={style}
      {...restProps}
    />
  );
};

export default Divider;
