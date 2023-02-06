import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: new Date(2022, 12, 3, 11, 26, 0),
            finish: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            finish: new Date(),
        });
    }

    getPastTime(start, finish) {
        return finish - start;
    }

    getDaysDiff(timeDiff) {
        return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    }

    getHoursDiff(timeDiff) {
        return Math.floor(timeDiff / (1000 * 60 * 60) - this.getDaysDiff(timeDiff) * 24);
    }

    getMinutesDiff(timeDiff) {
        return Math.floor(timeDiff / (1000 * 60) - (this.getDaysDiff(timeDiff) * 24 * 60 + this.getHoursDiff(timeDiff) * 60));
    }

    getSecondsDiff(timeDiff) {
        return Math.floor(timeDiff / 1000 - (this.getDaysDiff(timeDiff) * 24 * 60 * 60 + this.getHoursDiff(timeDiff) * 60 * 60 + this.getMinutesDiff(timeDiff) * 60));
    }

    refreshStart = () => {
        this.setState({
            start: new Date(),
        });
    }

    render() {
        return (
            <div>
                <h1>
                    You lasted:
                </h1>
                <h1>{
                    `${this.getDaysDiff(this.getPastTime(this.state.start, this.state.finish))} days, 
                     ${this.getHoursDiff(this.getPastTime(this.state.start, this.state.finish))} hours,
                     ${this.getMinutesDiff(this.getPastTime(this.state.start, this.state.finish))} minutes,
                     ${this.getSecondsDiff(this.getPastTime(this.state.start, this.state.finish))} seconds.
                    `
                }
                </h1>
                {this.getDaysDiff(this.getPastTime(this.state.start, this.state.finish)) ?
                    <h2>Good job! Just go ahead!</h2> :
                    <h2>There's not much left! keep going on!</h2>
                }

                <button onClick={this.refreshStart}>
                    Quit smoking
                </button>
            </div>
        )
    }
}

export default Clock;