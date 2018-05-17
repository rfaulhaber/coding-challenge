import { getRailsIssues } from '../modules/github';

export const GET_ISSUES_START = 'GET_ISSUES_START';
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const GET_ISSUES_FAILURE = 'GET_ISSUES_FAILURE';

export function getIssues(issueLabels) {
    return dispatch => {
        dispatch(getIssuesStart());

        return getRailsIssues(issueLabels)
            .then(issues => getIssuesSuccess(issues))
            .catch(error => getIssuesFailure(error));
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
