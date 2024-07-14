import React, { useState } from "react";
import Spinner from "./Spinner";
import UseGif from '../hook/UseGif';

const Tag=()=>{
    const [tag, setTag] =useState('car');
    const{gif, loading, fetchData}=UseGif(tag)
    return(
        <div className=" w-1/2 flex flex-col bg-green-500 justify-center items-center">
            <h1 className="text-white leading-6">RANDOM GIF{tag}</h1>
            {
                loading?(<Spinner/>):(<img src={gif} alt="not found"/>)
            }
            <input
            type="text  "
            value={tag}
            onChange={(event)=>setTag(event.target.value)}

            />
            <button onChange={()=>fetchData(tag)}></button>
        </div>
    )
}
export default Tag;