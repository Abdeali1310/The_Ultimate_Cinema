/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidenav from "../templates/Sidenav";
import Topnav from "../templates/Topnav";
import axios from "../utils/axios";
import Header from "../templates/Header";

function Home() {
  document.title = "The Movie DB | Homepage";

  const [wallpaper, setWallpaper] = useState(null);

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      // console.log(data.results);

      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];

      setWallpaper(randomData);
    } catch (error) {
      console.log("Error = ", error);
    }
  };

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
  });

  return wallpaper ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full ">
        <Topnav />
        <Header data={wallpaper}/>
      </div>
    </>
  ) : (
    <h1 className="text-white">Loading...</h1>
  );
}

export default Home;
