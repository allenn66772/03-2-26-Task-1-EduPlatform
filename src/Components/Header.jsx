import React from 'react'
import { LuGraduationCap } from "react-icons/lu";

function Header() {
  return (
  <>
  <div className="w-full h-14 flex items-center relative">
    
    {/* logo */}
    <div className="absolute left-36 text-2xl flex font-bold gap-1">
     <span className='text-3xl text-blue-500 font-bold'><LuGraduationCap /></span>  EduPlatform
    </div>

    {/* Center  div*/}
    <div className="mx-auto">
      <ul className="flex gap-5">
        <li>Home</li>
        <li>Course</li>
        <li>My Learning</li>
        <li>Test Practice</li>
        <li>About</li>
      </ul>
    </div>

    {/* button div */}
    <div className="absolute right-18 flex gap-5">
      <button className='w-18 h-9 rounded-xl text-center border border-gray-100 shadow shadow-gray-200'>Login</button>
      <button className='w-18 h-9 rounded-xl text-center border border-gray-100 shadow shadow-gray-200 text-white  bg-blue-500 hover:bg-white hover:text-blue-500'>Sign up</button>
    </div>

  </div>
</>

  )
}

export default Header