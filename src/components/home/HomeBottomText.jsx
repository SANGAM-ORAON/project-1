import React from 'react'
import {Link} from 'react-router-dom'


const HomeBottomText = () => {
  return (
   <div className="font-[font2] uppercase text-center flex justify-center items-center space-x-4 overflow-x-auto p-4">
  <Link
    to="/work"
    className="hover:text-lime-300 border-4 rounded-full 
               px-6 py-2 
               text-3xl sm:text-5xl md:text-7xl lg:text-8xl 
               transition-colors duration-200 shrink-0"
  >
    WORK
  </Link>

  <Link
    to="/agency"
    className="hover:text-lime-300 border-4 rounded-full 
               px-6 py-2 
               text-3xl sm:text-5xl md:text-7xl lg:text-8xl 
               transition-colors duration-200 shrink-0"
  >
    AGENCY
  </Link>
</div>

  )
}

export default HomeBottomText

