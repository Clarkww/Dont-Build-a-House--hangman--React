import React from 'react'

import { useGameState } from '../Gamestate';

export default function Wordarea({guessedLetters, selectedWord}) {
  
  

  



  return (
    <div className='word-area'>
      
        {selectedWord.split('').map((letter, index) => (
            <span key={index} className='guessed'>
              {guessedLetters.includes(letter) ? letter : '_'}
            </span>
        ))}

    </div>
  )
}
