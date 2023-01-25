import '../App.css';
import CategoryComponent from "./CategoryComponent";
import ItemComponent from './ItemComponent';

import React, { useEffect,useState } from "react";

function MenuComponent({drinks}) {
    const [selectedItem, setItemClicked] = useState('');

    useEffect(() => {
    })
    return (
        <>
        <ul className='menu'>
            {drinks && drinks.length > 0 && drinks.map((drinksObj) => (
                <li key={drinksObj.strCategory}>
                    <button onClick={() => setItemClicked(drinksObj.strCategory)}>{drinksObj.strCategory}</button>
                </li>
            ))}
        </ul>
        <CategoryComponent selectedCategory={selectedItem}/>
        <ItemComponent  selectedCategory={selectedItem}/>   

       
       </>
    );
}

export default MenuComponent;


