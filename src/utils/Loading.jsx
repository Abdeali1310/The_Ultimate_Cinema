/* eslint-disable no-unused-vars */
import React from 'react'
import loader from "../assets/loader.gif"

function Loading() {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
        <img className='w-[8%] h-[16%]' src={loader} alt="" />
    </div>
  )
}

export default Loading