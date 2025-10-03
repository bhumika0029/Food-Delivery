import React, { createContext, useState } from 'react' 
import { food_items } from '../food';

export const dataContext=createContext();

const UserContext = ({children}) => {

      let [cate, setCate] = useState(food_items);
    let [input,setInput]=useState("");
    let [showcart,setShowcart]=useState(false);

let data={
    input,
    setInput,
    cate,
    setCate,
    showcart,
    setShowcart
}

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext