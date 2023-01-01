import React from 'react'

function Navbar() {
  return (
    <div className='w-full flex flex-row justify-between items-baseline p-4 z-[100] absolute'>
        <h1 className='text-red-600 font-bold text-4xl cursor-pointer'>NETFLIX</h1>
        <div className='flex flex-row '>
            <button className='text-red-600 px-6 py-2 '>Sign In</button>
            <button className='text-white bg-red-600 px-6 py-2 rounded '>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar