import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            hasName: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.assignName = this.assignName.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    assignName() {
        this.setState({
            hasName: true,
        });
    }

    render() {
        if (!this.state.hasName) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h1>
                            Давайте знакомиться :)
                        </h1>
                        <input type="text" value={this.state.value} onChange={this.handleChange}
                               placeholder='Как Вас зовут?'/>
                    </label>
                    <div>
                        <button onClick={this.assignName}>
                            Отправить!
                        </button>
                    </div>
                </form>
            )
        }
        if (this.state.hasName) {
            return (
                <div>
                    Здравствуйте, {` ${this.state.value}`}
                </div>
            )
        }
    }
}

export default Profile;