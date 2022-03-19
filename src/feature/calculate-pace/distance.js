import React, { useContext, useCallback } from 'react';
import { updateState } from './pace-reducer';
import { CalculatePaceContext } from './pace-context-provider';
import { InputAndLabel } from '../../components/input-and-label';
import { Wrapper } from './pace-calculator.styles';

export const Distance = () => {
  const {
    state: { distance_traveled, distance_units },
    dispatch,
  } = useContext(CalculatePaceContext);

  const updateValue = useCallback(
    (e) => updateState(e, 'distance', dispatch),
    [dispatch],
  );

  return (
    <Wrapper>
      <InputAndLabel
        label="Distance"
        name="traveled"
        width="175px"
        value={distance_traveled}
        onChange={updateValue}
      />
      <InputAndLabel
        label="Units"
        name="units"
        width="175px"
        value={distance_units}
        onChange={updateValue}
      />
    </Wrapper>
  );
};
