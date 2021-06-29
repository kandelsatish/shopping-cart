import React from 'react'
import { DataContext } from '../DataContext'
import { Link } from 'react-router-dom'
import '../css/Product.css'
export default function Product() {
    const { data,addCart} = React.useContext(DataContext);
    
    return (
        <div id="product">
            {data.map(product => (
                <div className="card" key={product._id}>
                    <Link to={`/product/${product._id}`}>
                        <img src={product.src} alt="product" />
                    </Link>
                    <div className="content">
                        <h3>
                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                        </h3>
                        <span>${product.price}.00</span>
                        <p>{product.description}</p>
                        <button onClick={()=>addCart(product._id)}>Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
