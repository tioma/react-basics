import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

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
        const mockJsonResponse = Promise.resolve(mockSuccessResponse);
        const mockFetchResponse = Promise.resolve({
          json: () => mockJsonResponse,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchResponse);

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
          });
      });

      it('should return fetching and failure types on failure response', () => {
        const mockFetchResponse = Promise.reject();
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchResponse);

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
          });
      });
    });
  });
});
