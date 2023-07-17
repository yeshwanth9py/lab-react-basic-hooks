import React, {useState, useEffect} from 'react'


const UseEffect = () => {
    const [age, set_age] = useState(0);
    const [sib, set_sib] = useState(0);
    useEffect(()=>{
        if(age!=0){
          alert("age is changed")
        }
        
    },[age])
    
  return (
    <div>
        <h2>my age is {age}</h2>
        <button onClick={()=>set_age((p_age)=>p_age+1)}>older</button>
        <h2>my siblings are {sib}</h2>
        <button onClick={()=>{set_sib((p_sib)=>p_sib+1)}}>increase sib</button>
    </div>
  )
}

export default UseEffect;