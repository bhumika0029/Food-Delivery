import React, {  useContext, useEffect, useState } from 'react'
import { IoFastFoodSharp } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { HiMenuAlt3, HiX } from "react-icons/hi";  // menu + close icons
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  let {input,setInput,cate,setCate,showcart,setShowcart}=useContext(dataContext);
  useEffect(()=>{
  let newList=  food_items.filter((item)=>(item.food_name.toLowerCase().includes(input.toLowerCase())))
  setCate(newList);
  },[input]);

  return (
    <div className="w-full h-[80px] bg-white shadow-md flex justify-between items-center px-6 md:px-10 sticky top-0 z-50">
      
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
        <div className="w-[50px] h-[50px] bg-green-100 flex justify-center items-center rounded-xl shadow-md">
          <IoFastFoodSharp className="w-[26px] h-[26px] text-green-600" />
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-green-600">Foodies</h1>
      </div>

      {/* Search Bar (hidden on small screens) */}
      <form className="hidden md:flex w-[45%] h-[45px] bg-gray-50 rounded-full shadow-inner items-center px-4 hover:shadow-lg transition-shadow"
      onSubmit={(e)=>e.preventDefault()
      }
      >
        <GoSearch className="text-xl text-green-600 mr-3" />
        <input 
          type="text" 
          placeholder="Search for dishes, cuisines..." 
          className="w-full h-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm md:text-base"
          onChange={(e)=>setInput(e.target.value)} value={input}
        />
      </form>

      {/* Right Side (Cart + Menu) */}
      <div className="flex items-center gap-4">
        {/* Cart */}
        <div className="relative flex items-center cursor-pointer hover:scale-110 transition-transform">
          <div className="w-[50px] h-[50px] bg-green-100 flex justify-center items-center rounded-xl shadow-md"
          onClick={()=>setShowcart(true)}>
            <HiMiniShoppingBag className="w-[24px] h-[24px] text-green-600" />
          </div>
          <span className="absolute -top-1 -right-1 bg-green-600 text-white w-[18px] h-[18px] text-[11px] font-medium rounded-full flex justify-center items-center shadow-md">
            0
          </span>
        </div>

        {/* Hamburger Menu (only on mobile) */}
        <div className="md:hidden flex items-center cursor-pointer">
          {menuOpen ? (
            <HiX 
              className="w-7 h-7 text-green-600"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <HiMenuAlt3 
              className="w-7 h-7 text-green-600"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-lg flex flex-col items-start px-6 py-4 md:hidden animate-slide-down">
          <form className="w-full h-[45px] bg-gray-50 rounded-full shadow-inner flex items-center px-4 mb-3">
            <GoSearch className="text-xl text-green-600 mr-3" />
            <input 
              type="text" 
              placeholder="Search for dishes, cuisines..." 
              className="w-full h-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
            />
          </form>
          <button className="w-full text-left py-2 px-2 text-gray-700 font-medium hover:text-green-600">Home</button>
          <button className="w-full text-left py-2 px-2 text-gray-700 font-medium hover:text-green-600">Categories</button>
          <button className="w-full text-left py-2 px-2 text-gray-700 font-medium hover:text-green-600">Orders</button>
          <button className="w-full text-left py-2 px-2 text-gray-700 font-medium hover:text-green-600">Profile</button>
        </div>
      )}
    </div>
  )
}

export default Nav
