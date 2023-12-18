import React from 'react'
import Clock from './components/clock/clock'

const page = () => {
  return (
    <div>
      <h1 className='flex justify-center items-center h-96 text-5xl text-blue-700   '>
       <div className='bg-red-400 px-7 py-7 rounded-full'><Clock/></div> 
      </h1>
    </div>
  )
}

export default page