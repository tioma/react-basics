const languajeByCountry = {
  AR: 'ES',
  BR: 'PT',
};

const defaultState = {
  country: 'AR',
  languaje: 'ES',
};

const types = {
  CONTEXT_SET_COUNTRY: 'CONTEXT/SET_COUNTRY',
};

const actions = {
  setCountry: (country) => ({ type: types.CONTEXT_SET_COUNTRY, payload: country }),
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.CONTEXT_SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
        languaje: languajeByCountry[action.payload],
      };
    default:
      return { ...state };
  }
};

export {
  defaultState, types, actions, reducer,
};
