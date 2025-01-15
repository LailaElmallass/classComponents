import React from 'react';
import ErrorBoundary from './ErrorBoundary';

class Counter extends React.Component {

    constructor() {
        super();
        this.state = { counter: 0, prevCounter: null };
    }

    Increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    Decrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    }

    Restart = () => {
        this.setState({ counter: 0, prevCounter: 0 });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return prevState.counter;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== this.state.counter) {
            this.setState({ prevCounter: snapshot });
        }
    }

    render() {
        return (
            <div className='Container border border-dark text-center'>
                <h1 className='text-center'>Counter</h1>
                {
                    if(this.state.counter == 5) {
                        <ErrorBoundary/>
                    }
                    else{
                        <div>
                            <p><strong>{this.state.counter}</strong></p>
                            <div>
                                <button onClick={this.Increment} className='btn btn-outline-success m-2'>
                                    Increment
                                </button>
                                <button onClick={this.Restart} className='btn btn-outline-success m-2'>
                                    Restart
                                </button>
                                <button onClick={this.Decrement} className='btn btn-outline-success m-2'>
                                    Decrement
                                </button>
                            </div>
                            
                            <div className='m-2'>
                                {this.state.prevCounter !== null && (
                                    <p>Le compteur est passé de {this.state.prevCounter} à {this.state.counter};</p>
                                )}
                            </div>
                        </div>
                    }
                }
                
            </div>
        );
    }

}

export default Counter;
