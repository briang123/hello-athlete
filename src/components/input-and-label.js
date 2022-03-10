import React from 'react';

export const InputAndLabel = ({
  label,
  name,
  value,
  onChange,
  defaultValue,
}) => {
  return (
    <>
      <div>{label}</div>
      <div>
        <input
          name={name}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};
