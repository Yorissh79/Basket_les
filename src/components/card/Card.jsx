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

        data.splice(data.indexOf(item), 1)

        localStorage.setItem(`${who}`, JSON.stringify(data))

        location.reload()

    }

    const countUp = (it, who) => {

        let data = JSON.parse(localStorage.getItem(`${who}`)) || []

        let item = data.find(e => e.id == it.id)

        let newCount = Number(item.count) + 1

        data[data.indexOf(item)].count = newCount

        localStorage.setItem(`${who}`, JSON.stringify(data))

        location.reload()

    }

    const countDown = (it, who) => {

        let data = JSON.parse(localStorage.getItem(`${who}`)) || []

        let item = data.find(e => e.id == it.id)

        if (Number(item.count > 1)) {
            let newCount = Number(item.count) - 1
            data[data.indexOf(item)].count = newCount
            localStorage.setItem(`${who}`, JSON.stringify(data))
            location.reload()
        }
        
        else(deleteItem(it, who))

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
            {props == "wish" ? <p className={style.count}>Number : {item.count}</p> : ""}

        </div>

        { props == "normal"?
        <div>
        <button className={style.basket} onClick={() => {sendToBasket(item)}}>Basket</button>
        <button className={style.wishlist} onClick={() => {sendToWish(item)}}>Wishlist</button>
        </div>
        : ""}

        {props == "del" ? <button className={style.del} onClick={() => {deleteItem(item, who)}}>Delete</button> : ""}

        {
            props == "basket" ? <div>
                <button className={style.plus} onClick={() => {countUp(item, who)}}>+</button>
                <button className={style.del} onClick={() => {deleteItem(item, who)}}>Delete</button>
                <button className={style.minus} onClick={() => {countDown(item, who)}}>-</button>
            </div> : ""
        }

    </div>
  )
}

export default Card