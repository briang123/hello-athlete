import React, { useState } from 'react';
import Results from './feature/race-results/results';
import { Pace } from './feature/calculate-pace';
import styled from 'styled-components';
import { theme } from './theme.styles';
// import { MotionSlider } from './components/motion-slider';

export const App = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <Container>
      <ToggleButton
        onClick={() => setToggle((prevState) => !prevState)}
      >{`Show ${toggle ? 'Results' : 'Pace Calculator'}`}</ToggleButton>
      <div style={{ textAlign: 'left' }}>{toggle ? <Pace /> : <Results />}</div>
    </Container>
  );
};

export default App;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const Button = styled.button`
  ${theme.font.button};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.lightest};
  border: 1px solid ${theme.colors.primary};

  text-transform: uppercase;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  &:hover {
    background-color: ${theme.colors.primaryAlt};
    cursor: pointer;
  }
`;

export const ToggleButton = styled(Button)`
  ${theme.font.toggleButton};
  background-color: transparent;
`;

// const MotionSliderContent = () => {
//   const minValue = 200;
//   const maxValue = 400;
//   const [sliderMin, setSliderMin] = useState(minValue);
//   const [sliderMax, setSliderMax] = useState(maxValue);

//   return (
//     <div>
//       <Slider
//         defaultMinBudget={minValue}
//         defaultMaxBudget={maxValue}
//         label={'Slider!'}
//         max={400}
//         setSliderMin={setSliderMin}
//         setSliderMax={setSliderMax}
//       />
//       <input type="hidden" name={'minBudget'} defaultValue={sliderMin} />
//       <input type="hidden" name={'maxBudget'} defaultValue={sliderMax} />
//     </div>
//   );
// };
