import { useState } from "react";

function App() {
  const [color, setColor] = useState("#669bbc");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center 
      inset-x-0 bottom-12 px-2"
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-[#c5dbd9] p-2 rounded-lg px-2">
          <button style={{backgroundColor:"Red"}} 
          className="px-3 rounded-lg text-white"
          onClick={() => setColor("red")}>
            Red
          </button>
          <button style={{backgroundColor:"#3f7b1d"}} 
          className="px-3 rounded-lg text-white"
          onClick={()=> setColor("#3f7b1d")}>
            Green
          </button>
          <button style={{backgroundColor:"#0f1a09"}} 
          className="px-3 rounded-lg text-white"
          onClick={()=> setColor("#000")}>
            Black
          </button>
          <button style={{backgroundColor:"#2b29bb"}} 
          className="px-3 rounded-lg text-white"
          onClick={()=> setColor("#2b29bb")}>
            Blue
          </button>
          <button style={{backgroundColor:"#cfe12c"}} 
          className="px-3 rounded-lg text-black"
          onClick={()=> setColor("#cfe12c")}>
            Yellow
          </button>
          <button style={{backgroundColor:"#de9919"}} 
          className="px-3 rounded-lg text-black"
          onClick={()=> setColor("#de9919")}>
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
