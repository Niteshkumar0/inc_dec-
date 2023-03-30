import React ,{useState}from 'react'

let IncDec = () =>{
    let [number,updateNumber] = useState(0);

    let inc = () =>{
        updateNumber(clicks => clicks + 1)
    }

    let dec = () =>{
        updateNumber(clicks => clicks - 1)
    }
   return(
        <>
            <li>
            <button onClick={dec}>decrement</button>
            <button onClick={inc}> increment </button>
            </li>
            <div>
                <p>
                    {number}
                </p>
            </div>
        </>
   );
}
export default IncDec