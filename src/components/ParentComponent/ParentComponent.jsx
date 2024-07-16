import React from 'react'
import ChildComponent from '../Child/ChildComponent'

const ParentComponent = ({message}) => {
  return (
    <ChildComponent message={message} />
  )
}

export default ParentComponent