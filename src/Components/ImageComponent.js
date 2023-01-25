import '../App.css';
import React, { useState } from "react";
import ItemComponent from './ItemComponent';

function ImageComponent({selectedImage,selectedCategory}) {
  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    console.log(isShow);
    setIsShow(!isShow);
  };

    if (isShow)   {
      return (
          <>
                    <div  className='title-drink' key={selectedImage.strDrinkThumb}>{selectedImage.strDrink}</div>        
                    <img  className='image-drink' alt={selectedImage.strDrink} id={selectedImage.idDrink} src={selectedImage.strDrinkThumb}/> 
                    <button className='back-button' onClick={handleClick}>Back</button>
           </>
      );  
      
    }else
      {
          return (
          <>
              <ItemComponent selectedCategory={selectedCategory} />
          </>
        );
      }
    
}

export default ImageComponent;