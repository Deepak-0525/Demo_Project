import React from "react";

class ClassState extends React.Component
{
    constructor(){
        super();
        this.state = {Name:"Apple"}
    }
    handleClick = () =>
    {
        this.setState({Name : "orange"});
    }

    render(){
        return(
            <div>
                <h1>State</h1>
                <h1>Name : {this.state.Name}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
export default ClassState;