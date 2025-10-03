import React from "react";
import image1 from "../assets/image1.avif";
import { AiFillDelete } from "react-icons/ai";

const Card2 = () => {
  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white rounded-xl shadow-lg p-4 flex flex-col sm:flex-row items-center gap-4 hover:shadow-2xl transition-shadow duration-300">
      
      {/* Product Image */}
      <div className="w-28 h-28 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
        <img
          src={image1}
          alt="Pancakes"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between h-full w-full">
        <div>
          <h2 className="text-lg sm:text-base md:text-lg font-bold text-gray-800">Pancakes</h2>
          <p className="text-sm sm:text-xs md:text-sm text-gray-500 mt-1">Delicious breakfast item</p>
        </div>

        {/* Bottom Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-2 sm:gap-0">
          
          {/* Quantity Controls */}
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 gap-2">
            <button className="text-gray-600 hover:text-gray-900 font-bold">-</button>
            <span className="text-gray-800 font-medium px-2">1</span>
            <button className="text-gray-600 hover:text-gray-900 font-bold">+</button>
          </div>

          {/* Price */}
          <div className="text-gray-900 font-bold text-lg sm:text-base md:text-lg mt-2 sm:mt-0">
            Rs 499/-
          </div>

          {/* Delete Icon */}
          <AiFillDelete className="text-red-500 w-6 h-6 sm:w-5 sm:h-5 cursor-pointer hover:text-red-600 hover:scale-110 transition-transform mt-2 sm:mt-0" />
        </div>
      </div>
    </div>
  );
};

export default Card2;
