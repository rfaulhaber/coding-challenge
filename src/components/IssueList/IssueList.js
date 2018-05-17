import React, { Component } from 'react';
import IssueTitleView from '../IssueTitleView/IssueTitleView';

class IssueList extends Component {
    render() {
        return <div>{this.props.issues.map(issue => <IssueTitleView {...issue} />)}</div>;
    }
}

export default IssueList;
