import React, { useState } from 'react'

import { useGameState } from '../Gamestate';

export default function Letters({setGuessedLetters, guessedLetters, handleGuessLetter}) {
    const [activeStates, setActiveStates] = useState(Array(26).fill(false))

    

    // React.useEffect(() => {
    //   console.log(guessedLetters);
    // }, [guessedLetters]);

    function handleClick(event) {
        const letter = event.target.innerText
        const index = letter.charCodeAt(0) - 65  
        const newActiveStates = [...activeStates]
        newActiveStates[index] = !newActiveStates[index]
        setActiveStates(newActiveStates)
        setGuessedLetters([...guessedLetters, letter])
        handleGuessLetter(letter)
    }
  return (

    <div className='letter-area'>
        <span className={`letter a ${activeStates[0] ? 'active' : ''}`} onClick={handleClick}>A</span>
        <span className={`letter b ${activeStates[1] ? 'active' : ''}`} onClick={handleClick}>B</span>
        <span className={`letter c ${activeStates[2] ? 'active' : ''}`} onClick={handleClick}>C</span>
        <span className={`letter d ${activeStates[3] ? 'active' : ''}`} onClick={handleClick}>D</span>
        <span className={`letter e ${activeStates[4] ? 'active' : ''}`} onClick={handleClick}>E</span>
        <span className={`letter f ${activeStates[5] ? 'active' : ''}`} onClick={handleClick}>F</span>
        <span className={`letter g ${activeStates[6] ? 'active' : ''}`} onClick={handleClick}>G</span>
        <span className={`letter h ${activeStates[7] ? 'active' : ''}`} onClick={handleClick}>H</span>
        <span className={`letter i ${activeStates[8] ? 'active' : ''}`} onClick={handleClick}>I</span>
        <span className={`letter j ${activeStates[9] ? 'active' : ''}`} onClick={handleClick}>J</span>
        <span className={`letter k ${activeStates[10] ? 'active' : ''}`} onClick={handleClick}>K</span>
        <span className={`letter l ${activeStates[11] ? 'active' : ''}`} onClick={handleClick}>L</span>
        <span className={`letter m ${activeStates[12] ? 'active' : ''}`} onClick={handleClick}>M</span>
        <span className={`letter n ${activeStates[13] ? 'active' : ''}`} onClick={handleClick}>N</span>
        <span className={`letter o ${activeStates[14] ? 'active' : ''}`} onClick={handleClick}>O</span>
        <span className={`letter p ${activeStates[15] ? 'active' : ''}`} onClick={handleClick}>P</span>
        <span className={`letter q ${activeStates[16] ? 'active' : ''}`} onClick={handleClick}>Q</span>
        <span className={`letter r ${activeStates[17] ? 'active' : ''}`} onClick={handleClick}>R</span>
        <span className={`letter s ${activeStates[18] ? 'active' : ''}`} onClick={handleClick}>S</span>
        <span className={`letter t ${activeStates[19] ? 'active' : ''}`} onClick={handleClick}>T</span>
        <span className={`letter u ${activeStates[20] ? 'active' : ''}`} onClick={handleClick}>U</span>
        <span className={`letter v ${activeStates[21] ? 'active' : ''}`} onClick={handleClick}>V</span>
        <span className={`letter w ${activeStates[22] ? 'active' : ''}`} onClick={handleClick}>W</span>
        <span className={`letter x ${activeStates[23] ? 'active' : ''}`} onClick={handleClick}>X</span>
        <span className={`letter y ${activeStates[24] ? 'active' : ''}`} onClick={handleClick}>Y</span>
        <span className={`letter z ${activeStates[25] ? 'active' : ''}`} onClick={handleClick}>Z</span>





    </div>
  )
}
