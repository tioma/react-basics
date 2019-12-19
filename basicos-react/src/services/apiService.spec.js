import ApiService from './apiService';

describe('ApiService', () => {
  describe('getData', () => {
    it('should return data on success response', () => {
      const mockSuccessResponse = { data: [{ id: 'test id' }] };
      const mockJsonResponse = Promise.resolve(mockSuccessResponse);
      const mockFetchResponse = Promise.resolve({
        json: () => mockJsonResponse,
      });
      const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchResponse);
      return ApiService.getData()
        .then((response) => {
          expect(response).toMatchObject(mockSuccessResponse);
          expect(fetchMock).toBeCalledWith('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica');
        });
    });

    it('return err on failure response', () => {
      const mockFailureResponse = { message: 'an error has occured' };
      const mockFetchResponse = Promise.reject(mockFailureResponse);
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchResponse);
      return ApiService.getData()
        .catch((err) => {
          expect(err).toMatchObject(mockFailureResponse);
        });
    });
  });
});
