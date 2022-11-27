// useState
import './App.css';
import {useState} from "react";
function App() {
  const [value, setValue] = useState("text");
  return (
    <div className="App" > 
      <i> // 1. useState</i>
      <h1>{value}</h1>
      <input type="text" onChange={(evt)=>{
        setValue(evt.target.value);
        value = evt.target.value;
      }}/>
    </div>
  );
}

export default App;
