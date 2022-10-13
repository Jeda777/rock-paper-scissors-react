import { useState } from 'react'
import { imageRules, imageRulesBonus, iconClose } from '../assets/assets'

const GameFooter = ({ setMenuState, isGameModified }) => {
  const [rulesOpen, setRulesOpen] = useState(false)

  return (
    <div id='game-footer'>
      <button onClick={() => setMenuState(0)}>Menu</button>
      <button onClick={() => setRulesOpen(true)}>Rules</button>
      {rulesOpen ? (
        <div id='game-rules'>
          <div className='container'>
            <p>Rules</p>
            <img id='rules-img' src={isGameModified ? imageRulesBonus : imageRules} alt='' />
            <img src={iconClose} alt='' id='close-btn' onClick={() => setRulesOpen(false)} />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default GameFooter
