import React from 'react';
import * as sortingAlgorithms from '../SortingAlgorithms/sortingAlgorithms.js';
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
        const sorted = sortingAlgorithms.mergeSort(this.state.array);
    }

    quickSort() { }

    heapSort() { }

    bubbleSort() { }

    testSortingAlgorithms() {
        // creates 100 arrays
        for (let i = 0; i < 100; i++) {
            const array = [];
            const bound = randomIntFromInterval(0, 1000)
            // every array random length between 0 and 1000
            for (let j = 0; j < bound; j++) {
                // push random integer from -1000 to 1000
                array.push(randomIntFromInterval(-1000, 1000));
            }
            // js build in sort
            const jsSortedArray = array.slice().sort((a,b) => a - b);
            // mergeSort
            const sorted = sortingAlgorithms.mergeSort(array.slice());
            console.log(arraysAreEqual(jsSortedArray, sorted));
        }
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
            <button onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithms</button>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}