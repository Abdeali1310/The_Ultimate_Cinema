/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));

    //imp
    return () => {
      dispatch(removemovie());
    };
  }, []);
  return <div>MovieDetails</div>;
}

export default MovieDetails;
