import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const {Component}=props

    const navigate= useNavigate()
    useEffect(()=>{
        let loginKey=localStorage.getItem('userId')
        if (!/^[0-9a-fA-F]{24}$/.test(loginKey)) {
            navigate('/login')
        }
        if(!loginKey && !/^[0-9a-fA-F]{24}$/.test(loginKey)){
            navigate('/login')
        }
    },[])
  return (
    <>
        <Component/>
    </>
  )
}

export default Protected