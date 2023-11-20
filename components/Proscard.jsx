import React from 'react'

function Proscard({ prostitle, prosdesc}) {
  return (
    <div className='card bg-cyan-500 h-[250px] w-[250px] rounded-md text-white p-2'>
      <h2 className='text-3xl'>{prostitle}</h2>
      <br/>
      <p>{prosdesc}</p>
    </div>
  )
}

export default Proscard