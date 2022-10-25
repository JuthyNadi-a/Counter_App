import './Main.css'
import React, { Component } from "react";

class Main extends Component {
    state= {
        counter: 0,
    };
    addOneHandler = () => {
        this.setState({counter: this.state.counter + 1})
    };
    render() {
        return (
            <main>
                <div>
                <div className='header'><h1>{this.state.counter}</h1></div>
                    <div className='buttons'> 
                    <button>Add five</button>
                    <button onClick={this.addOneHandler}>Add one</button>
                    <button>Reset</button>
                    <button>Reset one</button>
                    <button>Reset five</button>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main