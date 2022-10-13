import { gameThings, bgPentagon, bgTraingle } from '../assets/assets'

const PlayerChooses = ({ playerChooseFunc, isGameModified }) => {
  return (
    <div id='player-chooses'>
      <img id='bg-img' src={isGameModified ? bgPentagon : bgTraingle} alt='' />
      {gameThings.map((i, index) => {
        if (!isGameModified) {
          if (index < 3) {
            return (
              <div
                key={index}
                className={`item item-${index}`}
                onClick={() => {
                  playerChooseFunc(index)
                }}
              >
                <div>
                  <img src={i} />
                </div>
              </div>
            )
          } else return
        } else {
          return (
            <div
              key={index}
              className={`item item-${index}`}
              onClick={() => {
                playerChooseFunc(index)
              }}
            >
              <div>
                <img src={i} />
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default PlayerChooses
