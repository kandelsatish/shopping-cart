import React from 'react'
import './css/Details.css'
import { DataContext } from './DataContext'
import { Link } from 'react-router-dom'
import './css/Cart.css'
export default function Cart() {
    const { cart, decreaseCount, increaseCount, deleteCartItem,total } = React.useContext(DataContext)
    console.log(cart)
    if(cart.length === 0){
        return <h3 style={{ textAlign: 'center' }}>Nothing to show</h3>
    }
    return (<>
        {cart.map(item => (
            <div className="details cart" key={item._id}>
                <img src={item.src} alt="image" />
                <div className="box">
                    <div className="row">
                        <h2>{item.title}</h2>
                        <span>${item.price*item.count}</span>
                    </div>
                    <p className="colors">{
                        item.colors.map((color, index) => {
                            return <button key={index} style={{ background: color }}></button>
                        })
                    }</p>

                    <p>{item.description}</p>
                    <p>{item.content}</p>
                    <div className="amount">
                        <button className="count" onClick={() => decreaseCount(item._id)}> - </button>
                        <span>{item.count}</span>
                        <button className="count" onClick={() => increaseCount(item._id)}> + </button>
                    </div>
                </div>
                <div className="delete" onClick={() => deleteCartItem(item._id)}>X</div>
            </div>
        ))}
        {/* {cart.length === 0 ? <h3 style={{ textAlign: 'center' }}>Nothing to show</h3> : null} */}
    <div className="total">
        <Link to="/payment">Payment</Link>
        <h1>Total:${total}</h1>
    </div>
    </>
    )
}
