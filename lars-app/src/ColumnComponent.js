import ItemComponent from "./ItemComponent";
import data from "./dados.json";



function verificated(args) {
    if(args == 1){
        return (data.word1.left);
    }else {
        return "Don't find anything."
    }
}


function ColumnComponent(){
    
    //var [] = numbers;
    
    return(
        <>
        <div className="columnClass">
        <ItemComponent
        content = {verificated(data.word1.index)}
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







export default ColumnComponent;