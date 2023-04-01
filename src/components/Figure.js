import React from 'react'

import img from './Figureimages/house0.png'

import img1 from './Figureimages/house1.png'

import img2 from './Figureimages/house2.png'

import img3 from './Figureimages/house3.png'

import img4 from './Figureimages/house4.png'

import img5 from './Figureimages/house5.png'

import img6 from './Figureimages/house6.png'

import img7 from './Figureimages/house7.png'


import '../index.css'

export default function Figure({wrongGuessCount}) {
  const images = [img, img1, img2, img3, img4, img5, img6, img7]

  return (
    <div className='house-div'>
      <img className='hang-house' src={images[wrongGuessCount]} alt="hangman" />
    </div>


    // <div>
    //     <img className='hang-house' src={img} alt="hangman" />
    // </div>
  )
}
