export function getRailsIssues(queryLabels) {
    return request('https://api.github.com/repos/rails/rails/issues', { labels: queryLabels });
}

function request(url, urlParams) {
    const queryURL = `${url}?${convertParams(urlParams)}`;
    console.log('queryUrl', queryURL);
    return fetch(queryURL, {
        method: 'GET',
        headers: {
            Accept: 'application/vnd.github.symmetra-preview+json'
        }
    }).then(response => response.json());
}

function convertParams(params) {
    return Object.keys(params).reduce((paramStr, paramKey) => {
        const val = params[paramKey];
        if (Array.isArray(paramKey)) {
            return paramStr.concat(`${paramKey}=${val.join(',')}`);
        } else {
            return paramStr.concat(`${paramKey}=${val}`);
        }
    }, '');
}
