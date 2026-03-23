import {useState} from 'react';
function greet(){
    const [name,setName] =useState("");
    return(
        <div>
            <h1>greeting component</h1>
            <input id="inp" type="text" placeholder="enter your name"></input>
            <button onClick={()=>setName("HELLO "+inp.value)}>CLICK ME</button>
            <h2>{name}</h2>
        </div>
    )
}
export default greet;