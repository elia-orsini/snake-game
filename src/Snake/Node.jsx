import React from "react";

import './Node.css';

export default class Node extends React.Component{

    render(){
        const {
            col,
            row,
            snakeTimer,
            isFood
        } = this.props;
        const extraClassName = snakeTimer > 0
        ? 'yes-snake'
        : isFood
        ? 'food'
        : '';

        return (
            <>
                <div
                id={`node-${row}-${col}`}
                className={`node ${extraClassName}`}
                onClick = {() => this.props.click() }>
                tabIndex = "0" 
                onKeyDown = {(e) => this.props.keyDown(e) }>
                </div>
            </>
        );
    }
}