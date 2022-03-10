import React, { useState } from 'react';
import Results from './feature/race-results/results';
import { Pace } from './feature/calculate-pace';

export const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div >
      <button onClick={() => setToggle((prevState) => !prevState)}>{`Show ${
        toggle ? 'Results' : 'Pace Calculator'
      }`}</button>
      <div>{toggle ? <Pace /> : <Results />}</div>
    </div>
  );
};

export default App;
