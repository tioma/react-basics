import {
  defaultState, types, actions, reducer,
} from '.';

describe('Context ducks', () => {
  describe('actions', () => {
    describe('.setCountry', () => {
      it('should return object with type CONTEXT/SET_COUNTRY and payload equal to argument', () => {
        expect(actions.setCountry('sarasa')).toMatchObject({
          type: types.CONTEXT_SET_COUNTRY,
          payload: 'sarasa',
        });
      });
    });
  });

  describe('reducer', () => {
    it(':: default', () => {
      expect(reducer(undefined, { type: 'algo que no matchea' })).toMatchObject({
        ...defaultState,
      });
    });

    it(':: CONTEXT/SET_COUNTRY', () => {
      const action = { type: types.CONTEXT_SET_COUNTRY, payload: 'BR' };
      expect(reducer(undefined, action)).toMatchObject({
        ...defaultState,
        country: action.payload,
        languaje: 'PT',
      });
    });

    it(':: CONTEXT/SET_COUNTRY should put languaje as undefined when country is not listed', () => {
      const action = { type: types.CONTEXT_SET_COUNTRY, payload: 'pais que no tengo listado' };
      expect(reducer(undefined, action)).toMatchObject({
        ...defaultState,
        country: 'pais que no tengo listado',
        languaje: undefined,
      });
    });
  });
});
