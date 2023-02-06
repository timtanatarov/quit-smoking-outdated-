import ReactDOM from "react-dom/client";
import React from 'react';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

// let start = new Date(2023, 1, 3, 17, 38, 0);
// let finish = new Date();
// let diff = finish - start;
//
// let daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
// let hoursDiff = Math.floor(diff / (1000 * 60 * 60) - daysDiff * 24);
// let minutesDiff = Math.floor(diff / (1000 * 60) - (daysDiff * 24 * 60 + hoursDiff * 60));
// let secondsDiff = Math.floor(diff / (1000) - (daysDiff * 24 * 60 * 60 + hoursDiff * 60 * 60 + minutesDiff * 60));

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: new Date(2023, 1, 3, 17, 38, 0),
            finish: new Date(),
            diff: this.finish - this.start,
            daysDiff: Math.floor(this.diff / (1000 * 60 * 60 * 24)),
            hoursDiff: Math.floor(this.diff / (1000 * 60 * 60) - this.daysDiff * 24),
            minutesDiff: Math.floor(this.diff / (1000 * 60) - (this.daysDiff * 24 * 60 + this.hoursDiff * 60)),
            secondsDiff: Math.floor(this.diff / (1000) - (this.daysDiff * 24 * 60 * 60 + this.hoursDiff * 60 * 60 + this.minutesDiff * 60)),
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <h1>Красавчик, еще не сломался</h1>
                <h2>You
                    lasted {this.state.daysDiff} days, {this.state.hoursDiff} hours, {this.state.minutesDiff} minutes, {this.state.secondsDiff} seconds.</h2>
            </div>
        )
    }
}

function tick() {
    root.render(<Clock/>);
}

setInterval(tick, 1000);

export default Clock;