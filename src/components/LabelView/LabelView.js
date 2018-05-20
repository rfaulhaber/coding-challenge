import React, { Component } from 'react';
import './styles.css';

export default class LabelView extends Component {
    render() {
        const label = this.props.label;
        const fontColor = isTooDark(label.color) ? 'FFFFFF' : '000000';

        return (
            <span className="label-box" style={{ background: `#${label.color}`, color: `#${fontColor}` }}>
                {label.name}
            </span>
        );
    }
}

function isTooDark(color) {
    const rgb = parseInt(color, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return luma < 40;
}
