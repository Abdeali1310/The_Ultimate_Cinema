/* eslint-disable no-unused-vars */
import React from 'react'
import loader from "../assets/loader.gif"

function Loading() {
  return (
    <div className='flex justify-center items-center h-full w-full'>
        <img className='w-[8%] h-[15%]' src={loader} alt="" />
    </div>
  )
}

export default Loading