/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import arrow from "../assets/arrow.svg";
import { useNavigate } from "react-router-dom";
import Topnav from "../templates/Topnav";
import Dropdown from "../templates/Dropdown";
import Cards from "../templates/Cards";
import axios from "../utils/axios";
import Loading from "../utils/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function People() {
  const [people, setPeople] = useState([]);
  const [category, setCategory] = useState("popular");
  const [hasmore, setHasmore] = useState(true);

  const [pages, setPages] = useState(1);
  const navigate = useNavigate();

  const getPeopleData = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${pages}`);
      if (data.results.length > 0) {
        setPeople((prev) => [...prev, ...data.results]);
        setPages(pages + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.log("Error = ", error);
    }
  };

  //refresh handler
  const refreshHandler = async () => {
    if (people.length === 0) {
      getPeopleData();
    } else {
      setPages(1);
      setPeople([]);
      getPeopleData();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  document.title = "The Movie DB | people | " + category.toLocaleUpperCase();
  return people ? (
    <div className="min-h-screen w-screen py-4 ">
      <div className="top mb-12 flex justify-between px-[3%] items-center  text-zinc-300">
        <div className="flex  gap-4 img-heading">
          <img
            onClick={() => navigate(-1)}
            className=" hover:bg-[#6556cd] rounded-2xl cursor-pointer"
            src={arrow}
            alt=""
          />
          <h1 className="text-3xl font-semibold text-zinc-400">people</h1>{" "}
        </div>
        <Topnav />
      </div>
      <InfiniteScroll
        dataLength={people.length}
        next={getPeopleData}
        hasMore={hasmore}
        loader={<Loading />}
      >
        <Cards data={people} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default People;