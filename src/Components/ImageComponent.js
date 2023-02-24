import '../App.css';
import React, { useState } from "react";
import CategoryComponent from './CategoryComponent';

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
            <CategoryComponent selectedCategory={selectedCategory} />
          }
           </>
      );  
      
    
    
}

export default ImageComponent;