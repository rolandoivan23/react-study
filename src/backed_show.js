import React from 'react'
import {useParams} from 'react-router-dom'

function BackendShow() {
  const {id} = useParams();
  return (
    <div>BackendShow - {id}</div>
  )
}

export default BackendShow 