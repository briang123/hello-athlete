import React, {
  useContext,
  createContext,
  useCallback,
  useReducer,
} from 'react';
import {
  calculatePace,
  DISTANCE_UNITS,
  PACE_UNITS,
} from 'athlete-calculations';

const CalculatePaceContext = createContext(null);

const buildKeyValue = (type, key, value) => ({ [`${type}_${key}`]: value });

const paceReducer = (state, action) => {
  const {
    payload: { object, name, value },
    type,
  } = action;
  const currState = buildKeyValue(object, name, value);

  console.log('final state > ', {
    ...state,
    ...currState,
  });
  switch (type) {
    case 'VALUE_CHANGE':
      return {
        ...state,
        ...currState,
      };
    default:
      throw new Error('No action');
  }
};

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

export const Pace = () => {
  return (
    <PaceContextProvider>
      <div>
        <Time />
        <Distance />
        <Output />
        <Submit />
      </div>
    </PaceContextProvider>
  );
};

const updateState = (e, type, dispatch) => {
  const { name, value } = e.target;
  dispatch({
    type: 'VALUE_CHANGE',
    payload: { object: type, name, value },
  });
};

const updateResult = (value, type, dispatch) => {
  dispatch({
    type: 'VALUE_CHANGE',
    payload: { object: type, name: 'results', value },
  });
};

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
        <button name="results" onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
      {pace_results && <pre>{JSON.stringify(pace_results, null, 2)}</pre>}
    </>
  );
};

export const Output = () => {
  const {
    state: { pace_units },
    dispatch,
  } = useContext(CalculatePaceContext);

  const updateValue = useCallback(
    (e) => updateState(e, 'pace', dispatch),
    [dispatch],
  );

  return (
    <div style={{ display: 'flex', gap: 5, padding: '5px 0px' }}>
      <InputAndLabel
        label="Pace Per"
        name="units"
        value={pace_units}
        onChange={updateValue}
      />
    </div>
  );
};

export const Distance = () => {
  const {
    state: { distance_traveled, distance_units },
    dispatch,
  } = useContext(CalculatePaceContext);

  const updateValue = useCallback(
    (e) => updateState(e, 'distance', dispatch),
    [dispatch],
  );

  return (
    <div style={{ display: 'flex', gap: 5, padding: '5px 0px' }}>
      <InputAndLabel
        label="Distance"
        name="traveled"
        value={distance_traveled}
        onChange={updateValue}
      />
      <InputAndLabel
        label="Units"
        name="units"
        value={distance_units}
        onChange={updateValue}
      />
    </div>
  );
};

export const InputAndLabel = ({
  label,
  name,
  value,
  onChange,
  defaultValue,
}) => {
  return (
    <>
      <div>{label}</div>
      <div>
        <input
          name={name}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

export const Time = () => {
  const {
    state: { time_days, time_hours, time_minutes, time_seconds },
    dispatch,
  } = useContext(CalculatePaceContext);

  const updateValue = useCallback(
    (e) => updateState(e, 'time', dispatch),
    [dispatch],
  );

  return (
    <div style={{ display: 'flex', gap: 5, padding: '5px 0px' }}>
      <InputAndLabel
        label="Days"
        name="days"
        value={time_days}
        onChange={updateValue}
      />
      <InputAndLabel
        label="Hours"
        name="hours"
        value={time_hours}
        onChange={updateValue}
      />
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
    </div>
  );
};
