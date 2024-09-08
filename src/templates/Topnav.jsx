/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Topnav() {
    const [query,setquery] = useState("");
    
    
  return (
    <div className="w-[80%] h-full ">
      <div className="navbar pt-3 relative justify-start ml-[30%] flex gap-5 text-zinc-300 ">
        <i class="ri-search-line text-3xl flex items-center"></i>
        <input
          type="search"
          className="px-5 outline-none border-none bg-transparent text-xl w-[80%] h-[4.5vh] rounded-lg"
          name="search"
          id="search"
          placeholder="Search anything"
          onChange={(e)=>setquery(e.target.value)}
          value={query}
        />

        {/* query box */}
        <div className="absolute w-[80%] mt-1 max-h-[50vh] left-[8%] bg-zinc-300 top-[90%] rounded-md overflow-auto">
          {/* <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-7  border-b-[1px] flex justify-start items-center">
            <img src="" alt="" />
            <span>Hello world</span>
          </Link> */}
          
        </div>
      </div>
    </div>
  );
}

export default Topnav;
