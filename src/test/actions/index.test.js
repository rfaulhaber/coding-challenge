import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as Actions from '../../../src/actions';

describe('action creators', () => {
    const mockResponse = [
        {
            name: 'test issue 1',
            label: 'testlabel'
        },
        {
            name: 'test issue 2',
            label: 'testlabel'
        }
    ];
    const mockModule = {
        getRailsIssues: jest.fn().mockImplementation(() => Promise.resolve(mockResponse))
    };

    const mockStore = configureMockStore([thunk.withExtraArgument(mockModule)]);

    describe('getIssues', () => {
        it('should dispatch its corresponding actions correctly', () => {
            const expectedActions = [
                { type: Actions.GET_ISSUES_START },
                { type: Actions.GET_ISSUES_SUCCESS, issues: mockResponse }
            ];
            const store = mockStore({});

            return store.dispatch(Actions.getIssues()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});
