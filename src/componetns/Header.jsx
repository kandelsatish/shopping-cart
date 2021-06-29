import React,{useState} from 'react'
import Menu from './svg/bars-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import Close from './svg/times-solid.svg'
import { Link } from 'react-router-dom'
import  '../componetns/css/Header.css'
import {DataContext} from './DataContext'
export default function Header() {
    const [toogle,setToogle]=useState(false);
    const {cart}=React.useContext(DataContext);
    return (
        <header>
            <div className="menu" onClick={()=>setToogle(!toogle)}>
                <img src={Menu} alt="bars" width="25" />
            </div>
            <div className="log">
                <h1><Link to="/">Nike</Link></h1>
            </div>
            <nav>
                <ul className={toogle?"toogle":''}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Login / Register </Link></li>
                    <li className="close" onClick={()=>setToogle(!toogle)}><img src={Close} alt="cross" width="25" /></li>
                </ul>
                <div className="nav-cart">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={CartIcon} alt="cart" width="25" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}
