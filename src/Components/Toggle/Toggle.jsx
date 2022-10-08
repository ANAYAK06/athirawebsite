import React , {useContext} from 'react'
import './Toggle.css'
import {BsFillSunFill} from 'react-icons/bs'
import {BsFillMoonFill} from 'react-icons/bs'
import {ThemeContext} from './context'



function Toggle() {
  const theme = useContext(ThemeContext)
  const handleClick = ()=>{
    theme.dispatch({type:"TOGGLE"})
  }
  
  return (
    <div className='toggle_div'>
        <BsFillSunFill />
        <BsFillMoonFill />
        <div className="t-button"  onClick={handleClick} style={{left:theme.state.darkMode ? 0 : 25}} ></div>
    </div>
  )
}

export default Toggle