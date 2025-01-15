import React from 'react'

class Timer extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = { timer : 0 }
        this.Timer = null;
    }

    componentDidMount()
    {
        this.Timer = setInterval(() =>{
            this.setState({timer : this.state.timer + 1})
        },1000)
   
    }

    componentWillUnmount() 
    {
        clearInterval(this.Timer);
    }
 
    render()
    {
        return (
            <div className='container m-3 border border-dark'>
                <h1>Timer</h1>
                <div>{this.state.timer} secondes</div>

            </div>
          )
    }
}

export default Timer