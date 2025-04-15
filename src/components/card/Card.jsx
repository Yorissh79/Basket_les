import React from 'react'
import style from './Card.module.scss'

const Card = ({item, props, who}) => {

    const sendToBasket = (it) => {

        let data = JSON.parse(localStorage.getItem("basket")) || []
        let ex = data.find((x) => x.id == it.id)
        
        if (ex) {
            ex.count += 1
        } else {
            data = [...data, {...item, count: 1}]
        }

        localStorage.setItem("basket", JSON.stringify(data))

    }

    const sendToWish = (it) => {

        let data = JSON.parse(localStorage.getItem("wish")) || []
        let ex = data.find((x) => x.id == it.id)
        
        if (ex) {
            alert("Hara elave edirsen varda")
        } else {
            data = [...data, {...item, count: 1}]
        }

        localStorage.setItem("wish", JSON.stringify(data))

    }

    const deleteItem = (it, who) => {


        let data = JSON.parse(localStorage.getItem(`${who}`)) || []

        let item = data.find(e => e.id == it.id)

        data.splice(data.indexOf(item.id), 1)

        localStorage.setItem(`${who}`, JSON.stringify(data))

        location.reload()


    }

  return (
    <div className={style.main}>

        <div className={style.imgbox}>

            <img src={item.image} alt="" />

        </div>

        <div className={style.text}>

            <p className={style.title}>{item.title}</p>
            {/* <p className={style.description}>{item.description}</p> */}
            <p className={style.price}>${item.price}</p>

        </div>

        { props == "normal"?
        <div>
        <button className={style.basket} onClick={() => {sendToBasket(item)}}>Basket</button>
        <button className={style.wishlist} onClick={() => {sendToWish(item)}}>Wishlist</button>
        </div>
        : ""}

        {props == "del" ? <button className={style.del} onClick={() => {deleteItem(item, who)}}>Delete</button> : ""}

    </div>
  )
}

export default Card