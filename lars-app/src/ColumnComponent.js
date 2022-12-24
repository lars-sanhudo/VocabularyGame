import ItemComponent from "./ItemComponent";
import data from "./dados.json";

function ColumnComponent(){
    
    var [] = numbers;
    
    return(
        <>
        <div className="columnClass">
        <ItemComponent
        content = {data.word1.left}
        position = "1"
        
        />
        <ItemComponent
        content = "I'm a content."
        position = "2"
        />
        <ItemComponent
        content = "I'm a content."
        position = "3"
        />
        <ItemComponent
        content = "I'm a content."
        position = "4"
        />
        </div>
        </>
    );
}


function Random(numbers) {
    let numbers  = this.numbers;
}



export default ColumnComponent;