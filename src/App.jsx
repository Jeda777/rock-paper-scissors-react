import { useState, useEffect } from 'react'
import { MainMenu, PointsCounter, MainGame, GameFooter } from './components/index'

const App = () => {
  // 0-main menu, 1-game
  const [menuState, setMenuState] = useState(0)
  const [isGameModified, setIsGameModified] = useState()
  const [originalPoints, setOriginalPoints] = useState(0)
  const [modifiedPoints, setModifiedPoints] = useState(0)

  useEffect(() => {
    const originalLocalPoints = Number(localStorage.getItem('originalpoints'))
    const modifiedLocalPoints = Number(localStorage.getItem('modifiedpoints'))
    if (originalLocalPoints !== null) setOriginalPoints(originalLocalPoints)
    if (modifiedLocalPoints !== null) setModifiedPoints(modifiedLocalPoints)
  }, [])

  useEffect(() => {
    localStorage.setItem('originalpoints', originalPoints.toString())
  }, [originalPoints])
  useEffect(() => {
    localStorage.setItem('modifiedpoints', modifiedPoints.toString())
  }, [modifiedPoints])

  return (
    <div id='App'>
      {menuState === 0 ? (
        <MainMenu setMenuState={setMenuState} setIsGameModified={setIsGameModified} />
      ) : (
        <div id='game' className={isGameModified ? 'modified' : ''}>
          <PointsCounter isGameModified={isGameModified} points={isGameModified ? modifiedPoints : originalPoints} />
          <MainGame isGameModified={isGameModified} setPoints={isGameModified ? setModifiedPoints : setOriginalPoints} />
          <GameFooter setMenuState={setMenuState} isGameModified={isGameModified} />
        </div>
      )}
    </div>
  )
}

export default App
