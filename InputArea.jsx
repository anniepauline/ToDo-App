import { useState } from "react";

function InputArea(props)
{
    const [inputText,setInpuText] = useState("");

  function handleOnchange(event){
    const text = event.target.value;
    setInpuText(text);
    console.log(inputText);

  }
    return(
    <div className = "form">
        <input type = "text" value = {inputText} onChange={handleOnchange}/>     
        <button onClick={()=>{
            props.addItem(inputText);
            setInpuText("");}}>
        <span>Add</span>
        </button>
    </div>);    
}

export default InputArea;