import { useEffect } from "react";
import { useState } from "react";


const PromiceApi = () => {
    const [data,setData]=useState()

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res=>res.json())
            .then(json=>setData(json))
    })

        

    return (
        <>

        <div>{JSON.stringify(data)}</div>
          
        </>
        
    );
   
};

export default PromiceApi;

