/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function HorizontalCards({ data }) {
  return (
    <div className="w-full h-[40vh]  p-5">
      
      <div className="w-[100%] flex  overflow-y-hidden ">
        {data.map((d, i) => {
          return (
            <div key={i} className="min-w-[15%] rounded-lg mb-5 border-r-1 bg-zinc-900 mr-5">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  d.backdrop_path || d.profile_path
                }`}
                className="w-full rounded-md h-[45%] object-cover"
                alt=""
              />
              <h1 className="text-lg px-2 mt-3 font-serif font-black  text-white">
                {d.name ||
                  d.title ||
                  d.original_name ||
                  d.original_title}
              </h1>
              <p className=" text-sm mt-3 mb-3 px-2 text-white">
                {d.overview.slice(0, 100)}...
                <Link className="text-blue-400">more</Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HorizontalCards;
