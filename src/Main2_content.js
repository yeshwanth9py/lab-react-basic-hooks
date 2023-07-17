import React, {useState, useContext} from 'react';
import theme_context  from './main_context';
const Main2_content = () => {
    const [show_c, setShow_c] = useState(false);
    const [likes, set_likes] = useState(0);
    const cn = useContext(theme_context);

    const d_style = {
        backgroundColor: cn?'black':'white',
        color: cn?'white':'black'
    }


  return (
    <div style={d_style}>
        {show_c && <p> random paragraph</p>}
        <button onClick={()=>setShow_c((showc)=>!showc)}>content</button>
        <br/>
        {likes}
        <button onClick={()=>{set_likes((liks)=>liks+1)}}>Like</button>
    </div>
  )
}

export default Main2_content