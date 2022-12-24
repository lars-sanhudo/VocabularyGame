import ItemComponent from "./ItemComponent";
import dadosArray from "./DadosArray";
import dados from "./DadosArray";



let indexPosition = RandomPosition();


function RandomPosition() {

    let i = 0;
    let indexControl = [[0,0],[0,0],[0,0],[0,0]];
    let ok = false;
    

    while(i < indexControl.length) {
        
        
        
        let randomPosition = Math.floor(Math.random()*dadosArray.length);
        

        if(dadosArray[randomPosition][2] === 0){
            dadosArray[randomPosition][2] = 1;
            indexControl[i][0] = randomPosition; 
            
            

            //console.log("indexControl: "+indexControl);
            while(ok === false){
                let randomNumber = Math.floor(Math.random()*indexControl.length);
                
                //console.log(randomNumber);
                if(indexControl[randomNumber][1] === 0){
                    indexControl[randomNumber][1] = indexControl[i][0];
                    ok = true;
                    
                    i++;
                }
                
            }
    
            ok = false;

        }
            
        

       
        
        
    }

    return (indexControl);
}

for(let k = 0; k< dadosArray.length; k++){
    dadosArray[k][2] = 0;
}



function ColumnComponent(props){
    
    
    
    return(
        <>
        <div className="columnClass">
            <h1>{props.head}</h1>
        <ItemComponent
        content = {dadosArray[indexPosition[0][props.columnPosition]][props.columnPosition]}
        position = "1"
        columnposition  = {props.columnPosition}
        
        />
        <ItemComponent
        content = {dadosArray[indexPosition[1][props.columnPosition]][props.columnPosition]}
        position = "2"
        columnposition  = {props.columnPosition}
        />
        <ItemComponent
        content = {dadosArray[indexPosition[2][props.columnPosition]][props.columnPosition]}
        position = "3"
        columnposition  = {props.columnPosition}
        />
        <ItemComponent
        content = {dadosArray[indexPosition[3][props.columnPosition]][props.columnPosition]}
        position = "4"
        columnposition  = {props.columnPosition}
        />
        </div>
        </>
    );
}


export default ColumnComponent;