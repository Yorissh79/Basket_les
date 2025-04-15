import React, { useEffect, useState } from 'react'
import style from './Basket.module.scss'
import Card from '../card/Card'

const Basket = () => {

    const [data, setData] = useState([])

    const getData = () => {
        setData(JSON.parse(localStorage.getItem("basket")))
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className={style.main}>

        {data && data.map((item) => <Card item={item} props={"del"} who={"basket"}/>)}

    </div>
  )
}

export default Basket