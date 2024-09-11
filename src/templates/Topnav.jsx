/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "../assets/noimage.jpg"

function Topnav() {
  const [query, setquery] = useState("");
  const [search, setSearch] = useState([]);

  async function getSearches() {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      // console.log(data.results);

      setSearch(data.results);
    } catch (error) {
      console.log("Error = ", error);
    }
  }

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-[80%] ">
      <div className="navbar pt-3 relative justify-start ml-[30%] flex gap-5 text-zinc-300 ">
        <i className="ri-search-line text-3xl flex items-center"></i>
        <input
          type="search"
          className="px-5 outline-none border-none bg-transparent text-xl w-[80%] h-[4.5vh] rounded-lg"
          name="search"
          id="search"
          placeholder="Search anything"
          onChange={(e) => setquery(e.target.value)}
          value={query}
        />

        {/* query box */}
        <div className="z-[100] absolute w-[80%] mt-1 max-h-[50vh] left-[6%] bg-zinc-300 top-[92%] rounded-md overflow-auto">
          {search.map((item, index) => {
            return (
              <Link
                key={index}
                className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-7  border-b-[1px] flex justify-start items-center"
              >
                <img className="w-[10vh] h-[10vh] rounded-lg object-cover mr-5" src={item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path || item.profile_path} ` : noimage } alt="" />
                <span>
                  {item.name ||
                    item.title ||
                    item.original_name ||
                    item.original_title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Topnav;
