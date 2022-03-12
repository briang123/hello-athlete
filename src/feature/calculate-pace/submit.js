import React, { useContext, useCallback } from 'react';
import { calculatePace } from 'athlete-calculations';
import { updateResult } from './pace-reducer';
import { CalculatePaceContext } from './pace-context-provider';
import { Button, Answer } from './pace-calculator.styles';

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
        <Button name="results" onClick={() => handleSubmit()}>
          Calculate Pace
        </Button>
      </div>
      {pace_results && <Answer>{JSON.stringify(pace_results, null, 2)}</Answer>}
    </>
  );
};
