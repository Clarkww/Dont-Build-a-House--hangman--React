import React from 'react'

export default function Wrongguesses({wrongGuessCount, selectedWord}) {
  if (wrongGuessCount <= 6) {
    return (
      <div className='wrong-guess'>Wrong guesses : {wrongGuessCount} / 7 </div>
    )
  } else if (wrongGuessCount === 7) {
    return (
      <div className='wrong-guess' > Too bad -_- The correct word was : {selectedWord}  </div>
    )
  }




  // return (
  //   <div className='wrong-guess'>Wrong guesses : {wrongGuessCount} / 7 </div>
  // )
}
