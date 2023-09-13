import { useEffect, useState } from "react";

const AsyncAwait = () => {
    const [data,setData]=useState()

    useEffect(()=>{
        (async ()=>{
            const response= await fetch('https://jsonplaceholder.typicode.com/users')
            const json= await response.json()
            setData(json)
           })()
    })
      
    return (
        <>
            <div>{console.log(data)}</div>
        </>
    );
};

export default AsyncAwait;

