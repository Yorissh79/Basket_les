import React, { useEffect, useState } from 'react'
import style from './Wishlist.module.scss'
import Card from '../card/Card'

const Wishlist = () => {
    const [data, setData] = useState([])

    const getData = () => {
        setData(JSON.parse(localStorage.getItem("wish")))
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className={style.main}>

        {data && data.map((item) => <Card item={item} props={"del"} who={"wish"}/>)}

    </div>
  )
}

export default Wishlist