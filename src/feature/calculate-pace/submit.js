import React, { useContext, useCallback } from 'react';
import { calculatePace } from 'athlete-calculations';
import { updateResult } from './pace-reducer';
import { CalculatePaceContext } from './pace-context-provider';
import styled from 'styled-components';

export const Submit = () => {
  const {
    state: {
      time_days,
      time_hours,
      time_minutes,
      time_seconds,
      pace_units,
      distance_traveled,
      distance_units,
      pace_results,
    },
    dispatch,
  } = useContext(CalculatePaceContext);

  const updateValue = useCallback(
    (results) => updateResult(results, 'pace', dispatch),
    [dispatch],
  );

  const handleSubmit = () => {
    const params = {
      distance: { traveled: distance_traveled, units: distance_units },
      time: {
        days: time_days,
        hours: time_hours,
        minutes: time_minutes,
        seconds: time_seconds,
        units: pace_units,
      },
      format: '%M:%SS',
    };

    const results = calculatePace(params);
    return updateValue(results);
  };

  return (
    <>
      <div>
        <SubmitButton name="results" onClick={() => handleSubmit()}>
          Submit
        </SubmitButton>
      </div>
      {pace_results && <pre>{JSON.stringify(pace_results, null, 2)}</pre>}
    </>
  );
};

export const SubmitButton = styled.button`
  background-color: hsla(217, 95%, 48%, 1);
  color: hsla(237, 51%, 91%, 1);
  border: 1px solid hsla(217, 95%, 48%, 1);
  font-size: 1.2rem;
  text-transform: uppercase;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  &:hover {
    background-color: hsla(212, 97%, 54%, 1);
    cursor: pointer;
  }
`;
