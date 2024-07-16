import React from 'react'

const GreetComponent = ({name, caste}) =>{
    // console.log(props);
    const styles={
        div:{
            backgroundColor:'lightgreen',
            border:'1px solid lightgreen',
            margin:'20px',
            borderRadius: '10px',
            paddingLeft: '5px'
        }
    }
    return(
        <div style={styles.div}>
        <h1 className="text-red-600 bg-green-300">Greet Component</h1>
        <p>Hello, {name} {caste}! We are learning props in componnet</p>
        </div>
    )
    
}

export default GreetComponent;