import '../App.css';

import React, { useEffect } from "react";

const NewCocktail = (props)  =>{
  const handleClick= (event) =>{
        event.preventDefault();
        console.log(event.target.parentNode.cocktailName.value);
        console.log(event.target.parentNode.cocktailIngredient1.value);
        console.log(event.target.parentNode.cocktailIngredient2.value);
        console.log(event.target.parentNode.cocktailQty.value);
        const arrayItems = [event.target.parentNode.cocktailName.value,
          event.target.parentNode.cocktailIngredient1.value,
          event.target.parentNode.cocktailIngredient2.value,
          event.target.parentNode.cocktailQty.value];
        props.cocktailcreated(arrayItems);
      };
    useEffect(() => {
    })
    return (
        <>
        <div className='new-cocktail' name='main-div'>
           <img  className='new-cocktail-image' alt="tesgt" src='https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg'/> 
           <form className= 'form-cocktail'  name='cocktail'>
                <input type='text' placeholder='Cocktail name' name='cocktailName' ></input>
                <input type='text' placeholder='Ingredient 1' name='cocktailIngredient1' ></input>
                <input type='text' placeholder='Ingredient 2'  name='cocktailIngredient2'></input>
                <input type='number' placeholder='Quantity'  name='cocktailQty' ></input>
                <button  onClick={handleClick} type="submit">Create Cocktail</button>
           </form>
         </div>

       </>
    );
}

export default NewCocktail;




