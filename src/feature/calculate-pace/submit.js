import React, { useContext, useCallback } from 'react';
import { calculatePace } from 'athlete-calculations';
import { updateResult } from './pace-reducer';
import { CalculatePaceContext } from './pace-context-provider';
import styled, { css } from 'styled-components';

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
          Submit
        </Button>
      </div>
      {pace_results && <Answer>{JSON.stringify(pace_results, null, 2)}</Answer>}
    </>
  );
};

export const Button = styled.button`
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

const linearGradientCss = () => css`
  border-radius: var(--radius);
  font-style: normal;
  font-weight: 600;
  font-size: var(--baseFontSize);
  line-height: 19px;
  text-align: center;
  cursor: pointer;
  color: var(--lightTextColor);
  border-style: none;
  padding: var(--padding-sm);
  background: var(--linear-gradient-1);
  margin: 5px 0px;
`;

export const Answer = styled.pre`
  background: linear-gradient(
    114.08deg,
    hsla(282, 71%, 45%, 1) 7.95%,
    hsla(217, 95%, 48%, 1) 90.87%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;
