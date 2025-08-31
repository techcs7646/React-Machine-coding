import React from 'react'
import { useState } from 'react'


// let x = 10;
const Counter = () => {
    
    // function updateX() {
    //     console.log("updating x");
    //     x += 1;
    //     console.log("x updated to: ", x);
    // }
    const [x, setX] = useState(10); // state variable for x
    const[count, setCount] =useState(10);
    const [text, setText] = useState("");
    
  return (
    <div>
        <div className='Counter'>
            <span id='counterValue'>X: {x}</span><br />
            <span id='counterValue'>count:{count}</span><br />
            
            <button onClick={() =>setX(x+1)}>Click and update x</button><br />
            <button onClick={() => setCount(count+1)}>click and update count</button><br />
            <input type="text" onChange={(e) =>{setText(e.target.value)}}/><br />


        </div>
    </div>
  )
}

export default Counter

//memory of a component is isolated from other components
// so if you update x in Counter, it won't affect x in other components
//state is a memory that is shared within the component