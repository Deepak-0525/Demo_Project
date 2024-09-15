import React from "react";
import { PrimeUser,NonPrimeUser,Guest } from "./User";

class ClassCondRend extends React.Component
{
    constructor(){
        super();
        this.state = {user :"guest"};
    }
    render()
    {
        let rendervalue ="";
        if ("primeUser"==this.state.user) {
            rendervalue=<PrimeUser/>;

        }
        else if ("nonPrimeUser"==this.state.user) {
            rendervalue=<NonPrimeUser/>;
            
        }
        else{
            rendervalue=<Guest/>;
        }
        return
        (
            <div>
                <h1>Conditional Rendering</h1>
                {
                    rendervalue
                }
                <button onClick={()=>this.setState({user:"guest"})}>Guest</button>
                <button onClick={()=>this.setState({user:"primeUser"})}>PrimeUser</button>
                <button onClick={()=>this.setState({user:"nonPrimeUser"})}>NonPrimeUser</button>
            </div>
        )
    }
}
export default ClassCondRend;