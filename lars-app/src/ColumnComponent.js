import ItemComponent from "./ItemComponent";
import dadosArray from "./DadosArray";



let indexPosition = RandomPosition();

function RandomPosition() {

    let i = 0;
    let indexControl = [[0,0],[0,0],[0,0],[0,0]];
    let ok = false;
    //console.log("Entrei aqui");
    console.log("///////////////////////////////////////");

    while(i < indexControl.length) {
        
        console.log("Entrei aqui");
        //console.log(indexControl.length);
        
        if(indexControl[i][0] == 0){
            indexControl[i][0] = Math.floor(Math.random()*7+1);
            console.log("Random Position: " + indexControl[i][0]);

            //console.log("indexControl: "+indexControl);
            while(ok === false){
                let randomNumber = Math.floor(Math.random()*indexControl.length);
                console.log("RandomNumber: " + randomNumber);
                //console.log(randomNumber);
                if(indexControl[randomNumber][1] == 0){
                    indexControl[randomNumber][1] = indexControl[i][0];
                    ok = true;
                    //console.log("Entrei aqui");
                    //console.log(indexControl);
                    i++;
                }
                
            }
    
            ok = false;
            
        }

       
        //console.log(indexControl);
        
    }

    return (indexControl);
}



console.log(indexPosition);





function ColumnComponent(){
    
    //var [] = numbers;
    
    return(
        <>
        <div className="columnClass">
        <ItemComponent
        content = {"I'm a content."}
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