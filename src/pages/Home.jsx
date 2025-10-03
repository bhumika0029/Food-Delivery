import React, { useContext } from 'react'
import Nav from '../components/Nav'
import { category } from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'

const Home = () => {

  let {cate, setCate,input,showcart,setShowcart}=useContext(dataContext);

function filter(category){
  if(category==="All"){
    setCate(food_items);
  }else{
 let newList =food_items.filter((item)=>(item.food_category===category))
    setCate(newList);
  
}
}

  return (
    <div className="bg-slate-100 min-h-screen w-full">
      {/* Navbar */}
      <Nav />

      {!input ? <div className="px-6 mt-6">
        
        <div className="flex flex-wrap justify-center gap-6">
          {category.map((item) => (
            <div
              key={item.id}
              className="w-[140px] h-[140px] bg-white shadow-md rounded-xl flex flex-col justify-center items-center cursor-pointer 
              hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={()=>filter(item.name)  }
            >
              {/* Icon / Image */}
              <div className="text-4xl text-green-500 mb-2">{item.image}</div>   
              {/* Name */}
              <div className="text-base font-semibold text-gray-700">{item.name}</div>
            </div>
          ))}
        </div>
      </div> : null}

      {/* Category Section */}
      
      <div className='w-full flex flex-wrap justify-center gap-10 mt-10 px-6'>
        {cate.map((item) => (
          <Card key={item.food_name} image={item.food_image} price={item.price} name={item.food_name}
           id={item.id} type={item.food_type} />
        ))}
      </div>

     <div className={`w-[36vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl ${showcart ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`} >
  <header className='w-100% flex justify-between items-center mt-23 p-3'>
    <span className='text-green-400 text-[18px] font-semibold '>  Order Items</span>
    <RxCross2 className= ' w-[22px] h-[32px] text-green-400 text-[23px] font-semibold cursor-pointer hover:text-gray-400' onClick={()=>setShowcart(false)}/>
  </header>
  <Card2/>
</div>

    </div>
  )
}

export default Home
