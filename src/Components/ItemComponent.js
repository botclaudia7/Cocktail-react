import '../App.css';
import ImageComponent from './ImageComponent';
import React, { useEffect, useState } from "react";

function ItemComponent({selectedCategory}) {
    console.log(selectedCategory);
    useEffect(() => {
    },[selectedCategory]);


    const [category, setCategory] = useState([]);

  const fetchData = (selectedCategory) => {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' +selectedCategory.selectedCategory)
          .then((response) => response.json())
          .then((data) => setCategory(data.drinks));

    }
    useEffect(() => {
        fetchData({selectedCategory});
    },[selectedCategory])


    const [selectedImage, setItemClicked] = useState('');
    const [isShow, setIsShow] = React.useState(true);
    const handleClick = (categoryObj,isShow) => {
        console.log(isShow);
        setItemClicked(categoryObj);
        setIsShow(!isShow);
      };
    useEffect(() => {
    })
    if (isShow)   {
        return (
            <>
                {category && category.length > 0 && category.map((categoryObj) => (
                    
                    <div className='items' key={categoryObj.idDrink}>
                        <img  className='image-section' key={categoryObj.idDrink} alt={categoryObj.strDrink} src={categoryObj.strDrinkThumb} onClick={() =>handleClick(categoryObj,true) }/> 
                         <div className='title-section' key={categoryObj.strDrinkThumb}>{categoryObj.strDrink}</div>        
                    </div>
                ))}
             </>
        );  
        
      }else
        {
            return (
            <>
                <ImageComponent selectedImage={selectedImage} selectedCategory={selectedCategory}/>
            </>
          );
        }
      
 
    }

export default ItemComponent;
