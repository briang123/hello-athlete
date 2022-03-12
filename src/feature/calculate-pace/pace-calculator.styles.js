import styled from 'styled-components';
import { theme } from './../../theme.styles';

export const Button = styled.button`
  ${theme.font.button};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.lightest};
  border: 1px solid ${theme.colors.primary};

  text-transform: uppercase;
  height: 50px;
  width: 250px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background-color: ${theme.colors.primaryAlt};
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 5px 0px;
  width: 300px;
`;

export const Answer = styled.pre`
  ${theme.gradient.color1}
`;
