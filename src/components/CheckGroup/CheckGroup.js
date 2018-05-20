import React, { Component } from 'react';

export default class CheckGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: []
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        console.log('on change', event.target.checked);
        if (this.props.onChange) {
            this.props.onChange();
        }
    }

    render() {
        return (
            <div>
                {this.props.labels.map((label, index) => (
                    <div key={index}>
                        <label htmlFor={'input' + index}>
                            <input type="checkbox" id={'input' + index} onChange={this.onChange} />
                            {label}
                        </label>
                    </div>
                ))}
            </div>
        );
    }
}
