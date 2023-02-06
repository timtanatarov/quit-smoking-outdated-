import React from 'react';

class Facts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 3000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState(
            function () {
                return {
                    counter: this.state.counter + 1,
                }
            }
        );
        if (this.state.counter > this.props.dataFacts.length - 2) {
            this.setState(
                function () {
                    return {
                        counter: 0,
                    }
                }
            )
        }
    }

    render() {
        const dataFacts = this.props.dataFacts;
        const factsList = dataFacts.map((value) => <h2 key={value.toString()}>{value}</h2>);
        return (
            <div>
                <h1>
                    Немного фактов, которые Вам помогут:
                </h1>
                <div>
                    {factsList[this.state.counter]}
                </div>
            </div>
        )
    }
}

export default Facts;