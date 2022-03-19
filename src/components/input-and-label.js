import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { theme } from './../theme.styles';
export const InputAndLabel = ({
  label,
  name,
  value,
  onChange,
  defaultValue,
  width,
}) => {
  const [focus, setFocus] = useState(false);
  const updateFocus = useCallback((value) => setFocus(value), []);

  console.log('input', { label, name, value, defaultValue });
  return (
    <Wrapper focus={focus}>
      <Label>{label}</Label>
      <div>
        <Input
          width={width}
          name={name}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          onFocus={() => updateFocus(true)}
          onBlur={() => updateFocus(false)}
        />
      </div>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  ${({ focus }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.black3};
    border-radius: 10px;
    border: 1px solid ${focus ? theme.colors.primaryAlt : theme.colors.black3};
    padding: 15px;
    width: auto;
  `}/* border: 1px solid red; */
`;

export const Input = styled.input`
  ${({ width }) => css`
    border: 0;
    border-radius: 8px;
    padding: 5px;
    font-size: 3rem;
    height: 3.5rem;
    ${width && `width: ${width}`};
    text-align: center;
    background-color: ${theme.colors.black3};
    color: ${theme.colors.light};
    &:focus {
      outline: none;
    }
    text-transform: uppercase;
    letter-spacing: 0.08rem;
  `}
`;

export const Label = styled.label`
  text-transform: uppercase;
  ${theme.font.label}
`;
