import React from 'react';

class OptimizedCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 }; 

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  decrementCounter() {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.counter !== nextState.counter;
  }

  render() {
    return (
      <div className="container m-5 p-3 text-center">
        <h1>Optimized Counter</h1>
        <p>
          <strong>{this.state.counter}</strong>
        </p>
        <div className="m-3">
          <button
            className="btn btn-outline-primary m-2"
            onClick={this.incrementCounter}
          >
            Incrémenter
          </button>
          <button
            className="btn btn-outline-primary m-2"
            onClick={this.decrementCounter}
          >
            Décrémenter
          </button>
        </div>
      </div>
    );
  }
}

export default OptimizedCounter;
