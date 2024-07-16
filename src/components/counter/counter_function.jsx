import React, { useState } from 'react'


const CounterFunction = () => {
    const[count,setCount]= useState(0);

    const increment=() =>{
        setCount(count+1);
    }

    const decrement=() =>{
        setCount(count-1);
    }
    const styles={
        Counter:{
            border :'1px solid black',
            padding:'10px'
            
        }
    }
    
  return (
    <>
        <div id="counter" style={styles.Counter}>
            <h1 style={{color:'blue'}}>Counter Function</h1>
            <h2>Count : {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    </>
  )
}

export default CounterFunction