export const buildKeyValue = (type, key, value) => ({
  [`${type}_${key}`]: value,
});

export const updateState = (e, type, dispatch) => {
  const { name, value } = e.target;
  dispatch({
    type: 'VALUE_CHANGE',
    payload: { object: type, name, value },
  });
};

export const updateResult = (value, type, dispatch) => {
  dispatch({
    type: 'VALUE_CHANGE',
    payload: { object: type, name: 'results', value },
  });
};

export const paceReducer = (state, action) => {
  const {
    payload: { object, name, value },
    type,
  } = action;
  const currState = buildKeyValue(object, name, value);
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
