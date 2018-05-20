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
    const r = (rgb >> 16) & 0xff; // extract red
    const g = (rgb >> 8) & 0xff; // extract green
    const b = (rgb >> 0) & 0xff; // extract blue

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    return luma < 40;
}
