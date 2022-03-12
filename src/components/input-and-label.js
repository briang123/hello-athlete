import React from 'react';
import styled from 'styled-components';

export const InputAndLabel = ({
  label,
  name,
  value,
  onChange,
  defaultValue,
}) => {
  return (
    <>
      <Label>{label}</Label>
      <div>
        <Input
          name={name}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

export const Input = styled.input`
  border: 0;
  border-radius: 8px;
  padding: 5px;
  text-align: center;
  background-color: hsla(235, 24%, 21%, 1);
  color: hsla(231, 29%, 82%, 1);
  &:focus {
    outline: 1px solid hsla(217, 95%, 48%, 1);
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
`;
