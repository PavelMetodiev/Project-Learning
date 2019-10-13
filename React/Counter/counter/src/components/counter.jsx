import React, { Component } from 'react';

class  Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initialCount
        };

        this.increment = this.increment.bind(this);
        //this.decrement = this.decrement.bind(this);
    };

    static getDerivedStateFromProps(props, state) {
        return {}
    }

    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));

       // this.setState({
       //     count: this.state.count + 1
       // });
    }

    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }));

       //this.setState({
       //    count: this.state.count - 1
       //});
    }

    render() {
        const { count } =this.state;

        return (
            <div>
                <span>{count}</span>
                <br />
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    };

    componentDidMount() {
        console.log('Counter is ready.')
    }
    

}

export default Counter;