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
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(5, 1000));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;

        return (
            <>
            {array.map((value, idx) => (
                <div className="array-bar" key={idx}>
                    {value}
                </div>
            ))}
            </>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}