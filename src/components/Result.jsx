import { gameThings } from '../assets/assets'

const Result = ({ playerChoice, comChoice, winner, reset, gameState }) => {
  return (
    <div id='result-container'>
      <div id='result'>
        <div className={`item item-${playerChoice} ${winner === 'player' && gameState === 2 ? 'winner' : ''}`}>
          <div>
            <img src={gameThings[playerChoice]} />
          </div>
        </div>
        {gameState === 2 ? (
          <div id='play-again'>
            <p>{winner === 'player' ? 'You win' : winner === 'computer' ? 'You Lose' : winner === 'draw' ? 'Draw' : ''}</p>
            <button onClick={() => reset()}>Play Again</button>
          </div>
        ) : (
          ''
        )}

        {gameState === 1 ? (
          <div className='waiting'></div>
        ) : gameState === 2 ? (
          <div className={`item item-${comChoice} ${winner === 'computer' && gameState === 2 ? 'winner' : ''}`}>
            <div>
              <img src={gameThings[comChoice]} />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      {gameState === 2 ? (
        <div id='play-again-mobile'>
          <p>{winner === 'player' ? 'You win' : winner === 'computer' ? 'You Lose' : winner === 'draw' ? 'Draw' : ''}</p>
          <button onClick={() => reset()}>Play Again</button>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Result
