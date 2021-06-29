import React from 'react'

import Nike_Shoes_01 from '../assets/nike-black-white.jpg';
import Nike_Shoes_02 from '../assets/nike-grey.jpg';
import Nike_Shoes_03 from '../assets/nike-snekers.jpg';
import Nike_Shoes_04 from '../assets/nike-vens.jpg';
import Nike_Cap from '../assets/cap.jpg';
import Nike_Bag from '../assets/bag.jpg';

console.log("This is nike shoes 01" + { Nike_Shoes_01 });

export const DataContext = React.createContext();

export default function DataContextProvider({ children }) {
    const [data, setData] = React.useState([
        {
            "_id": "1",
            "title": "Nike Shoes 01",
            "src": Nike_Shoes_01,
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 23,
            "colors": ["red", "black", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "2",
            "title": "Nike Shoes 02",
            "src": Nike_Shoes_02,
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 19,
            "colors": ["red", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "3",
            "title": "Nike Shoes 03",
            "src": Nike_Shoes_03,
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 50,
            "colors": ["lightblue", "white", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "4",
            "title": "Nike Shoes 04",
            "src": Nike_Shoes_04,
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 15,
            "colors": ["orange", "black", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "5",
            "title": "Nike Cap",
            "src": Nike_Cap,
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 10,
            "colors": ["orange", "black", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "6",
            "title": "Nike Bag",
            "src": Nike_Bag,
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 17,
            "colors": ["orange", "black", "crimson", "teal"],
            "count": 1
        }
    ]);
    const [cart, setCart] = React.useState([]);
    const [total,setTotal]=React.useState(0);

    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id;
        })
        if (check) {
            const dataFiltered = data.filter(product => {
                return product._id == id;
            })
            setCart([...cart, ...dataFiltered]);
        }
        else {
            alert("Item has already been added");
        }

    }
    const decreaseCount = id => {
        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }

    const increaseCount = id => {
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1;
            }
        })
        setCart([...cart]);
    }
    const deleteCartItem = id => {
        if (window.confirm("Do you want to delete this item?")) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })
            setCart(cart);
        }

    }

    return (
        <DataContext.Provider
            value={{ data, addCart, cart, decreaseCount, increaseCount, deleteCartItem,total }}
        >
            {children}
        </DataContext.Provider>
    )
}
