//import index from ".";
//import { createElement } from 'react';
//import ReactDOM from 'react-dom/client';
//import ColumnComponentCenter from './ColumnComponentCenter';

let itemControl = null;

let answerCount = 0;
let answerControl = null;

function ItemComponent(props) {
    
   
    
    
    return(
        <div className="itemClass" id={"item" + props.position + props.columnposition}
        onClick={
            () => {
                if(props.columnposition === 1 && itemControl != null){
                    alert("Hello, I'm a testing.");
                    const column = document.getElementById("centerComponent");
                    console.log(column);
                    column.appendChild(document.getElementById("item" + itemControl + 0));
                    column.appendChild(document.getElementById("item" + props.position + props.columnposition));

                    
                    if(props.answer === answerControl){
                        answerCount++;
                    }


                    if(column.childElementCount === 9) {
                        if(answerCount === 4){
                            alert("Corrects asnwers.")
                        } else {
                            alert("Incorrects answers");
                        }
                    }
                   

                   
                    
                }

                if(props.columnposition === 0) {
                    itemControl = props.position;
                    answerControl = props.answer;
                 
                }
                
            }
        }
        >-{props.content}-</div>
    );

    
}



export default ItemComponent;