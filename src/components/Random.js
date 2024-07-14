import React from "react";
import Spinner from "./Spinner";
import UseGif from "../hook/UseGif";


  const Random=()=>{
   const {fetchData,laoding,gif} = UseGif()
       
        return(
            <div className='w-1/2  bg-green-500 rounded-lg border border-black
            flex flex-col items-center gap-y-5 mt-[15px]'>
              <h1  className='mt-[15px] text-2xl underline uppercase font-bold'>RANDOM GIF</h1>

              {
               laoding? (<Spinner/>):(<img src={gif} alt="not found"/>)
              }

              <button onClick={fetchData()}
              className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">Random</button>
            </div>
        )
        
    }
    
    

export default Random;