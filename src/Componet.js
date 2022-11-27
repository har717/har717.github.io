import { useState } from "react";
let  style = {
    width: "40%",
    height: "100%",
    border: "1px solid black",
    background: "#ababab",
    marginTop: "25px" 
}
function Componet({text,max=40}){
    const [less, setLess] = useState(true);
    if(text.length <= max){
        return <span>{text}</span>
    }
    return (
        <div className="componet" style={style}>
            <span>
                {less ? `${text.substring(0, max)} ...` : text}
                <a href="#" onClick={(evt)=>{
                    evt.preventDefault();
                    setLess(!less);
                }}>{less ? "more" : "less"}</a>
            </span>
        </div>
    );
}
export  default Componet;