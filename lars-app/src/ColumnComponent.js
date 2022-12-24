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
        
        let randomPosition = Math.floor(Math.random()*dadosArray.length);
        console.log("Random Position:" + randomPosition);

        if(dadosArray[randomPosition][2] === 0){
            dadosArray[randomPosition][2] = 1;
            indexControl[i][0] = randomPosition; 
            
            console.log("Random Position: " + indexControl[i][0]);

            //console.log("indexControl: "+indexControl);
            while(ok === false){
                let randomNumber = Math.floor(Math.random()*indexControl.length);
                console.log("RandomNumber: " + randomNumber);
                //console.log(randomNumber);
                if(indexControl[randomNumber][1] === 0){
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
console.log(dadosArray);





function ColumnComponent(){
    
    //var [] = numbers;
    
    return(
        <>
        <div className="columnClass">
        <ItemComponent
        content = {dadosArray[indexPosition[0][0]][0]}
        position = "1"
        
        />
        <ItemComponent
        content = {dadosArray[indexPosition[1][0]][0]}
        position = "2"
        />
        <ItemComponent
        content = {dadosArray[indexPosition[2][0]][0]}
        position = "3"
        />
        <ItemComponent
        content = {dadosArray[indexPosition[3][0]][0]}
        position = "4"
        />
        </div>
        </>
    );
}







export default ColumnComponent;