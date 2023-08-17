import React from 'react'

function Photo(props) {
  return (
    
        <img style={{display: 'inline-block'}} key={props.id} src={props.thumbnailUrl} alt={props.title} />
    
  )
}

export default Photo