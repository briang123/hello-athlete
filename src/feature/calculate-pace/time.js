import React, { useContext, useCallback, useState } from 'react';
import { updateState } from './pace-reducer';
import { CalculatePaceContext } from './pace-context-provider';
import { InputAndLabel } from '../../components/input-and-label';
import { Slider } from '../../components/slider';
import { Wrapper } from './pace-calculator.styles';
import styled from 'styled-components';
import { Switch } from '../../components/switch';
export const Time = () => {
  const {
    state: { time_days, time_hours, time_minutes, time_seconds },
    dispatch,
  } = useContext(CalculatePaceContext);

  const [showDays, setShowDays] = useState(true);
  const [showHours, setShowHours] = useState(true);

  const updateValue = useCallback(
    (e) => updateState(e, 'time', dispatch),
    [dispatch],
  );

  const updateValueFromSlider = useCallback(
    (value) => {
      dispatch({
        type: 'MIN_SEC_CHANGE',
        payload: { object: 'time', name: null, value },
      });
    },
    [dispatch],
  );

  return (
    <>
      <ToggleContainer>
        <Switch
          width={50}
          onColor="var(--primary)"
          offColor="var(--black3)"
          label="Days"
          fontColor="var(--lightest)"
          checked={showDays}
          onChange={(value) => {
            if (value) setShowHours(value);
            setShowDays(value)
          }}
        />
        <Switch
          width={50}
          onColor="var(--primary)"
          offColor="var(--black3)"
          label="Hours"
          fontColor="var(--lightest)"
          checked={showHours}
          onChange={(value) => {
            if (!value) setShowDays(false);
            setShowHours(value);
          }}
        />
      </ToggleContainer>
      <SliderContainer>
        <SliderContent onChange={updateValueFromSlider} />
      </SliderContainer>
      <Wrapper>
        {showDays && (
          <InputAndLabel
            label="Days"
            name="days"
            value={time_days}
            onChange={updateValue}
          />
        )}
        {showHours && (
          <InputAndLabel
            label="Hours"
            name="hours"
            value={time_hours}
            onChange={updateValue}
          />
        )}
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
      </Wrapper>
    </>
  );
};

export const ToggleContainer = styled.div`
  margin: 40px 0px;
  width: 50vw;
  display: flex;
  gap: 20px;
`;
export const SliderContainer = styled.div`
  margin: 40px 0px;
  width: 50vw;
  display: relative;
`;

export const SliderContent = ({ onChange }) => {
  // const h = 0;
  const m1 = 4;
  const s1 = 0;

  const m2 = 30;
  const s2 = 0;

  const minV = m1 * 60 + s1;
  const maxV = m2 * 60 + s2;
  // const minV = m1 * 60 + s1;
  //   const maxV = m2 * 60 + s2;

  const updateState = (value) => {
    const _minutes = Math.floor(value / 60);
    const minutes = _minutes.toFixed(0);
    const _seconds = value % 60;
    const seconds = _seconds < 10 ? `0${_seconds}` : _seconds.toString();
    onChange(`${minutes}:${seconds}`);
  };

  return (
    <Slider
      onChange={updateState}
      min={minV}
      max={maxV}
      defaultValue={m2 - m1 / 2}
    />
  );
};
