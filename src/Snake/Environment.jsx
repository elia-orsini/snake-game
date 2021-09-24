import React from "react";

import './Environment.css';

import Node from './Node';

const NUMBER_COLS = 20;
const NUMBER_ROWS = 20;
const SPEED = 200;

export default class Environment extends React.Component{
    constructor() {
        super();
        this.state = {
            grid: [],
            headPosition: [Math.floor(NUMBER_ROWS/2), Math.floor(NUMBER_COLS/2)],
            direction: 'up',
        }
    };

    sendData = () => {
        this.props.parentCallBack(this.length-2);
    };

    componentDidMount(){
        const grid = getInitialGrid();
        this.setState({grid: grid});

        this.timer = setInterval(() => this.moveSnake(),SPEED);

        this.timers = getInitialTimers();
        this.length = 2;
        this.food = [14,14];
    };


    moveSnake(){

        const {headPosition} = this.state;

        const newPosition = this.state.direction === 'up'
        ? [(headPosition[0]-1), headPosition[1]]
        : this.state.direction === 'down'
        ? [headPosition[0]+1, headPosition[1]]
        : this.state.direction === 'right'
        ? [headPosition[0], headPosition[1]+1]
        : [headPosition[0], (headPosition[1]-1)];

        if (newPosition[0] > NUMBER_ROWS-1 || newPosition[0] < 0 || newPosition[1] > NUMBER_COLS-1 || newPosition[1] < 0){
            this.gameOver();
            return;
        };
        if (parseInt(this.timers[newPosition[0]][newPosition[1]]) > 0) {
            this.gameOver();
        };
        if (newPosition[0] === this.food[0] && newPosition[1] === this.food[1]){
            this.eatFood();
        };
        this.setState({
            headPosition: newPosition,
        });
    };

    eatFood(){
        const x = parseInt(Math.random() * NUMBER_ROWS);
        const y = parseInt(Math.random() * NUMBER_COLS);
        this.length++;
        this.food = [x,y];
    }


    gameOver(){
        clearInterval(this.timer);
        const message = "score: "+(this.length-2);
        alert(message);
        const grid = getInitialGrid();
        const headPosition = [Math.floor(NUMBER_ROWS/2), Math.floor(NUMBER_COLS/2)];
        this.setState({grid: grid, headPosition: headPosition, direction: 'up'});
        this.length = 2;
        this.timers = getInitialTimers();
        this.timer = setInterval(() => this.moveSnake(),SPEED);
    };


    handleClick() {
        const {headPosition} = this.state;

        const direction = this.state.direction === 'up'
        ? 'right'
        : this.state.direction === 'right'
        ? 'down'
        : this.state.direction === 'down'
        ? 'left'
        : 'up';

        const newPosition = direction === 'up'
        ? [(headPosition[0]-1), headPosition[1]]
        : direction === 'down'
        ? [(headPosition[0]+1), headPosition[1]]
        : direction === 'right'
        ? [headPosition[0], headPosition[1]+1]
        : [headPosition[0], headPosition[1]-1];

        if (newPosition[0] === this.food[0] && newPosition[1] === this.food[1]){
            this.eatFood();
        };
        if (newPosition[0] > NUMBER_ROWS-1 || newPosition[0] < 0 || newPosition[1] > NUMBER_COLS-1 || newPosition[1] < 0){
            this.gameOver();
            return;
        };
        if (parseInt(this.timers[newPosition[0]][newPosition[1]]) > 0) {
            this.gameOver();
        };

        this.setState({
            headPosition: newPosition,
            direction: direction
        });

        clearInterval(this.timer);
        this.timer = setInterval(() => this.moveSnake(),SPEED);
    };


    handleKeyPress = (event) => {
        const {headPosition, direction} = this.state;
        const keyPressed = event.keyCode;
        let newDirection;

        if (direction === 'up' || direction === 'down') {
            newDirection = keyPressed === 38
            ? 'left'
            : keyPressed === 40
            ? 'right'
            : direction;
        }
        if (direction === 'left' || direction === 'right'){
            newDirection = keyPressed === 37
            ? 'up'
            : keyPressed === 39
            ? 'down'
            : direction;
        }

        const newPosition = direction === 'up'
        ? [(headPosition[0]-1), headPosition[1]]
        : direction === 'down'
        ? [(headPosition[0]+1), headPosition[1]]
        : direction === 'right'
        ? [headPosition[0], headPosition[1]+1]
        : direction === 'left'
        ? [headPosition[0], headPosition[1]-1]
        : [headPosition[0], headPosition[1]];

        if (newPosition[0] === this.food[0] && newPosition[1] === this.food[1]){
            this.eatFood();
        };
        if (newPosition[0] > NUMBER_ROWS-1 || newPosition[0] < 0 || newPosition[1] > NUMBER_COLS-1 || newPosition[1] < 0){
            this.gameOver();
            return;
        };
        if (parseInt(this.timers[newPosition[0]][newPosition[1]]) > 0) {
            this.gameOver();
        };

        this.setState({
            headPosition: newPosition,
            direction: newDirection
        });

        clearInterval(this.timer);
        this.timer = setInterval(() => this.moveSnake(),SPEED);
    }


    render(){
        const {grid, headPosition} = this.state;

        return (
            <>
                <div className="grid">
                    {grid.map((row, rowIdx) => {
                        return (
                           <div key={rowIdx}>
                               {row.map((node, nodeIdx) => {

                                    const [row, col] = node;
                                    if (row === headPosition[0] && col === headPosition[1]){
                                        this.timers[row][col] += this.length
                                    }
                                    if (this.timers[row][col] > 0){
                                        this.timers[row][col] -= 1
                                    };

                                    let isFood = false;
                                    if (this.food[0] === row && this.food[1] === col){
                                        isFood = true;
                                    };

                                    return (
                                        <>
                                            <Node
                                            col = {col}
                                            row = {row}
                                            snakeTimer = {this.timers[row][col]}
                                            click = {() => {this.handleClick();}}
                                            keyDown = {(e) => this.handleKeyPress(e)}
                                            isFood = {isFood}></Node>
                                        </>
                                    );
                               })}
                            </div> 
                        );
                    })}
                </div>
            </>
        );
    }
}

const getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row<NUMBER_ROWS; row++) {
        const currentRow = [];
        for (let col = 0; col<NUMBER_COLS; col++){
            currentRow.push([col,row]);
        }
        grid.push(currentRow);
    }
    return grid;
};

const getInitialTimers = () => {
    const timers = [];
    for (let row = 0; row<NUMBER_ROWS; row++) {
        const currentRow = [];
        for (let col = 0; col<NUMBER_COLS; col++){
            currentRow.push([0]);
        }
        timers.push(currentRow);
    }
    return timers;
};