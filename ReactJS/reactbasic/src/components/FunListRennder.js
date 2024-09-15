function FunListRender()
{
    const fruits = ["apple","Banana","pineapple","Mango","Orange"];
    return(
        <div>
            <ol>
                {
                    fruits.map((item)=><li>{item}</li>)
                }
            </ol>
        </div>
    )
}
export default FunListRender;