/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import NotFound from "../utils/NotFound";

function Trailer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  // console.log(ytvideo);

  return (
    <div className="absolute z-[100] top-10 right-12 w-[95%] h-[90%] rounded-2xl bg-[rgba(0,0,0,0.9)]">
      <Link
        onClick={() => navigate(-1)}
        className=" text-5xl text-zinc-400 absolute top-[-3%] right-[-1%] hover:text-[#6556cd] ri-close-fill "
      />{" "}
      {ytvideo ? (
        <ReactPlayer
        controls
          height={828}
          width={1818}
          className="rounded-2xl"
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default Trailer;
