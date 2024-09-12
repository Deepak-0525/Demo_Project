function FunEventHand()
{
    function myFun()
    {
        alert("Welcome!");

    }
    return(
        <div>
            <h1>Event Handling</h1>
            <button onClick={myFun}>Click</button>
        </div>
    )
}
export default FunEventHand;