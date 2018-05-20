export function getRailsIssues(queryLabels, page) {
    const params = {};

    if (queryLabels) {
        params.labels = queryLabels;
    }

    params.page = page || 1;
    params.per_page = 100;

    return request('https://api.github.com/repos/rails/rails/issues', params);
}

function request(url, urlParams) {
    let queryURL;

    if (!urlParams) {
        queryURL = url;
    } else {
        queryURL = `${url}?${convertParams(urlParams)}`;
    }

    console.log('queryURL', queryURL);

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
            return paramStr.concat(`${paramKey}=${val.join(',')}&`);
        } else {
            return paramStr.concat(`${paramKey}=${val}&`);
        }
    }, '');
}
