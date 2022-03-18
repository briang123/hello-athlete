import styled from 'styled-components';
import { motion } from 'framer-motion';
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


export const ResultsWrapper = styled.div`
  background: ${theme.colors.black3};
  border-radius: 10px;
  font-size: 4rem;
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const Units = styled.div`
  font-size: 1rem;
`;