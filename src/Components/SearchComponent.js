import '../App.css';
import React, { useState } from "react";
import ItemComponent from './ItemCategoryComponent';
const SearchComponent = () =>{
    const [message, setMessage] = useState('');
    const [category, setCategory] = useState([]);

    const handleChange= (event) => {
        setMessage(event.target.value);
        console.log('value is:', event.target.value);
        fetchData(event.target.value);
    };
    const fetchData = (text) => {

            setTimeout(() => {
                fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + text)
                .then((response) => response.json())
                .then((data) => setCategory(data.drinks));
            }, 1000);
        }

   return (
        <>
                <input className='search-item' type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    placeholder="Search by name"
                    value={message}
                />

            {category && category.length > 0 && category.map((categoryObj) => (
                    
                    <div className='items' key={categoryObj.idDrink}>
                        <img  className='image-section' key={categoryObj.idDrink} alt={categoryObj.strDrink} src={categoryObj.strDrinkThumb}/> 
                         <div className='title-section' key={categoryObj.strDrinkThumb}>{categoryObj.strDrink}</div>        
                    </div>
                ))}
                    {/* <ItemComponent  selectedCategory={category}/>    */}


       </>
    );
};

export default SearchComponent;