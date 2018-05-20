import React, { Component } from 'react';
import IssueTitleView from '../IssueTitleView/IssueTitleView';
import CheckGroup from '../CheckGroup/CheckGroup';
import './styles.css';

const filterLabels = [
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
];

class IssueList extends Component {
    render() {
        let body;

        if (this.props.issues) {
            body = this.props.issues.map((issue, index) => <IssueTitleView {...issue} key={index} />);
        } else {
            body = <p>Loading issues...</p>;
        }

        return (
            <div className="issues-list">
                <div className="issues-column">
                    {body}
                    <button>Load more issues</button>
                </div>
                <div className="issues-control">
                    <div className="issues-control-panel">
                        <CheckGroup labels={filterLabels} />
                    </div>
                </div>
            </div>
        );
    }
}

export default IssueList;
