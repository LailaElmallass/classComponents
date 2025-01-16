import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }; 
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

 componentDidCatch(error, info) {
    console.error("Error caught:", error);
    console.error("Error info:", info);
  }

  render() {
    if (this.state.hasError === true) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
