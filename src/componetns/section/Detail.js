import React from 'react'
import { DataContext } from '../DataContext'
import { Link } from 'react-router-dom'
import '../css/Details.css'
export default function Detail(props) {
    const { data } = React.useContext(DataContext);
    const filtered = data.filter((product) => {
        return props.match.params.id === product._id;
    });

    console.log(filtered);
    return (
        <div className="details">
            <img src={filtered[0].src} alt="image" />
            <div className="box">
                <div className="row">
                    <h2>{filtered[0].title}</h2>
                    <span>${filtered[0].price}</span>
                </div>
                <p className="colors">{
                    filtered[0].colors.map((color, index) => {
                        return <button key={index} style={{ background: color }}></button>
                    })
                }</p>

                <p>{filtered[0].description}</p>
                <p>{filtered[0].content}</p>
                <Link to='/cart' className="cart">
                    Add To Cart
                </Link>
            </div>
        </div>
    )
}
