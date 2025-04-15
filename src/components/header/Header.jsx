import React from 'react'
import style from './Header.module.scss'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

  return (
    <div className={style.main}>
        <p>ICON</p>
        <button onClick={() => {navigate("/")}} >Home</button>
        <button onClick={() => {navigate("/basket")}}>Basket</button>
        <button onClick={() => {navigate("/wishlist")}}>Wishlist</button>
    </div>
  )
}

export default Header