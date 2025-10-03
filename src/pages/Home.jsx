import React, { useContext } from "react";
import Nav from "../components/Nav";
import { category } from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";

const Home = () => {
  const { cate, setCate, input, showcart, setShowcart } = useContext(dataContext);
  const items = useSelector((state) => state.cart);

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = 20;
  const tax = (subtotal * 0.5) / 100;
  const total = subtotal + deliveryFee + tax;

  function filter(categoryName) {
    if (categoryName === "All") {
      setCate(food_items);
    } else {
      const newList = food_items.filter((item) => item.food_category === categoryName);
      setCate(newList);
    }
  }

  return (
    <div className="bg-slate-100 min-h-screen w-full">
      {/* Navbar */}
      <Nav />

      {/* Category Buttons */}
      {!input && (
        <div className="px-6 mt-6">
          <div className="flex flex-wrap justify-center gap-6">
            {category.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[140px] h-[140px] bg-white shadow-md rounded-xl flex flex-col justify-center items-center cursor-pointer 
                hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
                onClick={() => filter(item.name)}
              >
                <div className="text-4xl text-green-500 mb-2">{item.image}</div>
                <div className="text-base font-semibold text-gray-700 text-center">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Food Cards */}
      <div className="w-full flex flex-wrap justify-center gap-10 mt-10 px-6">
        {cate.map((item, index) => (
          <Card
            key={`${item.id}-${index}`}
            image={item.food_image}
            price={item.price}
            name={item.food_name}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>

      {/* Cart Sidebar */}
      <div
        className={`w-[36vw] h-full fixed top-0 right-0 bg-white shadow-xl z-50 transform ${
          showcart ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 flex flex-col`}
      >
        <header className="flex justify-between items-center p-4 border-b border-gray-200">
          <span className="text-green-500 text-lg font-semibold">Your Order</span>
          <RxCross2
            className="w-6 h-6 text-green-500 cursor-pointer hover:text-gray-400"
            onClick={() => setShowcart(false)}
          />
        </header>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          {items.length > 0 ? (
            items.map((item, index) => (
              <Card2
                key={`${item.id}-${index}`}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))
          ) : (
            <div className="text-gray-500 text-center mt-10">Your cart is empty</div>
          )}
        </div>

        {/* Cart Summary */}
        <div className="border-t border-gray-200 p-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="font-semibold">₹{deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax</span>
            <span className="font-semibold">₹{tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold mt-2">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
