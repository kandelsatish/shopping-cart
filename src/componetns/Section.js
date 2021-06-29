import React from 'react'
import Product from './section/Product'
import Detail from './section/Detail'
import Cart from './Cart'
import {Route} from 'react-router-dom'
import Payment from './Payment'
export default function Section() {
    return (
        <section>
            <Route path='/' component={Product} exact/>
            <Route path='/product' component={Product} exact/>
            <Route path='/product/:id' exact component={Detail}/>
            <Route path='/cart'  exact component={Cart}/>
            <Route path='/payment'  exact component={Payment}/>
        </section>
    )
}
