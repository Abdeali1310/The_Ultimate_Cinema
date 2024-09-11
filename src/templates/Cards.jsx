/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Cards({ data,title }) {
  return (
    <div className="overflow-x-auto w-full h-full px-[3%] justify-center bg-[#1f1e24] flex flex-wrap">
      {data.map((d, i) => {
        return (
          <Link
            to={`/${d.media_type || title}/details/${d.id}`}
            key={i}
            className=" h-[48vh] w-[35vh] min-w-[15%] rounded-lg mb-10 border-r-1 bg-zinc-900 mr-8"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${
                d.backdrop_path || d.profile_path
              }`}
              className="w-full rounded-md h-[60%] object-cover"
              alt=""
            />
            <h1 className="text-xl px-4 mt-3 font-serif font-black  text-white">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            {
              <p className=" text-md mt-3 mb-3 px-4  text-white">
                {d.vote_average && d.vote_average.toFixed(1) + "/10"}
              </p>
            }
          </Link>
        );
      })}
    </div>
  );
}

export default Cards;
