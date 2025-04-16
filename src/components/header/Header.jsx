import React from 'react'
import style from './Header.module.scss'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

  return (
    <div className={style.main}>
        <p>ICON</p>
        {/* <button onClick={() => {navigate("/")}} >Home</button>
        <button onClick={() => {navigate("/basket")}}>Basket</button>
        <button onClick={() => {navigate("/wishlist")}}>Wishlist</button> */}
        <Link to={"/"}>HOME</Link>
        <Link to={"/basket"}>Basket</Link>
        <Link to={"/wishlist"}>Wishlist</Link>

    </div>
  )
}

export default Header