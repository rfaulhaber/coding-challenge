export function getRailsIssues() {
    return fetch('https://api.github.com/repos/rails/rails/issues', {
        method: 'POST',
        body: JSON.stringify({
            labels: 'actioncable'
        })
    }).then(response => response.json);
}