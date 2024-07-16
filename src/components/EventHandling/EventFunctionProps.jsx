import React from 'react'
import EventHandling from './EventHandling'

const EventFunctionProps = () => {
    const handleClick =()=>{
        console.log("Button clicked!")
        alert("Button clicked!")
    }

  return (
    
        <EventHandling onButtonClick={handleClick} />
    
  )
}

export default EventFunctionProps