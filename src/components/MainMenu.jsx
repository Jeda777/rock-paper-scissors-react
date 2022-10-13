const MainMenu = ({ setMenuState, setIsGameModified }) => {
  return (
    <div id='main-menu-container'>
      <button
        onClick={() => {
          setMenuState(1)
          setIsGameModified(false)
        }}
      >
        Rock <br /> Paper <br /> Scissors
      </button>
      <button
        onClick={() => {
          setMenuState(1)
          setIsGameModified(true)
        }}
      >
        Rock <br /> Paper <br /> Scissors <br /> Lizard <br /> Spock
      </button>
    </div>
  )
}

export default MainMenu
