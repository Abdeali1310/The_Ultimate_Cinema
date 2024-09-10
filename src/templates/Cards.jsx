/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
    <div className="overflow-x-auto w-full h-full px-[3%] bg-[#1f1e24] flex flex-wrap">
      {data.map((d, i) => {
        return (
          <div
            key={i}
            className=" h-[57vh] w-[36vh] min-w-[15%] rounded-lg mb-10 border-r-1 bg-zinc-900 mr-7"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${
                d.backdrop_path || d.profile_path
              }`}
              className="w-full rounded-md h-[60%] object-cover"
              alt=""
            />
            <h1 className="text-lg px-4 mt-3 font-serif font-black  text-white">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className=" text-md mt-3 mb-3 px-4  text-white">
              {d.overview.slice(0, 180)}...
              <Link className="text-blue-400">more</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
