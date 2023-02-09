import '../App.css';
import CategoryComponent from "./CategoryComponent";
import ItemComponent from './ItemComponent';

import React, { useEffect,useState } from "react";
import NewCocktail from './NewCocktail';
import CocktailTemplate from './CocktailTemplate';

function MenuComponent({drinks}) {
    const [selectedItem, setItemClicked] = useState('');
    const [isShow, setIsShow] = React.useState(true);
    const handleClick = (isShow) => {
        setIsShow(!isShow);
      };
      const handleClick2 = (childData) => {
        console.log(childData); 
        setIsShow(!isShow);
        displayCreatedCocktail(childData);    
      };
    const displayCreatedCocktail =(cocktailData)=>{
        return(
            <>
            <CocktailTemplate/>
            </>
        );
    };
    useEffect(() => {
    })
    if(isShow)
    {
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
    <button  onClick={() =>handleClick(true) }>Create Cocktail</button>
    <ItemComponent  selectedCategory={selectedItem}/>   

    </> );
    }
    else
    {
        return (
        <>
            <NewCocktail cocktailcreated={handleClick2}/>
        </>
      );
    }
    
    
 
}

export default MenuComponent;


