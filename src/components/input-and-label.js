import React from 'react';
import styled from 'styled-components';
import { theme } from './../theme.styles';
export const InputAndLabel = ({
  label,
  name,
  value,
  onChange,
  defaultValue,
}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <div>
        <Input
          name={name}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      </div>
    </Wrapper>
  );
};

export const Wrapper = styled.div``;

export const Input = styled.input`
  border: 0;
  border-radius: 8px;
  padding: 5px;
  font-size: 1rem;
  text-align: center;
  background-color: ${theme.colors.black3};
  color: ${theme.colors.light};
  &:focus {
    outline: 1px solid ${theme.colors.primaryAlt};
  }
  text-transform: uppercase;
  letter-spacing: 0.08rem;
`;

export const Label = styled.label`
  text-transform: uppercase;
  ${theme.font.label}
`;
