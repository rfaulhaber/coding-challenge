import { GET_ISSUES_START, GET_ISSUES_SUCCESS, GET_ISSUES_FAILURE } from '../actions/index';
const initialState = {};

export default function App(state = initialState, action) {
    switch (action.type) {
        case GET_ISSUES_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                issues: action.issues
            });
        case GET_ISSUES_START:
            return Object.assign({}, state, {
                loading: true
            });
        case GET_ISSUES_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error
            });
        default:
            return state;
    }
}
