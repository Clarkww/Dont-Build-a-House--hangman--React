import React, { useState } from 'react'

import Header from './components/Header'

import Playbutton from './components/Playbutton'

import Figure from './components/Figure'

import Wordarea from './components/Wordarea'

import Wrongguesses from './components/Wrongguesses'

import Letters from './components/Letters'

import Resetbutton from './components/Resetbutton'


import './index.css'



import { useGameState } from './Gamestate'

import wordList from './wordList'



function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const {guessedLetters, setGuessedLetters} = useGameState()
  const [wrongGuessCount, setWrongGuessCount] = useState(0)
  const [selectedWord, setSelectedWord] = useState('')
  const [resetCount, setResetCount] = useState(0)



  const handlePlayButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length)
    console.log(wordList[randomIndex])
    setSelectedWord(wordList[randomIndex])
    setGameStarted(true)
    console.log(wrongGuessCount)
  }

  function handleResetGame() {
    console.log('reset')
    const randomIndex = Math.floor(Math.random() * wordList.length)
    console.log(wordList[randomIndex])
    setSelectedWord(wordList[randomIndex])
    setGameStarted(true)
    setResetCount(resetCount + 1)
    setWrongGuessCount(0)
    setGuessedLetters([])
  }

  
  const handleGuessLetter = (letter) => {
    if (selectedWord.includes(letter)) {
      // update word area with correct guess
      // add letter to guessedLetters
      setGuessedLetters([...guessedLetters, letter])
    } else {
      // increment wrong guess count
      setWrongGuessCount(wrongGuessCount + 1)
    }
    console.log('letter', letter)
    console.log(guessedLetters)
  }



  // let word = 'HELLO'


  return (
    <>
      <Header />
        {!gameStarted ? (  <Playbutton handlePlayButtonClick={handlePlayButtonClick} gameStarted={gameStarted} />
              ) : (    
          <div className='game-container'>  
          <Figure wrongGuessCount={wrongGuessCount} resetCount={resetCount} />
          <Wordarea selectedWord={selectedWord} guessedLetters={guessedLetters} resetCount={resetCount}  />
          <Wrongguesses wrongGuessCount={wrongGuessCount} selectedWord={selectedWord} resetCount={resetCount}/>
          <Resetbutton onClick={handleResetGame}/> 
          <Letters setGuessedLetters={setGuessedLetters} guessedLetters={guessedLetters} handleGuessLetter={handleGuessLetter} resetCount={resetCount}/>
        </div>
        )}  
        



    </>
  )
}

export default App
