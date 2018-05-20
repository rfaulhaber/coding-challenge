import React, { Component } from 'react';
import LabelView from '../LabelView/LabelView';
import './styles.css';

class IssueTitleView extends Component {
    render() {
        return (
            <div>
                <div className="title-text">
                    {this.props.title}
                    <span>
                        {this.props.labels.length > 0 &&
                            this.props.labels.map((label, index) => <LabelView label={label} key={index} />)}
                    </span>
                </div>
            </div>
        );
    }
}

export default IssueTitleView;
