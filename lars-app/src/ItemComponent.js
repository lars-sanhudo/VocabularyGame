
function ItemComponent(props) {
    
    const position = props.position;
    
    
    return(
        <div className="itemClass"
        onClick={
            () => {alert("Hello, I'm a testing.")}
        }
        >-{props.content}-</div>
    );

    
}



export default ItemComponent;