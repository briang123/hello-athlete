import React, { useContext, useCallback } from 'react';
import { updateState } from './pace-reducer';
import { CalculatePaceContext } from './pace-context-provider';
import { InputAndLabel } from '../../components/input-and-label';

export const Output = () => {
  const {
    state: { pace_units },
    dispatch,
  } = useContext(CalculatePaceContext);

  const updateValue = useCallback(
    (e) => updateState(e, 'pace', dispatch),
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
        label="Pace Per"
        name="units"
        value={pace_units}
        onChange={updateValue}
      />
    </div>
  );
};
