/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.7) 25%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.7) 75%, rgba(0, 0, 0, 0.8) 100%), 
        url(https://image.tmdb.org/t/p/original${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[60vh] flex flex-col  justify-end p-[6%] mt-2 rounded-md"
    >
      <h1 className="w-[70%] text-5xl font-serif font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[55%] text-xl mt-3 mb-3 text-white">
        {data.overview.slice(0, 200)}...
        <Link className="text-blue-400">more</Link>
      </p>
      <p className="text-white">
        <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
        {data.release_date ? data.release_date : <span>Not-Present</span>}
        <i className="text-yellow-500 ml-5 ri-album-fill"></i>{" "}
        {data.media_type ? data.media_type.toUpperCase() : "Unknown"}
      </p>
      <Link className="bg-[#6556cd] hover:bg-[#5547b2] w-[10%] mt-5 p-4 rounded text-white font-semibold">
        Watch Trailer
      </Link>
    </div>
  );
}

export default Header;