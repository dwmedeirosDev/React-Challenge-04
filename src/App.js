import React, { Component } from "react";

class App extends Component{
    message = () => {
        return <h2>Challenge 04 - Arrow Function</h2>
    }

    double = (num) =>{
        return ( num * 2 )
    }

    render(){
        return(
            <div>
            {this.message()}
            {this.double(500)}
            </div>
        )
    }
}

export default App;
