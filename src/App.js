import React, { useState } from 'react';
import Results from './feature/race-results/results';
import { Pace } from './feature/calculate-pace';
import styled from 'styled-components';

export const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div >
      <Button onClick={() => setToggle((prevState) => !prevState)}>{`Show ${
        toggle ? 'Results' : 'Pace Calculator'
      }`}</Button>
      <div>{toggle ? <Pace /> : <Results />}</div>
    </div>
  );
};

export default App;


export const Button = styled.button`
  background-color: hsla(217, 95%, 48%, 1);
  background-color: transparent;
  color: hsla(237, 51%, 91%, 1);
  border: 1px solid hsla(217, 95%, 48%, 1);
  font-size: .8rem;
  text-transform: uppercase;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  &:hover {
    background-color: hsla(212, 97%, 54%, 1);
    cursor: pointer;
  }
`;