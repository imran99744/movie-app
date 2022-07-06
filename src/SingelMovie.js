import React from 'react'
import { useParams } from 'react-router-dom'

function SingelMovie() {
  const { id } = useParams();
  return (
    <>
      <div>This is singel page {id}</div>
    </>
  )
}

export default SingelMovie