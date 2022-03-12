import React, { useState } from 'react';
import Results from './feature/race-results/results';
import { Pace } from './feature/calculate-pace';
import styled from 'styled-components';

export const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <Container>
      <Button onClick={() => setToggle((prevState) => !prevState)}>{`Show ${
        toggle ? 'Results' : 'Pace Calculator'
      }`}</Button>
      <div style={{ textAlign: 'left' }}>{toggle ? <Pace /> : <Results />}</div>
    </Container>
  );
};

export default App;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
`;

export const Button = styled.button`
  background-color: hsla(217, 95%, 48%, 1);
  background-color: transparent;
  color: hsla(237, 51%, 91%, 1);
  border: 1px solid hsla(217, 95%, 48%, 1);
  font-size: 0.8rem;
  text-transform: uppercase;
  height: 40px;
  width: 200px;
  border-radius: 10px;
  margin-bottom: 30px;
  &:hover {
    background-color: hsla(212, 97%, 54%, 1);
    cursor: pointer;
  }
`;
