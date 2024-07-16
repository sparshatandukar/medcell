import React from 'react'

const EventHandling = ({onButtonClick}) => {
    
  return (
    <div>
        <h1 className='m-2'>Event Handling</h1>
        <button onClick={()=>onButtonClick()} className='bg-blue-800 text-white hover:bg-blue-400 hover:text-black w-24 h-8 m-3 p-1 rounded-md shadow-lg'> Click Me</button>
    </div>
  )
}

export default EventHandling