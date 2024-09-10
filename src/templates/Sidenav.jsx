/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="w-[20%] h-full p-7 border-r-[1px] border-zinc-600">
      <div className="logo flex gap-3 text-3xl">
        <Link>
          {" "}
          <i className="ri-movie-line text-[#6556cd]"></i>
        </Link>
        <Link className=" font-serif text-white font-semibold">The Movie DB</Link>
      </div>
      <div className="new-feed  px-5">
        <h1 className=" text-white font-medium text-2xl mt-10 mb-7">New Feed</h1>

        {/* links */}
        <div className="links flex flex-col gap-3 mb-5 text-zinc-400 ">
          <Link to={"/trending"} className="flex text-xl rounded-lg duration-300 p-3 hover:bg-[#6556cd] hover:text-white">
            <i className="mr-3 ri-fire-fill"></i>
            <h1>Trending</h1>
          </Link>
          <Link className="flex text-xl rounded-lg duration-300 p-3 hover:bg-[#6556cd] hover:text-white">
            <i className="mr-3 ri-bard-fill"></i>
            <h1>Popular</h1>
          </Link>
          <Link className="flex text-xl rounded-lg duration-300 p-3 hover:bg-[#6556cd] hover:text-white">
            <i className="mr-3 ri-movie-fill"></i>
            <h1>Movies</h1>
          </Link>
          <Link className="flex text-xl rounded-lg duration-300 p-3 hover:bg-[#6556cd] hover:text-white">
            <i className="mr-3 ri-tv-fill"></i>
            <h1>TV Shows</h1>
          </Link>
          <Link className="flex text-xl rounded-lg duration-300 p-3 hover:bg-[#6556cd] hover:text-white">
            <i className="mr-3 ri-team-fill"></i>
            <h1>People</h1>
          </Link>
        </div>
        <hr className="bg-zinc-600  h-[1px] border-none"/>
        {/* site info */}
        <div className="">
          <h1 className=" font-medium text-white text-2xl mt-10 mb-7">
            Website Information
          </h1>
          <Link className=" text-zinc-400 flex text-xl rounded-lg duration-300 p-3 hover:bg-[#6556cd] hover:text-white">
            <i className="mr-3 ri-information-fill"></i>
            <h1>About</h1>
          </Link>
          <Link className=" text-zinc-400 flex text-xl rounded-lg duration-300 p-3 hover:bg-[#6556cd] hover:text-white">
            <i className="mr-3 ri-phone-fill"></i>
            <h1>Contact Us</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
