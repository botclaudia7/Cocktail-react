import '../App.css';
import React, { useState } from "react";
import ItemComponent from './ItemCategoryComponent';

function ImageComponent({selectedImage,selectedCategory}) {
  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };

      return (
          <>{
            isShow?
             <>
               <div  className='title-drink' key={selectedImage.strDrinkThumb}>{selectedImage.strDrink}</div>        
                    <img  className='image-drink' alt={selectedImage.strDrink} id={selectedImage.idDrink} src={selectedImage.strDrinkThumb}/> 
                    <button className='back-button' onClick={handleClick}>Back</button>
              </>
            :
            <ItemComponent selectedCategory={selectedCategory} />
          }
           </>
      );  
      
    
    
}

export default ImageComponent;