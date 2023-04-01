import { useState } from 'react'

export const useGameState = () => {
    const [guessedLetters, setGuessedLetters] = useState([])

    return { guessedLetters, setGuessedLetters }
}
