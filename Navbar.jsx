import React from 'react'

const Navbar = () => {
  return (
    <div  className='bg-blue-500 py-1 flex justify-between p-5'>
    <div className="logo text-2xl text-white font-bold">TManager</div>
    <ul className='flex space-x-5'>
        <li className='text-xl text-white cursor-pointer'>Home</li>
        <li className='text-xl text-white cursor-pointer'>About</li>
        <li className='text-xl text-white cursor-pointer'>Contact us</li>
    </ul>
    </div>
  )
}

export default Navbar
