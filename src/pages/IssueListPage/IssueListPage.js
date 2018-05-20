import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIssues } from '../../actions/index';
import IssuesList from '../../components/IssueList/IssueList';

class IssueListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLabels: []
        };
    }

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
        issues: state.issues
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getIssues: labels => dispatch(getIssues(labels))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueListPage);
