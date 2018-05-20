import { remove, uniq } from 'lodash-es';
import {
    GET_ISSUES_START,
    GET_ISSUES_SUCCESS,
    GET_ISSUES_FAILURE,
    ADD_LABEL_FILTER,
    REMOVE_LABEL_FILTER
} from '../actions/index';

const initialState = {
    labelFilters: [
        'actioncable',
        'actionmailer',
        'actionpack',
        'actionview',
        'activejob',
        'activemodel',
        'activerecord',
        'activestorage',
        'activesupport',
        'asset pipeline'
    ]
};

export default function App(state = initialState, action) {
    console.log('action', action.type);
    switch (action.type) {
        case ADD_LABEL_FILTER:
            return Object.assign({}, state, {
                labelFilters: uniq(state.labelFilters.concat(action.label))
            });
        case REMOVE_LABEL_FILTER:
            return Object.assign({}, state, {
                labelFilters: remove(state.labelFilters, label => label === action.label)
            });
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
