import React, { useContext } from 'react';
import { CalculatePaceContext } from './pace-context-provider';
import {
  Wrapper,
  ResultsWrapper,
  TextGradientWrapper,
  Units,
} from './pace-calculator.styles';

export const Answer = () => {
  const {
    state: { pace_results },
  } = useContext(CalculatePaceContext);

  return (
    <Wrapper>
      <ResultsWrapper>
        <TextGradientWrapper>
          {pace_results?.pace?.formatted ?? '0:00'}
          <Units>minutes/mile</Units>
        </TextGradientWrapper>
      </ResultsWrapper>
    </Wrapper>
  );
};
