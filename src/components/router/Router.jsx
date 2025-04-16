import style from './Router.module.scss'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Card from '../card/Card'
import Basket from '../basket/Basket'
import Header from '../header/Header'
import Wishlist from '../wishlist/Wishlist'

const Router = () => {
  
  const [data, setData] = useState([])

  const getData = () => {

    axios.get("https://fakestoreapi.com/products").then((res) => setData(res.data))

  }

  useEffect(() => {
    getData()
  }, [])

  return (

    <BrowserRouter>
      
      <Header/>

      <Routes>
        
        <Route path='basket' element={<Basket/>}/>
        <Route path='wishlist' element={<Wishlist/>} />
        <Route path='/' element={
            <div className={style.main}>
              
              <div className={style.cards}>
                
                {data && data.map((item) => <Card item={item} props={"normal"}/>)}

              </div>

            </div>
        }
        />
        
        </Routes>    

    </BrowserRouter>

  )
}

export default Router