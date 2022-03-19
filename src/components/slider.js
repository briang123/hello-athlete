import React from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';
import { theme } from './../theme.styles';
const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 35px;
`;

const StyledThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -35px;
  height: 100px;
  width: 100px;
  text-align: center;
  background-color: var(--primary);
  color: var(--lightest);
  border-radius: 50%;
  font-family: var(--font-family);
  font-size: 1.2rem;
  font-weight: bold;
  border: 3px solid ${theme.colors.light};
  cursor: grab;
  &:focus {
    outline: none;
  }
`;

const Thumb = (props, { valueNow }) => {

  // const totalMinutes = hours * MINUTES_PER_HOUR + minutes * 1 + seconds / SECONDS_PER_MINUTE

  const _minutes = Math.floor(valueNow / 60);
  const minutes = _minutes.toFixed(0);
  const _seconds = valueNow % 60;
  const seconds = _seconds < 10 ? `0${_seconds}` : _seconds.toString();
  // const seconds = _seconds < 10 ? `0${_seconds}` : _seconds.toString();

  // console.log({ _minutes, minutes, _seconds, seconds });
  return (
    <StyledThumb {...props}>
      {minutes}:{seconds}
    </StyledThumb>
  );
};

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) => {
    return props.index > 0 ? `var(--black3)` : `var(--primary)`;
  }};
  border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

export const Slider = ({ onChange, onAfterChange, min, max, defaultValue }) => {
  return (
    <StyledSlider
      min={min}
      max={max}
      onAfterChange={onAfterChange}
      onChange={onChange}
      defaultValue={[defaultValue]}
      renderTrack={Track}
      renderThumb={Thumb}
    />
  );
};
