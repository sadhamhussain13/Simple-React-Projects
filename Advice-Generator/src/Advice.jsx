import React, { useEffect } from 'react'
import { useState } from 'react'
import './Advice.css'

export const Advice = () => {
    const [advice, setAdvice] = useState('Get Advice');
    const [count, setCount] =useState(0);

    // useEffect(function(){
    //     getAdvice();
    // }, []);

    async function getAdvice(){
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((dummy) => dummy+1); 
        //  callback - give any variable I gave dummy
    }
  return (
    <div>
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Get Advice</button>
        <p>You have read <span>{count}</span> piece of Advice</p>
        {/* <Counter count = {count} /> */}
    </div>
  )
}

// function Counter(props){
//     return(
//         <p>You have read <span>{props.count}</span> piece of Advice</p>
//     )
// }
