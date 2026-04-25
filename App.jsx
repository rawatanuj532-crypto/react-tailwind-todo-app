import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
 <Navbar/>
 <div className="container bg-blue-200 rounded-2xl min-h-[80vh] m-5 p-5 ">
 <div className="addtask">
<h3 className="heading font-bold">Add a Todo</h3>
<input  type="text" className="border p-1 mr-1 min-w-[60vw] bg-amber-50 rounded-md mt-2" placeholder='enter todo..' />
<button  className='bg-blue-600 p-2 py-1 hover:bg-blue-800 rounded-xl'>Add</button>
  </div>
  <div className='yourtodos my-5'>
    <h2 className='font-bold'>Your Todos</h2>
    <div className="tasks flex gap-1">
    <h3>to do task for today</h3>
    <button className='bg-blue-500 p-2 py-1 rounded-xl'>Edit</button>
    <button className='bg-red-500 p-2 py-1 rounded-xl'>Delete</button>
    </div>
  </div>
 </div>
    </>
  )
}

export default App
