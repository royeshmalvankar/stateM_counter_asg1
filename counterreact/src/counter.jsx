import { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(0)
  
    return (
      <>
      <div className='container' style={{display:"flex",justifyContent:"center"}}>
        <div className='App' style={{backgroundColor:"lightblue",height:"200px",width:"400px",padding:"20px",textAlign:"center"}}>
          <h1>Counter-React</h1>
          <h1> count is {count}</h1>
          <button onClick={() => setCount((count) => count + 1)}>Increase Count</button>
          <button onClick={() => setCount((count) => count - 1)}>Decrease Count</button>
        </div>
      </div>
      </>
      )
    }
    export default Counter