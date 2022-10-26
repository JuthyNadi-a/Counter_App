import './Main.css'
import React, { Component } from "react";
import Button from "./Button"

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
        if (this.state.counter <= 0) 
            {
                this.setState({counter: 0})
            }
        else 
        {
            this.setState({counter: this.state.counter - 1})
        }
    };
    resetFiveHandler = () => {
        if (this.state.counter <= 5) 
            {
                this.setState({counter: 0})
            }
        else 
            {
            this.setState({counter: this.state.counter - 5})
            } 
    };
    render() {
        let circleClass = "";
        if (this.state.counter === 0){
            circleClass = "circle";
        }
        else if (this.state.counter%2 === 0){
            circleClass = "circle-even";
        } else {
            circleClass = "circle-odd";
        }
        return (
            <main>
                <div className='content'>
                <h1 className={circleClass} id='header'>{this.state.counter}</h1>
                    <div className='buttons'> 
                    <Button click = {this.addFiveHandler}>Add five</Button>
                    <Button click = {this.addOneHandler}>Add one</Button>
                    <Button click = {this.resetHandler}>Reset</Button>
                    <Button click = {this.resetOneHandler}>Reset one</Button>
                    <Button click = {this.resetFiveHandler}>Reset five</Button>
                    {/* <button onClick={this.addFiveHandler}>Add five</button>
                    <button onClick={this.addOneHandler}>Add one</button>
                    <button onClick={this.resetHandler}>Reset</button>
                    <button onClick={this.resetOneHandler}>Reset one</button>
                    <button onClick={this.resetFiveHandler}>Reset five</button> */}
                    </div>
                </div>
            </main>
        )
    }
}

export default Main