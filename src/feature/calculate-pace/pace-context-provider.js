import React, { useReducer, createContext } from 'react';
import { DISTANCE_UNITS, PACE_UNITS } from 'athlete-calculations';
import { paceReducer } from './pace-reducer';
export const CalculatePaceContext = createContext(null);

export const PaceContextProvider = ({ children }) => {
  const initialState = {
    time_days: 0,
    time_hours: 0,
    time_minutes: 20,
    time_seconds: 21,
    pace_units: PACE_UNITS.MILES,
    distance_traveled: 3.1,
    distance_units: DISTANCE_UNITS.MILES,
    pace_results: null,
  };
  const [state, dispatch] = useReducer(paceReducer, initialState);

  return (
    <CalculatePaceContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatePaceContext.Provider>
  );
};
