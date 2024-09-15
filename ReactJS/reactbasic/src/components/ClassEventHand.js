import React from "react";

class ClassEventHand extends React.Component{

    myFun=()=>{
        alert("Welcome Event ");
    }
    render(){
        return(
            <div>
                <h1>Event Handling </h1>
                <button onClick={this.myFun}>Click</button>
            </div>
        )
    }
}
export default ClassEventHand;