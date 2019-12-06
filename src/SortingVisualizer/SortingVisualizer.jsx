import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // array store in state - main array
            array: [],

        };
    }

    // when app loads for the first time, reset array
    componentDidMount() {
        this.resetArray();
    }

    // resets array and iterates 100 times, generates random values from 5-1000
    resetArray() {
        const array = [];
        // TODO: find dims of screen, calculate the upper limit
        for (let i = 0; i < 60; i++) {
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({array});
    }

    mergeSort() {

    }

    quickSort() {

    }

    heapSort() {

    }

    bubbleSort() {

    }

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
            {array.map((value, idx) => (
                <div className="array-bar" 
                key={idx}
                style={{height: `${value}px`}}>
                </div>
            ))}
            {/* Used double arrow for this.context*/}
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}