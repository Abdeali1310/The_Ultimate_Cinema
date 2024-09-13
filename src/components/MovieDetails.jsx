/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import Loading from "../utils/Loading";
import arrow from "../assets/arrow.svg";
import HorizontalCards from "../templates/HorizontalCards";

function MovieDetails() {
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));

    //imp
    return () => {
      dispatch(removemovie());
    };
  }, [id]);
  console.log(info);

  return info ? (
    <>
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.7) 25%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.7) 75%, rgba(0, 0, 0, 0.8) 100%), 
      url(https://image.tmdb.org/t/p/original${info.detail.backdrop_path})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-auto w-screen overflow-auto relative px-[10%]"
      >
        {/* part 1 navigation */}
        <nav className="w-full text-zinc-200 h-[10vh] items-center flex gap-12 text-2xl">
          <Link
            onClick={() => navigate(-1)}
            className=" hover:text-[#6556cd] ri-arrow-left-line "
          />

          <a
            className="hover:text-[#6556cd]"
            target="_blank"
            href={info.detail.homepage}
          >
            <i class="ri-external-link-fill"></i>
          </a>
          <a
            className="hover:text-[#6556cd]"
            target="_blank"
            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          >
            <i class="ri-global-line"></i>
          </a>
          <a
            className="hover:text-[#6556cd] font-mono"
            target="_blank"
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
          >
            imdb
          </a>
        </nav>

        {/* part 2 poster */}
        <div className="flex mt-7 h-55vh] gap-10">
          <img
            src={`https://image.tmdb.org/t/p/original${info.detail.backdrop_path}`}
            className="w-[32vh] h-[45vh] rounded-md   object-cover"
            alt=""
          />

          <div className="details flex flex-col gap-2 text-white">
            <div className="title">
              <h1 className="text-5xl font-bold font-serif">
                {info.detail.title}{" "}
                <span className="text-2xl font-sans">
                  {" "}
                  ({info.detail.release_date.split("-")[0]})
                </span>
              </h1>
            </div>

            <div className="type flex gap-10">
              <p className="text-md font-semibold text-xl">
                TMDB -{" "}
                {info.detail.vote_average &&
                  info.detail.vote_average.toFixed(1) + "/10"}
              </p>
              <p className="text-md font-semibold text-xl">
                <i class="ri-calendar-line"></i>{" "}
                {info.detail.release_date && info.detail.release_date}
              </p>
            </div>
            <div className="genre mt-1 flex gap-5">
              <p className="text-lg font-semibold">
                {info.detail.genres.map((g) => g.name).join(", ")}
              </p>
              <p className="text-lg font-semibold font-mono text-[#8271f3]">
                <i class="ri-time-line font-light text-white"></i>{" "}
                {info.detail.runtime} mins
              </p>
            </div>
            <div className="tagline ">
              <p className="text-2xl text-zinc-400 italic font-semibold">
                {info.detail.tagline}
              </p>
            </div>
            <div className="overview mt-1 flex flex-col gap-2">
              <h1 className="text-2xl text-zinc-200  font-bold">Overview</h1>
              <p className="text-xl text-zinc-200 w-[90%] font-semibold">
                {info.detail.overview}
              </p>
            </div>

            <div className="overview mb-7 mt-3">
              <p className="text-xl text-zinc-200 w-[95vh] font-semibold">
                <span className="text-lg text-zinc-200  font-semibold">
                  Original Language :{" "}
                </span>{" "}
                <span className="text-zinc-400">
                  {info.detail.spoken_languages
                    .map((item) => item.name)
                    .join(", ")}
                </span>
              </p>
            </div>

            <div className="trailer">
              <Link
                to={`${pathname}/trailer`}
                className="bg-[#6556cd] hover:bg-[#5547b2] w-[10%] mt-1 p-4 rounded text-white font-semibold"
              >
                <i class="ri-play-fill"></i> Play Trailer
              </Link>
            </div>
          </div>
        </div>

        {/* part 3 platforms */}
        {info.watchproviders && (
          <div className="streaming mt-28">
            {info.watchproviders.flatrate && (
              <div className="platform flex gap-5 items-center">
                <span className="text-xl text-zinc-200  font-bold">
                  Available Platforms :{" "}
                </span>
                {info.watchproviders.flatrate.map((item, i) => (
                  <a
                    key={i}
                    href={`https://www.${item.provider_name
                      .replace("Amazon", "")
                      .toLowerCase()
                      .replace(/\s+/g, "")}.com`}
                    target="_blank"
                  >
                    <img
                      key={i}
                      title={item.provider_name}
                      className="rounded-lg w-[7vh] ml-3 h-[7vh]"
                      src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                    />
                  </a>
                ))}
              </div>
            )}

            {info.watchproviders.rent && (
              <div className="rent mt-8">
                <div className="platform flex gap-5 items-center">
                  <span className="text-xl text-zinc-200  font-bold">
                    Available on Rent : &nbsp;&nbsp;
                  </span>

                  {info.watchproviders.rent.map((item, i) => (
                    <a
                      key={i}
                      href={`https://${
                        item.provider_name.toLowerCase().includes("amazon")
                          ? "primevideo"
                          : item.provider_name.toLowerCase().includes("google")
                          ? "play.google"
                          : item.provider_name
                              .replace("Amazon", "")
                              .toLowerCase()
                              .replace(/\s+/g, "")
                      }.com`}
                      target="_blank"
                    >
                      <img
                        key={i}
                        title={item.provider_name}
                        className="rounded-lg w-[7vh] ml-3 h-[7vh]"
                        src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {info.watchproviders.buy && (
              <div className="buy flex gap-5 mt-10 mb-5 items-center">
                <span className="text-xl text-zinc-200  font-bold">
                  Available to Buy :{" "}
                </span>
                &nbsp;
                {info.watchproviders.buy.map((item, i) => (
                  <a
                    key={i}
                    href={`https://${
                      item.provider_name.toLowerCase().includes("google")
                        ? "play.google"
                        : item.provider_name
                            .replace("Amazon", "")
                            .toLowerCase()
                            .replace(/\s+/g, "")
                    }.com`}
                  >
                    <img
                      key={i}
                      title={item.provider_name}
                      className="rounded-lg w-[7vh] ml-3 h-[7vh]"
                      src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        <hr className="bg-zinc-500 w-[80%] mt-24 m-auto h-[1.5px] border-none" />

        {/* part 4 cast */}
        <div className="cast mt-28">
          <h1 className="text-3xl text-white font-bold">Cast : </h1>
          <HorizontalCards data={info.cast && info.cast} />
        </div>

        <hr className="bg-zinc-500 w-[80%] mt-24 m-auto h-[1.5px] border-none" />

        {/* part 5 Recommendations and similar stuff */}
        {info.recommendations || info.similar ? (
          <div className="recommendation mt-28">
            <h1 className="text-3xl text-white font-bold">
              You might like these :{" "}
            </h1>
            <HorizontalCards
              data={info.recommendations ? info.recommendations : info.similar}
            />
          </div>
        ) : (
          ""
        )}

      {/* part 6 trailer */}
      <Outlet />
      </div>

    </>
  ) : (
    <Loading />
  );
}

export default MovieDetails;
