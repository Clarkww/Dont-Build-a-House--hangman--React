import React from 'react'

import '../index.css'

import { BsPlayFill } from "react-icons/bs";

export default function ({handlePlayButtonClick}) {
  return (
    <div className='play-btn' onClick={handlePlayButtonClick} ><BsPlayFill /></div>
  )
}
