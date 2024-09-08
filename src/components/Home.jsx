/* eslint-disable no-unused-vars */
import React from 'react'
import Sidenav from '../templates/Sidenav'
import Topnav from '../templates/Topnav'

function Home() {
  return (
    <>
        <Sidenav />
        <div className='w-[80%] h-full' >
            <Topnav />
        </div>

    </>
  )
}

export default Home