import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Card = ({ name, image,id, price, type }) => {

  let dispatch = useDispatch();
  return (
    <div className="w-[300px] h-[380px] bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100">
      {/* Image */}
      <div className="relative w-full h-[60%] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
        {/* Badge */}
        <div
          className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full shadow-md ${
            type === "non_veg"
              ? "bg-red-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {type}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 truncate">
          {name}
        </h2>

        {/* Price & Type */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-green-600">
            ₹{price}/-
          </span>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            {type === "non_veg" ? (
              <GiChickenOven className="text-red-500 text-lg" />
            ) : (
              <LuLeafyGreen className="text-green-500 text-lg" />
            )}
            <span className="capitalize">{type}</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        onClick={()=>dispatch(AddItem({id:id,name:name,price:price,image:image,type:type,quantity:1 }))}>
          Add to Dish
        </button>
      </div>
    </div>
  );
};

export default Card;
