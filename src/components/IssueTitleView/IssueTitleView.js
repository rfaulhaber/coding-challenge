import React, { Component } from 'react';

class IssueTitleView extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        );
    }
}

export default IssueTitleView;
