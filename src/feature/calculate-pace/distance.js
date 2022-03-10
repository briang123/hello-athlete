import React, { useContext, useCallback } from 'react';
import { updateState } from './pace-reducer';
import { CalculatePaceContext } from './pace-context-provider';
import { InputAndLabel } from '../../components/input-and-label';

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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        padding: '5px 0px',
      }}
    >
      <InputAndLabel
        label="Distance"
        name="traveled"
        value={distance_traveled}
        onChange={updateValue}
      />
      <InputAndLabel
        label="Units"
        name="units"
        value={distance_units}
        onChange={updateValue}
      />
    </div>
  );
};
