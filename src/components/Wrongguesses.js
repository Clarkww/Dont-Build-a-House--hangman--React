import React from 'react'

export default function Wrongguesses({wrongGuessCount}) {
  return (
    <div className='wrong-guess'>Wrong guesses : {wrongGuessCount} / 7 </div>
  )
}
