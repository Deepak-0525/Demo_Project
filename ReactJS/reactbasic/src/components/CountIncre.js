import React from "react";

class CountIncre extends React.Component{

    constructor()
    {
        super();
        this.state={count:0};
    }
    Increment =() =>
    {
        this.setState({count:this.state.count+1})
    }
    Decrement =() =>
    {
        this.setState({count:this.state.count-1})
    }
    default =() =>
    {
        this.setState({count:0})
    }
    render()
    {
        return(
            <div class="cover">
                <h1 class="one">Count = {this.state.count}</h1>
                <button onClick={this.Increment}>Add(+)</button>
                <button onClick={this.Decrement}>Sub(-)</button>
                <button onClick={this.default}>Reset</button>
            </div>
        )
    }
}
export default CountIncre;