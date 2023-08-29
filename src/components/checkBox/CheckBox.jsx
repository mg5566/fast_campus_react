import React from 'react';

const CheckBox = ({
  disabled = false,
  checked = false,
  label,
  onChange,
  ...restProps
}) => {
  return (
    <label style={{ fontSize: '1rem' }}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...restProps}
      />{' '}
      {label}
    </label>
  );
};

export default CheckBox;
