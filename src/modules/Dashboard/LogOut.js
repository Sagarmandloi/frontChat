//import React from 'react'
import {useNavigate} from 'react-router-dom'

const LogOut = (e) => {
    e.preventDefoult()
    const navigate = useNavigate()
  return (
  
    navigate('/login')
  
  )
}

export default LogOut
