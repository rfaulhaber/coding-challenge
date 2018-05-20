import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filter } from 'lodash-es';
import { getIssues } from '../../actions/index';
import IssuesList from '../../components/IssueList/IssueList';

class IssueListPage extends Component {
    componentDidMount() {
        this.props.getIssues();
    }

    render() {
        return (
            <div>
                <IssuesList issues={this.props.issues} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        issues: getFilteredIssues(state.issues, state.labelFilters)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getIssues: labels => dispatch(getIssues(labels))
    };
};

function getFilteredIssues(issues, labelFilters) {
    if (labelFilters.length === 0) {
        return issues;
    } else {
        return issues.filter(issue => {
            const { labels } = issue;

            for (const label of labels) {
                if (labelFilters.includes(label.name)) {
                    return true;
                }
            }

            return false;
        });
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueListPage);
