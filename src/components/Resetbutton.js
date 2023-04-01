import React from 'react'

import {AiOutlineReload} from "react-icons/ai";

export default function Resetbutton({onClick}) {
  return (
    <div onClick={onClick}>
        <AiOutlineReload className='reset-btn'  />
    </div>
  )
}
