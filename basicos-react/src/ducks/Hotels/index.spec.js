import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { get } from 'http';
import ApiService from '../../services/apiService';

import {
  defaultState, types, actions, reducer,
} from '.';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Hotels', () => {
  describe('actions', () => {
    describe('.getHotelsData', () => {
      it('should dispatch fetching and success types on success response', () => {
        const mockSuccessResponse = { data: [{ id: 'test id' }] };
        const getDataMock = jest.spyOn(ApiService, 'getData').mockImplementation(() => Promise.resolve(mockSuccessResponse));

        const expectedActions = [
          { type: types.HOTELS_FETCHING },
          { type: types.HOTELS_FETCH_SUCCESS, payload: mockSuccessResponse },
        ];

        const store = mockStore({
          hotels: defaultState,
        });

        return store.dispatch(actions.getHotelsData())
          .then(() => {
            expect(store.getActions()).toMatchObject(expectedActions);
            expect(getDataMock).toBeCalled();
            getDataMock.mockClear();
          });
      });

      it('should return fetching and failure types on failure response', () => {
        const getDataMock = jest.spyOn(ApiService, 'getData').mockImplementation(() => Promise.reject());

        const expectedActions = [
          { type: types.HOTELS_FETCHING },
          { type: types.HOTELS_FETCH_FAILURE },
        ];

        const store = mockStore({
          hotels: defaultState,
        });

        return store.dispatch(actions.getHotelsData())
          .catch(() => {
            expect(store.getActions()).toMatchObject(expectedActions);
            getDataMock.mockClear();
          });
      });
    });
  });

  describe('reducer', () => {
    it(':: HOTELS/FETCHING', () => {
      const action = { type: types.HOTELS_FETCHING };
      expect(reducer(undefined, action)).toMatchObject({
        ...defaultState,
        fetching: true,
      });
    });
  });
});
