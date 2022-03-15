import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const switchFactor = 0.625;
const handleFactor = 0.8;

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export const Switch = ({
  width = 50,
  offColor = 'rgba(255, 255, 255, 0.4)',
  onColor = 'var(--primary)',
  label = null,
  labelWidth = 'auto',
  fontColor = '#000',
  onChange = () => null,
  checked = false,
}) => {
  // const [isOn, setIsOn] = useState(checked);

  const toggleSwitch = () => {
    onChange(!checked);
    //setIsOn((prevState) => !prevState);
  }

  return label ? (
    <Wrapper width={labelWidth}>
      <Label color={fontColor}>{label}</Label>
      <StyledSwitch
        isOn={checked}
        onClick={toggleSwitch}
        width={width}
        offColor={offColor}
        onColor={onColor}
      >
        <Handle layout transition={spring} width={width} />
      </StyledSwitch>
    </Wrapper>
  ) : (
    <StyledSwitch
      isOn={checked}
      onClick={toggleSwitch}
      width={width}
      offColor={offColor}
      onColor={onColor}
    >
      <Handle layout transition={spring} width={width} />
    </StyledSwitch>
  );
};

export const Wrapper = styled.div`
  ${({ width }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: ${width};
    gap: 10px;
  `}
`;

export const Label = styled.label`
  ${({ color }) => css`
    color: ${color};
  `}
`;

export const StyledSwitch = styled(motion.div)`
  ${({ isOn, width, onColor, offColor }) => css`
    width: ${width / switchFactor}px;
    height: ${width}px;
    background-color: ${isOn ? onColor : offColor};
    display: flex;
    justify-content: ${isOn ? 'flex-end' : 'flex-start'};
    border-radius: ${width / 2}px;
    padding: ${width / 10}px;
    cursor: pointer;
  `}
`;

export const Handle = styled(motion.div)`
  ${({ width }) => css`
    width: ${width * handleFactor}px;
    height: ${width * handleFactor}px;
    background-color: white;
    border-radius: ${(width * handleFactor) / 2}px;
  `}
`;
