import CategoryComponent from "./CategoryComponent";
import React, { useEffect,useState } from "react";

function  ItemMenu  ({drinks}) {
  const [itemClicked, setItemClicked] = useState('');


    useEffect(() => {
    })
    return (
        <>
          {drinks && drinks.length > 0 && drinks.map((drinksObj, index) => (
            <li key={drinksObj.strCategory}>
                <button onClick={() => setItemClicked(drinksObj.strCategory)}>{drinksObj.strCategory}</button>
            </li>
          ))}
          <CategoryComponent selectedCategory={itemClicked}/>

       </>
    );

    
};

export default ItemMenu;
