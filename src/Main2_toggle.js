import React, { useState, createContext } from 'react'
import Main2_content from './Main2_content';
import theme_context from './main_context';

const Main2 = () => {
  const [is_black, set_isblack] = useState(false)

  return (
    <theme_context.Provider value={is_black}>
        <button onClick={()=>{set_isblack(!is_black)}}>Toggle</button>
        <Main2_content/>
    </theme_context.Provider>
  )
}

export default Main2