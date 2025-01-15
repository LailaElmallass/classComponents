import React from 'react'

class ErrorBoundary extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = { hasError : false };
    }

    getDerivedStateFromProps(props,state)
    {
        return this.setState({ hasError:true })
    }

    componentDidCatch(err, info)
    {
        console.log("Error caught: ", error);
        console.log("Error info: ", info);
    }
 
    render ()
    {
        if (this.state.hasError == true)
        {
            return (
                <h2>Something went wrong</h2>
              )
        }
        
    }
}

export default ErrorBoundary