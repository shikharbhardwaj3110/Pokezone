import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { BsShuffle } from "react-icons/bs";

const lightBg = {
    backgroundColor : 'rgba(255, 255, 255, 0.22)',
    width : '18rem'
}

const inputStyle = {
    background : 'none',
    color : '#ffffff',
    fontSize : '0.9rem',
   
}

const Topbar = ({randomize}) => {

  return (
    <div className='container pt-3 d-flex justify-content-between align-items-center topbar-container'>
        
        <div className='d-flex align-items-center px-2 py-2 rounded justify-content-between search-container' style={lightBg}>
            <input className='flex-grow-1 border-0 ps-1' style={inputStyle} placeholder='Search here'>
            </input>

            <AiOutlineSearch size={20} color='white' className='mx-1'/>
            <BsShuffle size={17} color='white' className='mx-1 randomize-icon-flip d-none' onClick={()=> {randomize()}}/>

        </div>

        <BsShuffle size={25} color='white' className='ms-2 randomize-icon' onClick={()=> {randomize()}} style={{cursor : 'pointer'}}/>
    </div>
  )
}

export default Topbar