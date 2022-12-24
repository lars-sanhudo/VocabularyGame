import ItemComponent from "./ItemComponent";

function ColumnComponent(){
    return(
        <>
        <div className="columnClass">
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        </div>
        </>
    );
}

export default ColumnComponent;