import React, {useState} from 'react';

const UseState = () => {
    // const [age, set_age] = useState(0);
    // const [sib, set_sib] = useState(0);
    const [state, set_state] = useState({age:0, sib:0});


    // function fun1(event){
    //     set_age(age+1)
    // }
    // function fun2(event){
    //     set_sib(sib+1)
    // }

    function fun3(val){
        if(val === "age"){
            set_state({
                ...state,
                [val]: state[val]+1
            })
        }  
        else{
            set_state({
                ...state,
                [val]: state[val]+1
            })
        }             
        }
    return (
        <div>
            {/* <h3>My current age is {age}</h3>
            <button onClick={fun1}>Get older</button>
            <h4>My siblings {sib}</h4>
            <button onClick={fun2}>get siblings</button> */}
            <h3>My current age is {state.age}</h3>
            <button onClick={()=>fun3("age")}>get older</button>
            <h3>my siblings are {state.sib}</h3>
            <button onClick = {()=>fun3("sib")}>get siblings</button>
        </div>
    )
}

export default UseState