/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Loading from "../utils/Loading";
import noimage from "../assets/noimage.jpg";

function HorizontalCards({ data,title }) {
  return data ? (
    <div className="w-full p-5">
      <div className="w-[110%] h-[50vh] flex overflow-y-hidden ">
        {data.map((d, i) => {
          return (
            <Link
              to={`/${d.media_type || title}/details/${d.id}`}
              key={i}
              className="min-w-[18%] rounded-lg mb-5 border-r-1 hover:shadow-2xl bg-zinc-900 mr-5"
            >
              <img
                src={
                  d.backdrop_path || d.profile_path || d.poster_path
                    ? `https://image.tmdb.org/t/p/original${
                        d.backdrop_path || d.profile_path || d.poster_path
                      }`
                    : noimage
                }
                className="w-[55vh] rounded-md h-[70%] object-cover"
                alt=""
              />
              <h1 className="text-lg px-2 mt-3 font-serif font-black  text-white">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              {d.overview && (
                <p className=" text-sm mt-3 mb-3 px-2 text-zinc-200">
                  {d.overview.slice(0, 80)}...
                  <Link className="text-zinc-400">more</Link>
                </p>
              )}
              {d.character && (
                <p className=" text-lg mt-3 font-semibold px-2 text-zinc-400">
                  {d.character}
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default HorizontalCards;
