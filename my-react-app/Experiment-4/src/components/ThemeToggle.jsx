import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Switch } from '@mui/material'

const ThemeToggle = () => {
  const { dispatch } = useContext(AppContext)

  return (
    <Switch
      onChange={() => dispatch({ type: 'TOGGLE_THEME' })}
    />
  )
}

export default ThemeToggle