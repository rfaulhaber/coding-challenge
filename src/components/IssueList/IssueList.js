import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLabelFilter, removeLabelFilter } from '../../actions/index';
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
    constructor(props) {
        super(props);

        this.onCheck = this.onCheck.bind(this);
    }

    onCheck(label, checked) {
        if (checked) {
            this.props.addLabelFilter(label);
        } else {
            this.props.removeLabelFilter(label);
        }
    }

    render() {
        let body;

        if (this.props.issues) {
            body = this.props.issues.map((issue, index) => <IssueTitleView {...issue} key={index} />);
        } else {
            body = <p>Loading issues...</p>;
        }

        return (
            <div className="issues-list">
                <div className="issues-column">{body}</div>
                <div className="issues-control">
                    <div className="issues-control-panel">
                        <CheckGroup labels={filterLabels} onChange={this.onCheck} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addLabelFilter: label => dispatch(addLabelFilter(label)),
        removeLabelFilter: label => dispatch(removeLabelFilter(label))
    };
};

export default connect(null, mapDispatchToProps)(IssueList);
