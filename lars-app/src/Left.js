import React from "react";
import Teste from "./Teste";


function Left() {
    return(
       <>
        <div id="left" className="leftClass">Left Div</div>
        <React.StrictMode>
            <Teste />
        </React.StrictMode>
        </>
    );
}

export default Left;