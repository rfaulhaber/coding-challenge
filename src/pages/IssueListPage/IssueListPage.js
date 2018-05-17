import React, { Component } from 'react';
import { connect } from 'react-redux';
import IssuesList from '../../components/IssueList/IssueList';

class IssueListPage extends Component {
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

export default connect(mapStateToProps)(IssueListPage);
