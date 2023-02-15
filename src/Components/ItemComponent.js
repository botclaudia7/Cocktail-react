

function ItemComponent(category) { 
 
    return (
        <>
            {category && category.length > 0 && category.map((categoryObj) => (
                
                <div className='items' key={categoryObj.idDrink}>
                    <img  className='image-section' key={categoryObj.idDrink} alt={categoryObj.strDrink} src={categoryObj.strDrinkThumb}/> 
                     <div className='title-section' key={categoryObj.strDrinkThumb}>{categoryObj.strDrink}</div>        
                </div>
            ))}
         </>
    );  
  
}

export default ItemComponent;