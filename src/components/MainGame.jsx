import { useState, useEffect } from 'react'
import { PlayerChooses, Result } from './index'

const MainGame = ({ isGameModified, setPoints }) => {
  const [playerChoice, setPlayerChoice] = useState()
  const [comChoice, setComChoice] = useState()
  const [winner, setWinner] = useState()
  // 0-player chooses, 1-waiting, 2-result
  const [gameState, setGameState] = useState(0)

  const playerChooseFunc = (index) => {
    setPlayerChoice(index)
    randomComputerChoice()
    setGameState(1)
    setTimeout(() => {
      setGameState(2)
    }, 1500)
  }

  const randomComputerChoice = () => {
    let number
    if (isGameModified) {
      number = Math.floor(Math.random() * 5)
    } else {
      number = Math.floor(Math.random() * 3)
    }
    setComChoice(number)
  }

  const changePoints = () => {
    if (winner === 'player') {
      setPoints((prev) => prev + 1)
    }
    if (winner === 'computer') {
      setPoints((prev) => prev - 1)
    }
  }

  const setWinnerFunc = () => {
    const str = `${playerChoice.toString()}${comChoice.toString()}`
    switch (str) {
      case '00':
        setWinner('draw')
        break
      case '11':
        setWinner('draw')
        break
      case '22':
        setWinner('draw')
        break
      case '33':
        setWinner('draw')
        break
      case '44':
        setWinner('draw')
        break
      case '10':
        setWinner('player')
        break
      case '20':
        setWinner('computer')
        break
      case '30':
        setWinner('computer')
        break
      case '40':
        setWinner('player')
        break
      case '01':
        setWinner('computer')
        break
      case '02':
        setWinner('player')
        break
      case '03':
        setWinner('player')
        break
      case '04':
        setWinner('computer')
        break
      case '12':
        setWinner('computer')
        break
      case '21':
        setWinner('player')
        break
      case '23':
        setWinner('player')
        break
      case '32':
        setWinner('computer')
        break
      case '34':
        setWinner('player')
        break
      case '43':
        setWinner('computer')
        break
      case '13':
        setWinner('computer')
        break
      case '31':
        setWinner('player')
        break
      case '14':
        setWinner('player')
        break
      case '41':
        setWinner('computer')
        break
      case '24':
        setWinner('computer')
        break
      case '42':
        setWinner('computer')
        break
      default:
        console.log('wtf')
        break
    }
  }

  useEffect(() => {
    if (playerChoice == undefined || playerChoice == null) {
      return
    } else if (comChoice == undefined || comChoice == null) {
      return
    } else {
      setWinnerFunc()
    }
  }, [playerChoice, comChoice])

  useEffect(() => {
    if (gameState === 2) {
      changePoints()
    }
  }, [winner, gameState])

  const reset = () => {
    setPlayerChoice(null)
    setComChoice(null)
    setWinner(null)
    setGameState(0)
  }

  return (
    <div id='player-container'>
      {gameState === 0 ? (
        <PlayerChooses playerChooseFunc={playerChooseFunc} isGameModified={isGameModified} />
      ) : (
        <Result playerChoice={playerChoice} comChoice={comChoice} winner={winner} reset={reset} gameState={gameState} />
      )}
    </div>
  )
}

export default MainGame
