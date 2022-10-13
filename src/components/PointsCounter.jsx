import { logoBonus, logo } from '../assets/assets'

const PointsCounter = ({ isGameModified, points }) => {
  return (
    <div id='points-container'>
      <div id='points-img-container'>
        <img src={isGameModified ? logoBonus : logo} alt='' />
      </div>
      <div id='score-container'>
        <p id='score'>Score</p>
        <p id='points'>{points}</p>
      </div>
    </div>
  )
}

export default PointsCounter
