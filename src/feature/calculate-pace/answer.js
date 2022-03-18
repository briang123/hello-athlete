import React, { useContext } from 'react';
import { CalculatePaceContext } from './pace-context-provider';
import { Wrapper, ResultsWrapper, Units } from './pace-calculator.styles';

export const Answer = () => {
  const {
    state: { pace_results },
  } = useContext(CalculatePaceContext);

  return (
    <Wrapper>
      <ResultsWrapper>
        {pace_results?.pace?.formatted}
        <Units>minutes/mile</Units>
      </ResultsWrapper>
    </Wrapper>
  );
};
