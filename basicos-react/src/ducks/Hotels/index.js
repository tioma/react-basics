import ApiService from '../../services/apiService';

const defaultState = {
  data: [],
  fetching: false,
  requestStatus: null,
};

const types = {
  HOTELS_FETCHING: 'HOTELS/FETCHING',
  HOTELS_FETCH_SUCCESS: 'HOTELS/FETCH_SUCCESS',
  HOTELS_FETCH_FAILURE: 'HOTELS/FETCH_FAILURE',
};

const actions = {
  getHotelsData: () => (dispatch) => {
    dispatch({ type: types.HOTELS_FETCHING });
    return ApiService.getData()
      .then((response) => {
        console.log('en el action');
        console.log(response);
        dispatch({ type: types.HOTELS_FETCH_SUCCESS, payload: response });
        return response;
      })
      .catch(() => {
        dispatch({ types: types.HOTELS_FETCH_FAILURE });
      });
  },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.HOTELS_FETCHING:
      return {
        ...state,
        fetching: true,
      };
    case types.HOTELS_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        fetching: false,
        requestStatus: 'success',
      };
    case types.HOTELS_FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        requestStatus: 'error',
      };
    default:
      return { ...state };
  }
};

export {
  defaultState,
  types,
  actions,
  reducer,
};
