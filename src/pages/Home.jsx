import React from 'react'
import Nav from '../components/Nav'
import { category } from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'

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
      <div className='w-full flex flex-wrap justify-center gap-10 mt-10 px-6'>
        {food_items.map((item) => (
          <Card key={item.food_name} image={item.food_image} price={item.price} name={item.food_name}
           id={item.id} type={item.food_type} />
        ))}
      </div>
    </div>
  )
}

export default Home
