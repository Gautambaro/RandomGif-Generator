import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag"

const App=()=>{
  return(
    <div className="flex w-screen h-screen flex-col justify-center items-center background">
     <h1 className="bg-white rounded-lg w-full h-7">A RANDOM GIF</h1>
     
     <Random/>

     <Tag/>

    </div>
  )
}
export default App;