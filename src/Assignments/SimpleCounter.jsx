import React from 'react';
import Button from 'react-bootstrap/Button';

class SimpleCounter extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            counter:0,
        }
    }
    handleIncrement = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    handleDecrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    render() {
        return (
            <div>
                <h1>{ this.state.counter}</h1>
                <Button onClick={this.handleIncrement} >+</Button>
                <Button onClick={this.handleDecrement}>-</Button>
            </div>
        )
    }
}


export default SimpleCounter;