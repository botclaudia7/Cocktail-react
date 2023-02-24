import '../App.css';
import CategoryComponent from "./CategoryComponent";
import ItemCategoryComponent from './ItemCategoryComponent';

import React, { useState } from "react";
import NewCocktail from './NewCocktail';
// import CocktailTemplate from './CocktailTemplate';

function MenuComponent({drinks}) {
    const [selectedItem, setItemClicked] = useState('');
    const [isShow, setIsShow] = React.useState(true);
    const handleClick = (isShow) => {
        setIsShow(!isShow);
      };
      const handleClick2 = (childData) => {
        console.log(childData); 
        setIsShow(!isShow);
        // return(
        //     <>
        //     <CocktailTemplate cocktail={childData}/>
        //     </>
        // ); 
      };
 

    if(isShow)
    {
            return (
            <>
            <ul className='menu'>
              {drinks && drinks.length > 0 && drinks.map((drinksObj) => (
              <li key={drinksObj.strCategory}>
                  <button onClick={() => setItemClicked(drinksObj.strCategory)}>{drinksObj.strCategory}</button>
              </li>
              ))
              }
           </ul>
           <button  onClick={() =>handleClick(true) }>Create Cocktail</button>
        <CategoryComponent selectedCategory={selectedItem}/>
        <ItemCategoryComponent  selectedCategory={selectedItem}/>   
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


