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
import { asyncloadperson, removeperson } from "../store/actions/peopleActions";
import Loading from "../utils/Loading";
import arrow from "../assets/arrow.svg";
import HorizontalCards from "../templates/HorizontalCards";

function PersonDetails() {
  const { id } = useParams();
  const { info } = useSelector((state) => state.people);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadperson(id));

    //imp
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  // console.log(info);
  document.title = "The Ultimate Cinema" + " | PERSON | " + id;

  return info ? (
    <>
      <div className="h-auto w-screen overflow-auto relative px-[10%]">
      <nav className="w-full text-zinc-200 h-[10vh] items-center flex gap-12 text-2xl">
          <Link
            onClick={() => navigate(-1)}
            className=" hover:text-[#6556cd] ri-arrow-left-line "
          />
          </nav>
        {/* part 2 poster */}
        <div className="flex mt-7  gap-12">
          <div className="details flex w-[20%] flex-col gap-7">
            <img
              src={`https://image.tmdb.org/t/p/original${info.detail.profile_path}`}
              className="w-[35vh] h-[50vh] rounded-md shadow-lg shadow-[rgba(255,255,255,0.5)]  object-cover"
              alt=""
            />
            <div className="personal-details flex flex-col">
              {/* socials */}
              <div className="socials flex gap-16 text-white justify-evenly text-3xl">
                {info.externalid.wikidata_id !== null &&
                  info.externalid.wikidata_id !== "" && (
                    <a
                      className="hover:text-[#6556cd] "
                      target="_blank"
                      href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                    >
                      <i classname="ri-global-fill"></i>
                    </a>
                  )}

                {info.externalid.instagram_id !== null &&
                  info.externalid.instagram_id !== "" && (
                    <a
                      className="hover:text-[#6556cd] "
                      target="_blank"
                      href={`https://www.instagram.com/${info.externalid.instagram_id}`}
                    >
                      <i classname="ri-instagram-line"></i>
                    </a>
                  )}

                {info.externalid.facebook_id !== null &&
                  info.externalid.facebook_id !== "" && (
                    <a
                      className="hover:text-[#6556cd] "
                      target="_blank"
                      href={`https://www.facebook.com/${info.externalid.facebook_id}`}
                    >
                      <i classname="ri-facebook-line"></i>
                    </a>
                  )}

                {info.externalid.twitter_id !== null &&
                  info.externalid.twitter_id !== "" && (
                    <a
                      className="hover:text-[#6556cd] "
                      target="_blank"
                      href={`https://x.com/${info.externalid.twitter_id}`}
                    >
                      <i classname="ri-twitter-x-line"></i>
                    </a>
                  )}
              </div>

              {/* all details */}
              <div className="all-details w-[100%]">
                <h1 className="text-zinc-400 text-3xl font-semibold mt-12">
                  {" "}
                  Personal Info
                </h1>
                <div className="knownfor">
                  <h1 className="text-zinc-400 text-2xl font-semibold mt-7">
                    {" "}
                    Known For
                  </h1>
                  <p className="text-zinc-200 text-xl font-bold mt-2">
                    {info.detail.known_for_department}
                  </p>
                </div>

                <h1 className="text-zinc-400 text-2xl font-semibold mt-7">
                  {" "}
                  Gender
                </h1>
                <p className="text-zinc-200 text-xl font-bold mt-2">
                  {info.detail.gender == 2 ? "Male" : "Female"}
                </p>

                <h1 className="text-zinc-400 text-2xl font-semibold mt-7">
                  {" "}
                  Birthday
                </h1>
                <p className="text-zinc-200 text-xl font-bold mt-2">
                  {info.detail.birthday}
                </p>

                <h1 className="text-zinc-400 text-2xl font-semibold mt-7">
                  {" "}
                  Place of Birth
                </h1>
                <p className="text-zinc-200 text-xl font-bold mt-2">
                  {info.detail.place_of_birth}
                </p>

                <h1 className="text-zinc-400 text-2xl font-semibold mt-7">
                  {" "}
                  Also Known As
                </h1>
                <p className="text-zinc-200 text-xl font-bold mt-2 mb-12">
                  {info.detail.also_known_as.map((item, i) => (
                    <div key={i}>{item}</div>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <div className="details w-[70%] flex flex-col gap-2 text-white">
            <div className="name mb-4">
              <h1 className="text-5xl font-bold font-serif">
                {info.detail.name}{" "}
              </h1>
            </div>

            <div className="biography mt-1 flex flex-col gap-2">
              <h1 className="text-2xl text-zinc-200  font-bold mb-2">
                Biography
              </h1>
              <p className="text-xl text-zinc-200 w-[90%] font-semibold">
                {info.detail.biography}
              </p>
            </div>

            <div className="credits mt-12 flex flex-col gap-2">
              <h1 className="text-2xl text-zinc-200  font-bold mb-2">
                Works : 
              </h1>
              <HorizontalCards data={info.credits.cast} detail="no"/>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default PersonDetails;
