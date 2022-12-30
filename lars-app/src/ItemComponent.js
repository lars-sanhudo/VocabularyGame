//import index from ".";
//import { createElement } from 'react';
//import ReactDOM from 'react-dom/client';
//import ColumnComponentCenter from './ColumnComponentCenter';

let itemControl = null;

let answerCount = 0;
let answerControl = null;
let colorNumber = 0;
//2f4858-33658a-86bbd8-f6ae2d-f26419

function color(a){
    
    if(a === 0){
        return "red"
    } else if(a === 1){
        return "blue";
    } 
}

function colorControl(b) {
    if(b===0){
        return "green";
    } else if(b === 1){
        return "yellow";
    } else if(b === 2){
        return "brown";
    } else {
        return "gray";
    }
}

function ItemComponent(props) {
    
    return(
        <div className="itemClass" id={"item" + props.position + props.columnposition}
        style = {{backgroundColor:color(props.columnposition)}}
        onClick={
            () => {
                if(props.columnposition === 1 && itemControl != null){
                    
                    alert("Hello, I'm a testing.");
                    const column = document.getElementById("centerComponent");
                    console.log(column);
                    column.appendChild(document.getElementById("item" + itemControl + 0));
                    column.appendChild(document.getElementById("item" + props.position + props.columnposition));
                    document.getElementById("item" + itemControl + 0).style.backgroundColor = colorControl(colorNumber);
                    document.getElementById("item" + props.position + props.columnposition).style.backgroundColor = colorControl(colorNumber);
                    colorNumber++;

                    
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