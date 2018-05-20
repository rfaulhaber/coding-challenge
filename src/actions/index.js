import { getRailsIssues } from '../modules/github';

export const GET_ISSUES_START = 'GET_ISSUES_START';
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const GET_ISSUES_FAILURE = 'GET_ISSUES_FAILURE';

export const ADD_LABEL_FILTER = 'ADD_LABEL_FILTER';
export const REMOVE_LABEL_FILTER = 'REMOVE_LABEL_FILTER';

export function getIssues(issueLabels) {
    return dispatch => {
        dispatch(getIssuesStart());

        return getRailsIssues(issueLabels)
            .then(issues => dispatch(getIssuesSuccess(issues)))
            .catch(error => dispatch(getIssuesFailure(error)));
    };
}

function getIssuesStart() {
    return {
        type: GET_ISSUES_START
    };
}

function getIssuesSuccess(issues) {
    return {
        type: GET_ISSUES_SUCCESS,
        issues
    };
}

function getIssuesFailure(error) {
    return {
        type: GET_ISSUES_FAILURE,
        error
    };
}

function addLabelFilter(label) {
    return {
        type: ADD_LABEL_FILTER,
        label
    };
}

function removeLabelFilter(label) {
    return {
        type: REMOVE_LABEL_FILTER,
        label
    };
}
