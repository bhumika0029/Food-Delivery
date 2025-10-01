import React from 'react'
import Nav from '../components/Nav'
import { category } from '../Category'

const Home = () => {
  return (
    <div className="bg-slate-100 min-h-screen w-full">
      {/* Navbar */}
      <Nav />

      {/* Category Section */}
      <div className="px-6 mt-6">
        
        <div className="flex flex-wrap justify-center gap-6">
          {category.map((item) => (
            <div
              key={item.id}
              className="w-[140px] h-[140px] bg-white shadow-md rounded-xl flex flex-col justify-center items-center cursor-pointer 
              hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {/* Icon / Image */}
              <div className="text-4xl text-green-500 mb-2">{item.image}</div>   
              {/* Name */}
              <div className="text-base font-semibold text-gray-700">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
