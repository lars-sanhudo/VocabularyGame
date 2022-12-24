//import index from ".";
//import { createElement } from 'react';
import ReactDOM from 'react-dom/client';
//import ColumnComponentCenter from './ColumnComponentCenter';

function ItemComponent(props) {
    
    const position = props.position;
    
    
    return(
        <div className="itemClass" id={"item" + props.position + props.columnposition}
        onClick={
            () => {
                if(props.columnposition === 1){
                    alert("Hello, I'm a testing.");
                    const column = document.getElementById("centerComponent");
                    column.appendChild(document.getElementById("item" + props.position + props.columnposition));
                }
                
                

                



            }
        }
        >-{props.content}-</div>
    );

    
}



export default ItemComponent;