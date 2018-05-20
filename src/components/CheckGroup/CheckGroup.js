import React, { Component } from 'react';

export default class CheckGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: []
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event, label) {
        const { checked } = event.target;
        if (this.props.onChange) {
            this.props.onChange(label, checked);
        }
    }

    render() {
        return (
            <div>
                {this.props.labels.map((label, index) => (
                    <div key={index}>
                        <label htmlFor={'input' + index}>
                            <input
                                type="checkbox"
                                id={'input' + index}
                                onChange={event => this.onChange(event, label)}
                            />
                            {label}
                        </label>
                    </div>
                ))}
            </div>
        );
    }
}
