import React, { useState } from 'react'

import Header from './components/Header'

import Playbutton from './components/Playbutton'

import Figure from './components/Figure'

import Wordarea from './components/Wordarea'

import Wrongguesses from './components/Wrongguesses'

import Letters from './components/Letters'

import './index.css'

import { useGameState } from './Gamestate'

import wordList from './wordList'



function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const {guessedLetters, setGuessedLetters} = useGameState()
  const [wrongGuessCount, setWrongGuessCount] = useState(0)
  const [selectedWord, setSelectedWord] = useState('')



  const handlePlayButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length)
    console.log(wordList[randomIndex])
    setSelectedWord(wordList[randomIndex])
    setGameStarted(true)
    console.log(wrongGuessCount)
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

  const maxWrongGuesses = 6
  const isGameOver = wrongGuessCount >= maxWrongGuesses
  const win = selectedWord.split('').every((letter) => guessedLetters.includes(letter))

  return (
    <>
      <Header />
        {!gameStarted ? (  <Playbutton handlePlayButtonClick={handlePlayButtonClick} gameStarted={gameStarted} />
              ) : (    
        <div className='game-container'>  
          <Figure wrongGuessCount={wrongGuessCount} />
          <Wordarea selectedWord={selectedWord} guessedLetters={guessedLetters}  />
          <Wrongguesses wrongGuessCount={wrongGuessCount} />
          <Letters setGuessedLetters={setGuessedLetters} guessedLetters={guessedLetters} handleGuessLetter={handleGuessLetter} />
        </div>
        )}  
        



    </>
  )
}

export default App
