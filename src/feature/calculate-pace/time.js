import React, { useContext, useCallback } from 'react';
import { updateState } from './pace-reducer';
import { CalculatePaceContext } from './pace-context-provider';
import { InputAndLabel } from '../../components/input-and-label';

export const Time = () => {
  const {
    state: { time_days, time_hours, time_minutes, time_seconds },
    dispatch,
  } = useContext(CalculatePaceContext);

  const updateValue = useCallback(
    (e) => updateState(e, 'time', dispatch),
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
        label="Days"
        name="days"
        value={time_days}
        onChange={updateValue}
      />
      <InputAndLabel
        label="Hours"
        name="hours"
        value={time_hours}
        onChange={updateValue}
      />
      <InputAndLabel
        label="Minutes"
        name="minutes"
        value={time_minutes}
        onChange={updateValue}
      />
      <InputAndLabel
        label="Seconds"
        name="seconds"
        value={time_seconds}
        onChange={updateValue}
      />
    </div>
  );
};
