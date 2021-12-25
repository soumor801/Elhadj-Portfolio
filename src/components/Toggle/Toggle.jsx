import { useContext } from 'react'
import { ThemeContext } from '../../context'
import './Toggle.css'
const Toggle = () => {
  const theme = useContext(ThemeContext)
  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE'})

  }
  return (
    <div className="t">
      <img src="https://i.imgur.com/5ekewUo.png" alt="" className="t-icon" />
      <img src="https://i.imgur.com/bUnJlQb.png" alt="" className="t-icon" />
      <div className="t-button" onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
    </div>
  )
}

export default Toggle
