import './Main.css'
import React, { Component } from "react";

class Main extends Component {
    state= {
        counter: 0,
    };
    addFiveHandler = () => {
        this.setState({counter: this.state.counter + 5})
    };
    addOneHandler = () => {
        this.setState({counter: this.state.counter + 1})
    };
    resetHandler = () => {
        this.setState({counter: 0})
    };
    resetOneHandler = () => { 
        if (this.state.counter <= 5) 
            {
                this.setState({counter: 0})
            }
        else if (this.state.counter > 0) 
        {
            this.setState({counter: this.state.counter - 1})
        }
    };
    resetFiveHandler = () => {
        if (this.state.counter <= 5) 
            {
                this.setState({counter: 0})
            }
        else if (this.state.counter > 0)
            {
            this.setState({counter: this.state.counter - 5})
            } 
    };
    render() {
        return (
            <main>
                <div>
                <div className='header'><h1>{this.state.counter}</h1></div>
                    <div className='buttons'> 
                    <button onClick={this.addFiveHandler}>Add five</button>
                    <button onClick={this.addOneHandler}>Add one</button>
                    <button onClick={this.resetHandler}>Reset</button>
                    <button onClick={this.resetOneHandler}>Reset one</button>
                    <button onClick={this.resetFiveHandler}>Reset five</button>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main