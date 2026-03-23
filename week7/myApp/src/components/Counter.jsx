import {useState} from 'react';
function counter() {
    const [count,setCount]=useState(0);
    return (
        <div>
            <h1>this is counter component</h1>
            <p>Count : {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )

}
export default counter;