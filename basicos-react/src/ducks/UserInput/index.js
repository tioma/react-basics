const defaultState = {
  value: '',
  value2: '',
  value3: '',
  value4: '',
};

const types = {
  USER_INPUT_SET_VALUE: 'USER_INPUT/SET_VALUE',
  USER_INPUT_SET_VALUE2: 'USER_INPUT/SET_VALUE2',
  USER_INPUT_SET_VALUE3: 'USER_INPUT/SET_VALUE3',
  USER_INPUT_SET_VALUE4: 'USER_INPUT/SET_VALUE4',
};

const actions = {
  setValue: (value) => ({ type: types.USER_INPUT_SET_VALUE, payload: value }),
  setValue2: (value) => ({ type: types.USER_INPUT_SET_VALUE2, payload: value }),
  setValue3: (value) => ({ type: types.USER_INPUT_SET_VALUE3, payload: value }),
  setValue4: (value) => ({ type: types.USER_INPUT_SET_VALUE4, payload: value }),
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.USER_INPUT_SET_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case types.USER_INPUT_SET_VALUE2:
      return {
        ...state,
        value2: action.payload,
      };
    case types.USER_INPUT_SET_VALUE3:
      return {
        ...state,
        value3: action.payload,
      };
    case types.USER_INPUT_SET_VALUE4:
      return {
        ...state,
        value4: action.payload,
      };
    default:
      return { ...state };
  }
};

export {
  defaultState, types, actions, reducer,
};
