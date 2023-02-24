import '../App.css';
import ImageComponent from './ImageComponent';
import React, { useState,useEffect } from "react";

function CategoryComponent({selectedCategory}) {
  useEffect(() => {},[selectedCategory]);
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState([]);

  const handleChange= (event) => {
      setMessage(event.target.value);
      console.log('value is:', event.target.value);
      searchCocktail(event.target.value);
  };
  const searchCocktail = (text) => {
          setTimeout(() => {
              fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`)
              .then((response) => response.json())
              .then((data) => setCategory(data.drinks))
              .catch((err) => console.log(err));
          }, 1000);
  }
     
  const displayCocktailsByCategory = (selectedCategory) => {
        return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' +selectedCategory.selectedCategory)
              .then((response) => response.json())
              .then((data) => setCategory(data.drinks));
    
   }
        
   useEffect(() => {
            displayCocktailsByCategory({selectedCategory});
        },[selectedCategory])

    const [selectedImage, setItemClicked] = useState('');
    const [isShow, setIsShow] = React.useState(true);
    const handleClick = (categoryObj,isShow) => {
        setItemClicked(categoryObj);
        setIsShow(!isShow);
      };

      if (isShow)   {
        return(
        <>
        <input className='search-item' type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    placeholder="Search by name"
                    value={message}
                />
          <h2>
          <span>
            {selectedCategory}
          </span>
          </h2>
            {
          category && category.length > 0 && category.map((categoryObj) => (
                            // <!--search + display items-->
                  <div className='items' key={categoryObj.idDrink}>
                      <img  className='image-section' key={categoryObj.idDrink} alt={categoryObj.strDrink} src={categoryObj.strDrinkThumb} onClick={() =>handleClick(categoryObj,true) }/> 
                        <div className='title-section' key={categoryObj.strDrinkThumb}>{categoryObj.strDrink}</div>        
                  </div>
              ))
            }
       </>
        );
      }
      else
      {
          return (
          <>
              <ImageComponent selectedImage={selectedImage} selectedCategory={selectedCategory}/>
          </>
        );
      }
    
  }

export default CategoryComponent;


