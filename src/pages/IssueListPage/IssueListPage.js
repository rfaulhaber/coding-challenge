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
        issues: getFilteredIssues(state.issues),
        labelFilters: state.labelFilters
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getIssues: labels => dispatch(getIssues(labels))
    };
};

function getFilteredIssues(issues) {
    return issues.filter(issue => {
        const { labels } = issue;

        for (const label of labels) {
            if (this.props.labelFilters.includes(label.name)) {
                return true;
            }
        }

        return false;
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueListPage);
